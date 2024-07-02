// models/User.js
import mongoose from 'mongoose'

const InvoiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [60, 'Name cannot be more than 60 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email for this user.'],
    unique: true,
    maxlength: [20, 'Email cannot be more than 20 characters']
  },
  password: {
    type: String,
    required: [true, 'Please provide an password for this user.'],
    minlength: [8, 'Password cannot be less than 8 characters']
  }
})

const InvoiceModel = mongoose.model('Invoice', InvoiceSchema, 'invoices')

export default InvoiceModel
