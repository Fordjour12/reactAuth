const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			min: 3,
			max: 40,
			lowercase: true,
			trim: true,
		},
		email: { type: String, required: true, trim: true },
		password: { type: String, required: true, min: 6, max: 20, trim: true },
	},
	{ timestamps },
	{ collection: 'Users' },
)

module.exports = mongoose.model('User', userSchema)
