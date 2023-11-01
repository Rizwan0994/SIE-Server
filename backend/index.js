
// neccessery modules 👍👍👍
const dotenv = require("dotenv")
dotenv.config();
const express = require("express")
const app = express()
const cors = require("cors")



// requiring file path 👍👍👍
const ConnectDb = require("./config/Db.connect")
const UserRouter = require("./routes/users.routes");
const ShipRouter = require("./routes/ships.Routes");


// neccessary middleware 👍👍👍
app.use(express.json())

// cors origin for all browser 👍👍👍
app.use(cors({
    origin: "*",
}))



// home route 👍👍👍

app.get('/', function (req, res) {
    res.send("<h1>Sail-it-easy Server is Live </h1>")
});


// All Users Routes 👍👍👍
app.use("/api/users", UserRouter)

// All Ships Routes 👍👍👍
app.use("/api/ships", ShipRouter)





const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await ConnectDb()
    console.log(`Server running on http://localhost:${PORT}`)
})