const express = require('express')
const { body } = require('express-validator')

// folder Declearation
const userData = require('../model/user.model')
const authController = require('../controller/auth.controller')

// Declearations
const router = express.Router()

router.put(
	'/signup',
	[
		body('username').trim().not().isEmpty().isLength({ min: 3, max: 40 }),
		body('emaill')
			.trim()
			.isEmail()
			.not()
			.isEmpty()
			.withMessage('Please Enter a Valid Email')
			// eslint-disable-next-line no-unused-vars
			.custom(async (value, { request }) => {
				const userDoc = await userData.findOne({ email: value })
				if (userDoc) {
					return Promise.reject('E-mail already in use')
				}
			})
			.normalizeEmail(),
		body('password').trim().not().isEmpty().isLength({ min: 6, max: 40 }),
	],
	authController.signup
)
