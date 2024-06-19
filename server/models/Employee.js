const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    email: {String, required: true, unique: true},
    password: {String, required: true},
    role: {String, ref: 'role'}
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel