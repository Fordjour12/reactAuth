import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BiUser, BiLock, BiEnvelope } from 'react-icons/bi'
import Log from '../image/undraw_login_re_4vu2.svg'
import classes from './Login.module.css'
const Login = () => {
	const [changeForm, setChangeForm] = useState(false)

	const changeFormHandler = () => setChangeForm(!changeForm)
	const changeFormBack = () => setChangeForm(false)

	return (
		<div className={classes.formContainer}>
			<div className={classes.formContent}>
				<div className={classes.imageConatainer}>
					<img src={Log} alt="" className={classes.image} />
				</div>
				<div className={classes.forms}>
					<form action="" className={classes.login}>
						<h1 className={classes.title}>Login</h1>
						<div className={classes.inputInfo}>
							<div className={classes.inputBox}>
								<BiUser className={classes.icons} />
								<input
									type="text"
									name=""
									id="password"
									placeholder="Username"
								/>
							</div>
							<div className={classes.inputBox}>
								<BiLock className={classes.icons} />
								<input
									type="password"
									name=""
									id="password"
									placeholder="Password"
								/>
							</div>
						</div>
						<div>
							<Link to="#" className={classes.forget}>
								Forget Password
							</Link>
							<button className={classes.btn}>sign in</button>
						</div>

						<div>
							<span>Don't have an account?</span>
							<span>
								<Link to="#" onClick={changeFormBack}>
									Signup
								</Link>
							</span>
						</div>
					</form>

					<form
						action=""
						className={`${classes.login}  ${
							changeForm ? classes.hidden : classes.active
						}`}
					>
						<h1 className={classes.title}>Create Account</h1>
						<div className={classes.inputInfo}>
							<div className={classes.inputBox}>
								<BiUser className={classes.icons} />
								<input
									type="text"
									name=""
									id="password"
									placeholder="Username"
								/>
							</div>
							<div className={classes.inputBox}>
								<BiEnvelope className={classes.icons} />
								<input
									type="email"
									name=""
									id="password"
									placeholder="Email"
								/>
							</div>
							<div className={classes.inputBox}>
								<BiLock className={classes.icons} />
								<input
									type="password"
									name=""
									id="password"
									placeholder="Password"
								/>
							</div>
						</div>
						<div>
							<button className={classes.btn}>sign up</button>
						</div>

						<div>
							<span>Already have an account?</span>
							<span>
								<Link to="#" onClick={changeFormHandler}>
									Signin
								</Link>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
