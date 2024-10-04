const express = require('express')
const router = express.Router();
const {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct } = require('../../controllers/product/productController')

router.route('/').get(getProduct).post(postProduct);
router.route(`/:id`).put(putProduct).delete(deleteProduct);

module.exports = router;