const yup = require('yup')

const checkCreate = yup.object().shape({
  username: yup.string().min(2).required().trim().strict(),
  email: yup.string().email().trim().strict().required(),
  password: yup.string().min(4).trim().strict().required()
})
const checkUpdate = yup.object().shape({
  id: yup.string().min(2).required().trim().strict(),
  username: yup.string().min(2).required().trim().strict(),
  email: yup.string().email().trim().strict().required(),
  role: yup.number().integer().required()
})
const checklogin = yup.object().shape({
  email: yup.string().trim().strict().email().required(),
  password: yup.string().min(4).trim().strict().required()
})
const checkId = yup.object().shape({
  id: yup.string().min(2).required().trim().strict()
})
const checkEmail = yup.object().shape({
  email: yup.string().email().trim().strict().required()
})

module.exports = {
  checkCreate,
  checkUpdate,
  checkId,
  checkEmail,
  checklogin
}
