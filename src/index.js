const express = require("express");

const { register, login } = require("./controllers/auth.controller");
const productController = require("./controllers/product.controller");

const postController=require("./controllers/post.controller")

const userController=require("./controllers/user.controller")

const app = express();

app.use(express.json());

// app.use("/users", userController) // /register /login
app.post("/register", register);
app.post("/login", login);

app.use("/products", productController);

app.use("/posts", postController)
app.use("/users",userController)

module.exports = app;
