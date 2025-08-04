require("express-async-errors");
const express = require("express");
const cors = require("cors");
const routes = require("./router/routes.js");
const error = require("./middlewares/error.middleware.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Configure CORS
// app.use(cors({
//   origin: ['http://localhost:5173'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

app.use(cors());

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.use("/api", routes);

app.get("/users", (req, res) => {
  res.json([{ name: "John Doee" }]);
});

app.use(error);

module.exports = app;
