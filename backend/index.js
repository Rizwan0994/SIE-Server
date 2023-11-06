
// neccessery modules 👍👍👍
const dotenv = require("dotenv")
dotenv.config();
const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser");

// const httpsServer = https.createServer({
//     ...credentials,
//     rejectUnauthorized: false // Set rejectUnauthorized to false
//   }, app);
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

const PORT = 443; // Default HTTPS port

// requiring file path 👍👍👍
const ConnectDb = require("./config/Db.connect")
const UserRouter = require("./routes/users.routes");
const ShipRouter = require("./routes/ships.Routes");
const ShipBookingRouter = require("./routes/shipsBooking.routes");


// neccessary middleware 👍👍👍
app.use(express.json())
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
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

// All Ships Booking Routes 👍👍👍
app.use("/api/shipsBooking", ShipBookingRouter)





// httpsServer.listen(PORT, () => {
    
//     console.log(`Server running on https://localhost:${PORT}/`);
//   });

  app.listen(PORT, async () => {
    await ConnectDb()
    console.log(`Server running on http://localhost:${PORT}`)
})

// const dotenv = require("dotenv");
// dotenv.config();
// const express = require("express");
// const http = require("http");
// const https = require("https");
// const fs = require("fs");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   next();
// });

// const PORT_HTTP = process.env.PORT_HTTP || 80; // Default HTTP port
// const PORT_HTTPS = process.env.PORT_HTTPS || 443; // Default HTTPS port

// const httpServer = http.createServer(app);
// const httpsServer = https.createServer(
//   {
//     key: fs.readFileSync("key.pem"),
//     cert: fs.readFileSync("cert.pem"),
//   },
//   app
// );

// // Require your modules and middleware
// const ConnectDb = require("./config/Db.connect");
// const UserRouter = require("./routes/users.routes");
// const ShipRouter = require("./routes/ships.Routes");

// app.use(express.json());
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors({ origin: "*" }));

// app.get("/", function (req, res) {
//   res.send("<h1>Sail-it-easy Server is Live</h1>");
// });

// app.use("/api/users", UserRouter);
// app.use("/api/ships", ShipRouter);

// httpServer.listen(PORT_HTTP, async () => {
//   await ConnectDb();
//   console.log(`HTTP Server running on http://localhost:${PORT_HTTP}`);
// });

// httpsServer.listen(PORT_HTTPS, async () => {
//   await ConnectDb();
//   console.log(`HTTPS Server running on https://localhost:${PORT_HTTPS}`);
// });

