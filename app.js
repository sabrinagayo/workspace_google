const express = require("express");
const app = express();
app.listen(3000);
app.use('/static', express.static('public'));

app.get("/", (req, res) => {
    res.sendFile("./views/index.html", {root: __dirname});
    
});

app.get("/index.html", (req,res) => {
    res.sendFile("./views/index.html", {root: __dirname});

});

app.get("/login.html", (req,res) => {
    res.sendFile("./views/login.html", {root: __dirname});

});

app.get("/categories.html", (req,res) => {
    res.sendFile("./views/categories.html", {root: __dirname});

});

app.get("/category-info.html", (req,res) => {
    res.sendFile("./views/category-info.html", {root: __dirname});

});

app.get("/products.html", (req,res) => {
    res.sendFile("./views/products.html", {root: __dirname});

});

app.get("/product-info.html", (req,res) => {
    res.sendFile("./views/product-info.html", {root: __dirname});

});

app.get("/cart.html", (req,res) => {
    res.sendFile("./views/cart.html", {root: __dirname});

});

app.get("/sell.html", (req,res) => {
    res.sendFile("./views/sell.html", {root: __dirname});

});


app.get("/my-profile.html", (req,res) => {
    res.sendFile("./views/my-profile.html", {root: __dirname});

});