const express = require("express");
// const router = require("./src/routes/api")
const app = new express();
const bodyParser = require("body-parser");
const authRoute = require("./src/routes/auth")
const usersRoute = require("./src/routes/users")
const hotelsRoute = require("./src/routes/hotels")
const roomsRoute = require("./src/routes/rooms")



//middleware
const ratelimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

app.use((err,req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack,
  })
})

//database
const mongoose = require("mongoose");

//security

app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

app.use(bodyParser.json());

//
const limiter = ratelimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

//Mongodb database connection

let URI = `mongodb+srv://testuser107:testuser107@cluster0.m8fxg.mongodb.net/backend-task`;
let OPTION = { autoIndex:true}
mongoose.connect(URI, OPTION, (error) =>{
    console.log("Connection Success")
    console.log(error)
})


// app.use("/api/v1", router);
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', usersRoute)
app.use('/api/v1/hotels', hotelsRoute)
app.use('/api/v1/rooms', roomsRoute)

//middleware




app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "not found" });
});

module.exports = app;