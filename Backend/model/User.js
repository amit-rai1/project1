// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: 'First Name must contain alphabets only',
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: 'Last Name must contain alphabets only',
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        // Basic email validation regex, you can improve it according to your needs
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Invalid email format',
    },
  },
  country: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const currentDate = new Date();
        const minDate = new Date();
        minDate.setFullYear(minDate.getFullYear() - 14);
        return value <= minDate && value < currentDate;
      },
      message: 'Date of Birth must be older than 14 years',
    },
  },
  age: { type: Number, required: true },
});

module.exports = mongoose.model('User', userSchema);
