const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// folder Declearation
const userModel = require('../model/user.model')



exports.signup=(request,response,next)=>{
	const errors = validationResult(request)
	
	if(!errors.isEmpty()){
		const error = new 
	}
}

