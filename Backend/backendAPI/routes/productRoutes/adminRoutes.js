const express = require('express');
const router = express.Router();
const {
  getAdmin,
  postAdmin,
  putAdmin,
  deleteAdmin
} = require('../../controllers/product/adminController');

router.route('/').get(getAdmin).post(postAdmin);
router.route('/:id').put(putAdmin).delete(deleteAdmin);

module.exports = router;