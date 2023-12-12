
const express = require('express');
const bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.get('/add-product', (req, res, next) =>{
    res.send('<form action= "/product" method="POST"><input type="text" name="title"><br><br> <input type="number" name="size"><br><br><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) =>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req, res, next) =>{
    res.send('<h1>Hello from express </h1>');
    
});
app.listen(5000);