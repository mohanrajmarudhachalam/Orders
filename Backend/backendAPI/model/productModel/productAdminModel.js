const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
  {
    adminName:
    {
      type: String,
      required: [true, 'Please Add Admin Name']
    },
    email:
    {
      type: String,
      unique: true,
      required: [true, 'Please Add a Email'],
      match: [/.+\@.+\..+/, 'Please Enter Valid Email Address']
    },
    phoneNumber:
    {
      type: Number,
      required: [true, 'Please Add a Admin Phone Number'],
      match: [/^\d{10}$/, 'Please Enter Valid Phone Number']
    },
    adminType:
    {
      type: String,
      enum: ['Super Admin', 'Admin'],
      required: [true, 'Please Select a Admin Type']
    },
    password:
    {
      type: String,
      required: [true, 'Add a Password']
    }
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model('Admin', adminSchema);