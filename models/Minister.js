const mongoose = require('mongoose');
const Enum = Object.freeze({
  Active: 'Active',
  Inactive: 'Inactive'
})

const MinisterSchema = mongoose.Schema({
  Name: String,
  Image: String,
  ID: Number,
  Description: String,
  Order: {
    type: Number,
    default: 0
  },
  Status: {
    type: String,
    default: Enum.Active
  }
});
const Minister = mongoose.model('Minister', MinisterSchema)

module.exports = Minister