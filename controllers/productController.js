const Product = require('../models/products')
const ErrorHandle= require('../utils/errorHandler');
// const APIFeatures= require('../utils/apiFeatures');



// const catchAsyncErrors= require('../middlewares/catchAsyncErrors');
// Create new product   =>   /api/v1/admin/product/new
exports.newProduct = async (req, res, next) => {

    req.body.user = req.user.id;
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}
// Get all products   =>   /api/v1/admin/products
exports.getProducts =async (req, res, next) => {
    // const apiFeatures= new APIFeatures(products.find(),req.query)
    // .search()
    const products = await Product.find;

    res.status(200).json({
        success: true,
        // count: products.length,
        products
    })
}
// Get single product details   =>   /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandle('Product not found', 404));
}
res.status(200).json({
    success: true,
    product
})

}
// Update Product   =>   /api/v1/admin/product/:id
exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandle('Product not found', 404));
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        //   useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })

}
// Delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct =async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandle('Product not found', 404));
    }
    await product.deleteOne();
    res.status(200).json({
        success: true,
        message:'Product is deleted'
    })

}
