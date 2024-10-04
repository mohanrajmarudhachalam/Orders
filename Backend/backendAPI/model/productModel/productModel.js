const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Users',
    //   required: true
    // },
    bookName: {
      type: String,
      required: [true, 'Add a Book Name']
    },
    bookAurthor: {
      type: String,
      required: [true, 'Add a Aurthor Name']
    },
    bookLanguage: {
      type: String,
      required: [true, 'Add a Book`s Language']
    },
    bookPrice: {
      type: Number,
      required: [true, 'Add a Book Price']
    },
    bookType: {
      type: String,
      enum: ['Fiction', 'Non-fiction', 'Autobiography'],
      required: [true, 'Select a Book Type']
    },
    Discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    yearOfPublication: {
      type: Number,
      required: [true, 'Add a Year of Publication']
    },
    bookEdition: {
      type: Number,
      required: [true, 'Add a Edition']
    },
    ISBNNumber: {
      type: String,
      unique: true,
      required: [true, 'Add a ISBN Number'],
      match: [/^[a-zA-Z0-9]{12}$/, 'Please Enter Valid ISBN Number']
    },
    availableBookQuantity: {
      type: Number,
      required: [true, 'Add a Book Quantity']
    },
    cashOnDelivery: {
      type: String,
      enum: ['Yes', 'No'],
      required: [true, 'Add a Cashon Delivery Option']
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Products', productSchema);