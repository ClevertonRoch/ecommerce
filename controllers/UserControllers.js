// const bcrypt = require('bcrypt')
const User = require('../models/User')
const statusCode = require('http-status')

const FindId = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(statusCode.NOT_FOUND).json({ response: 'Usuarios não foi encontrado' })
    const { password, ...others } = user._doc
    res.status(statusCode.OK).json({ response: others })
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ response: 'Usuarios não foi encontrado' })
  }
}
const FindAll = async (req, res) => {
  const query = req.query.new ? req.query.new : false
  try {
    const user = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find()
    // const user = await User.find().limit(2)

    // const { password, ...others } = user._doc
    res.status(statusCode.OK).json({ response: user })
  } catch (error) {
    res.status(statusCode.NOT_FOUND).json({ response: 'Usuario não foi encontrado' })
  }
}

// Get user stats
// const stats = async (req, res) => {
//   const date = new Date()
//   const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

//   try {

//   } catch (error) {
//     res.status(statusCode.INTERNAL_SERVER_ERROR).json({ response: error })
//   }
// }

const Update = async (req, res) => {
  const { id, ...others } = req.body

  try {
    const currentData = await User.findByIdAndUpdate(req.body.id, { $set: others }, { new: true })
    res.status(statusCode.OK).json(currentData)
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json({ response: error })
  }
}

const Delete = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res.status(statusCode.OK).json({ response: 'Usuarios deletado' })
  } catch (error) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).json({ response: error })
  }
}

module.exports = {
  Update,
  Delete,
  FindAll,
  FindId
}
