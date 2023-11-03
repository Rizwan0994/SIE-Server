const jwt = require('jsonwebtoken');
const UsersModel = require('../models/Users.model');
const { sendVerificationEmail, sendResetPasswordEmail } = require('../middleware/Nodemailer.middleware');
const crypto = require("crypto");
const bcrypt = require('bcryptjs');

/*user signup*/
const registerUser = async (req, res) => {
    try {
        // Extract user details from the request body
        const { fname, lname, email, phoneNo,  password } = req.body;
        console.log(req.body)
        if (!fname || !lname || !phoneNo || !email  || !password) {
            return res.status(400).send({ message: "All fields are required!" });
        }

        const isEmailExists = await UsersModel.findOne({ email: email });
        if (isEmailExists) {
            return res.status(400).send({ message: "Sorry! Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const user = new UsersModel({
            fname,
            lname,
            email,
            phoneNo,
            password: hashedPassword,
            isVerified: false,
            verificationToken: ''
        });

        // Generate a verification token
        const token = jwt.sign({ userId: user._id }, process.env.JSON_WEB_TOKEN_SECRET_KEY, { expiresIn: '5m' });
        user.verificationToken = token;

        // Save the user to the database
        await user.save();

        // Send verification email
        await sendVerificationEmail(email, token);

        res.status(201).json({ message: 'Registration successful. Please check your email for verification.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
};

/*continue with google and facebook*/
const ContinueWithGoogleFacebook = async (req, res) => {
    try {
        // Extract user details from the request body
        const {facebookID, googleID, name, email,verificationToken } = req.body;


        if (!name || !email || !verificationToken) {
            return res.status(400).send({ message: "User data are required!" });
        }

        const isEmailExists = await UsersModel.findOne({ email: email });
        if (isEmailExists) {
            return res.status(200).send({ message: "Login Successfull!" });
            
        }
        // Create a new user
        const user = new UsersModel({
            name,
            email,
            facebookID,
            googleID,
            isVerified: true,
            password:'null',
            lname:'null',
            fname:'null',
            verificationToken: verificationToken
        });

        // Save the user to the database
        await user.save();
        res.status(201).json({ message: 'Registration successful.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
};

/*..user login..*/
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: "All fields are required!" });
        }
        const user = await UsersModel.findOne({ email: email });
        if (!user) {
            return res.status(400).send({ message: "Sorry! Email not exists" });
        }
        if (!user.isVerified) {
            return res.status(400).send({ message: "Sorry! Email not verified" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ message: "Sorry! Invalid credentials" });
        }
      

        const token = await jwt.sign({ _id: user._id }, process.env.JSON_WEB_TOKEN_SECRET_KEY, {
            expiresIn: "7d",
        });

        res.status(200).json({
            token,
            user: {
                _id: user._id,
                email: user.email,
            },
        });



    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
}

/*..user first time verify email..*/
const verifyEmail = async (req, res) => {
    const token = req.params.token;
    if (!token) {
        return res.status(400).send({ message: "Please provide a token" });
    }
    try {
        // Verify the token without checking the expiration by setting `ignoreExpiration` to `true`
        const decodedToken = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET_KEY, { ignoreExpiration: true });
        // Check if the verification token has expired
        const tokenExpirationTime = new Date(decodedToken.exp * 1000); // Convert expiration time to milliseconds
        const currentTime = new Date();
        if (currentTime > tokenExpirationTime) {
            throw new Error('TokenExpiredError');
        }

        // Find the user by the verification token
        const user = await UsersModel.findOne({ verificationToken: token });
        if (!user) {
            // User not found
            return res.status(400).send({ message: "User not found. Already verified or token expired." });
        }

        if (user.isVerified) {
            // User already verified
            return res.status(200).json({ message: "Email already verified." });
        }

        if (user._id.toString() !== decodedToken.userId) {
            return res.status(400).send({ message: "Invalid token" });
        }

        // Update the user's verification status
        user.isVerified = true;
        user.verificationToken = '';

        // Save the user to the database
        await user.save();

        res.status(200).json({ message: 'Email verification successful.' });
    } catch (error) {
        // Handle token verification errors
        if (error.name === 'TokenExpiredError') {
            // Find and delete the user from the database
            await UsersModel.findOneAndDelete({ verificationToken: token });
            return res.status(400).json({ message: 'Token expired. User data deleted inside catch block.' });
        }
        res.status(400).json({ message: 'Invalid or expired token.', error: error.message });
    }
};

/*..user forgot password..*/
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).send({ message: "Please provide an email" });
        }
        const user = await UsersModel.findOne({ email: email });
        if (!user) {
            return res.status(400).send({ message: "We couldn't find an account linked to this email" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JSON_WEB_TOKEN_SECRET_KEY, { expiresIn: '5m' });
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 300000; // 5 minutes
        await user.save();
        await sendResetPasswordEmail(email, token);
        res.status(200).json({ message: 'Please check your email for reset password.' });



    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
}
const resetPassword = async (req, res) => {
    const { password, confirmPassword } = req.body;
    const token = req.params.token;
    if (!password || !confirmPassword) {
        return res.status(400).send({ message: "All fields are required!" });
    }
    if (password !== confirmPassword) {
        return res.status(400).send({ message: "Password and confirm password not match" });
    }
    const user = await UsersModel.findOne({ resetPasswordToken: token });
    if (!user) {
        return res.status(400).send({ message: "Sorry! Email not exists" });
    }
    try {
        // Verify the token without checking the expiration by setting `ignoreExpiration` to `true`
        const decodedToken = jwt.verify(token, process.env.JSON_WEB_TOKEN_SECRET_KEY, { ignoreExpiration: true });
        // Check if the verification token has expired
        const tokenExpirationTime = new Date(decodedToken.exp * 1000); // Convert expiration time to milliseconds
        const currentTime = new Date();
        if (currentTime > tokenExpirationTime) {
            throw new Error('TokenExpiredError');
        }

        // Find the user by the verification token
        const user = await UsersModel.findOne({ resetPasswordToken: token });
        if (!user) {
            // User not found
            return res.status(400).send({ message: "User not found. Already verified or token expired." });

        }

        if (user._id.toString() !== decodedToken.userId) {
            return res.status(400).send({ message: "Invalid token" });
        }

        // Update the user's verification status
        user.resetPasswordToken = '';
        user.resetPasswordExpires = null;
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

        // Save the user status to the database
        await user.save();


        res.status(200).json({ message: 'Password reset successful.' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
}



// Export the controller functions
module.exports = {
    registerUser,
    verifyEmail,
    loginUser,
    forgotPassword,
    resetPassword,
    ContinueWithGoogleFacebook
};
