const asyncHandler = require('express-async-handler')
const Product = require('../../model/productModel/productModel')

const getProduct = asyncHandler(async (req, res) => {
  const products = await Product.find()
  res.status(200).json(products)
});

const postProduct = asyncHandler(async (req, res) => {
  // if (!req.body.order) {
  //   res.status(400);
  //   throw new Error(`Please Enter Orders`)
  // }
  const products = await Product.create({
    bookName: req.body.bookName,
    bookAurthor: req.body.bookAurthor,
    bookLanguage: req.body.bookLanguage,
    bookPrice: req.body.bookPrice,
    bookType: req.body.bookType,
    Discount: req.body.Discount,
    yearOfPublication: req.body.yearOfPublication,
    bookEdition: req.body.bookEdition,
    ISBNNumber: req.body.ISBNNumber,
    availableBookQuantity: req.body.availableBookQuantity,
    cashOnDelivery: req.body.cashOnDelivery,
  })
  
  res.status(201).json(products)
});

const putProduct = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);
  if (!products) {
    res.status(400)
    throw new Error('Product Not Found')
  }
  const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json(updateProduct)
});

const deleteProduct = asyncHandler(async (req, res) => {
  const products = await Product.findById(req.params.id);
  if (!products) {
    res.status(400)
    throw new Error('Product Not Found')
  }
  await Product.findOneAndDelete({ products })
  // await Product.remove();
  res.status(200).json({ message: `Deleted ID:  ${req.params.id}` })
});

module.exports = {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct
};