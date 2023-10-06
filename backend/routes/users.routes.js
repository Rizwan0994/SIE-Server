const express = require('express');
const { registerUser, verifyEmail, loginUser,forgotPassword,resetPassword } = require('../controllers/user.controlle');
const UserRouter = express.Router();

UserRouter.post("/register",registerUser)
UserRouter.post("/login",loginUser)
UserRouter.get("/verify-email/:token",verifyEmail)
UserRouter.post("/forgot-password",forgotPassword)
UserRouter.post("/reset-password/:token",resetPassword)




module.exports = UserRouter;
