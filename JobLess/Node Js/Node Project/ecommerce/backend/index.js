const express = require("express");
const app = express();
// IMPORT DATABASES CONFIG
require("./database/config");
const User = require("./database/User");
// Intergrate Frontend With Backend require following module
const cors = require("cors");  // npm i cors

app.use(express.json());
app.use(cors());
app.post('/signup', async (request, response) => {
    let user = new User(request.body);
    let store = await user.save();
    store = store.toObject();    // data convert to object
    delete store.password;
    response.send(store)
})


app.post('/signin', async (request, response) => {
    if (request.body.password && request.body.email) {
        let user = await User.findOne(request.body).select("-password");
        if (user) {
            response.send(user);
        }
        else {
            response.send("Result : No User Found")
        }
    }
    else {
        response.send("Result : No User Found")
    }
})


// (PRODUCTS)=======================================================
const ProductModel = require("./database/Product");
app.post('/insertproduct', async (request, response) => {
    console.log(request.body);
    let insert_product = new ProductModel(request.body);
    let store = await insert_product.save();
    response.send(request.body)
})

app.get('/products', async (request, response) => {
    let allProducts = await ProductModel.find();
    if (allProducts.length > 0) {
        response.send(allProducts);
    }
    else {
        response.send({ "Resukt": "No Products Found" });
    }
})

app.delete('/deleteProduct/:product_id', async (request, response) => {
    let deleteProduct = await ProductModel.deleteOne({ _id: request.params.product_id });
    console.log(deleteProduct.acknowledged);
    response.send(deleteProduct);
})


app.get('/singleProduct/:product_id', async (request, response) => {
    let product = await ProductModel.findOne({ _id: request.params.product_id });
    if (product) {
        response.send(product);
    }
    else {
        response.send({ "Result": "No Product Found!!!" })
    }
})

app.put('/updateProduct/:product_id', async (request, response) => {
    let updateproduct = await ProductModel.updateOne(
        { _id: request.params.product_id },
        { $set: request.body }
    )
    console.log(updateproduct);
    response.send(updateproduct)
})

const port = 1000;
app.listen(port, () => {
    console.log("Server Started at port 1000");
})
