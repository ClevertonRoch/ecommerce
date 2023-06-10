const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      required: true,
      unique: true
    },
    products: [{
      productId: {
        type: String
      },
      quantity: {
        type: Number,
        default: 1
      }
    }
    ],
    amount: {
      type: Number,
      requered: true
    },
    address: {
      type: Object,
      requered: true
    },
    status: {
      type: String,
      default: 'pending'
    }
  }, { timestamps: true }

)

module.exports = mongoose.model('Order', orderSchema)
