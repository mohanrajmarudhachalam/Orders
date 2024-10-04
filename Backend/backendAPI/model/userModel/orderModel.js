const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  bookID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products',
    required: true
  },
  quantity: {
    type: String,
    required: [true, 'Enter the Book Quantity']
  },
  totalPrice: {
    type: String,
    required: [true, 'Add a Price']
  },
  paymetMethod: {
    type: String,
    enum: ['Online Paymet', 'Cash on Delivery'],
    required: [true, 'Select a Payment Method']
  },
  paymentInformation: {
    cardNumber: {
      type: Number,
      match: [/^\d{16}$/, 'Please Enter valid Card Number']
    },
    expiryDate: {
      type: String,
    },
    cvv: {
      type: Number,
      match: [/^\d{3}$/, 'Please Enter Valid CVV Number']
    }
  },
  orderDate: {
    type: String,
    default: Date.now
  },
  deliveryStatus: {
    type: String,
    default: 'Pending'
  },
},
  {
    timestamps: true
  }

);

module.exports = mongoose.model('orders', orderSchema);