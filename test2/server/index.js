require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const getRoleRoutes = require("./routes/getRole");
const getUsersRoutes = require("./routes/getUsers");
const addUsersRoutes = require("./routes/addUsers");
const editUsersRoutes = require("./routes/editUsers");
const deleteUsersRoutes = require("./routes/deleteUsers");



// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/getRole", getRoleRoutes);
app.use("/api/getUsers", getUsersRoutes);
app.use("/api/addUsers", addUsersRoutes);
app.use("/api/deleteUsers", deleteUsersRoutes);
app.use("/api/editUsers", editUsersRoutes);

const port = process.env.PORT || 8080;
app.listen(8080, console.log(`Listening on port ${port}...`));
