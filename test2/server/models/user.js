const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	email: { type: String, required: true },
	password: { type: String, required: true },
	role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id, email: this.email, role: this.role }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const User = mongoose.model("user", userSchema);

const validate = (data) => {
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
	});
	return schema.validate(data);
};

module.exports = { User, validate };
