const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
// eslint-disable-next-line no-unused-vars
const jwt = require('jsonwebtoken')

// folder Declearation
const userData = require('../model/user.model')

exports.signup = (request, response, next) => {
	const errors = validationResult(request)

	if (!errors.isEmpty()) {
		const error = new Error('Validation Invalid')
		error.statusCode = 422
		error.data = error.array()
		throw error
	}

	const username = request.body.username
	const email = request.body.email
	const password = request.body.password

	bcrypt
		.hash(password, 16)
		.then((hashedPassword) => {
			const user = new userData({
				username: username,
				email: email,
				password: hashedPassword,
			})
			return user.save()
		})
		.then((result) => {
			response.status(201).json({
				message: 'New User Created',
				userDataId: result._id,
			})
		})
		.catch((error) => {
			if (!errors.statusCode) {
				errors.statusCode = 500
			}
			next(error)
		})
}
