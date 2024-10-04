const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'Add Your First Name']
    },
    lastName: {
      type: String,
      required: [true, 'Add Your Last Name']
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Add Your Email'],
      match: [/.+\@.+\..+/, 'Please Enter Valid Email Address']
    },
    phoneNumber: {
      type: Number,
      required: [true, 'Add Your Phone NUmber'],
      match: [/^\d{10}$/, 'Please Enter Valid Phone Number']
    },
    address: {
      type: String,
      required: [true, 'Add Your Address']
    },
    password: {
      type: String,
      required: [true, 'Add Your Password']
    },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Users', userSchema);