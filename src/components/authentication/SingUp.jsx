import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from '../context/AuthContext'

const SignUp = () => {
	const { register, signInWithGoogle } = useAuthContext()
	const navigate = useNavigate()
	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [error, setError] = useState("")

	async function handleSubmit() {
		try {
			await register(email, password)
			navigate("/")
		} catch (error) {
			console.log("erorr")
		}
	}

	return (
		<>
			<Box
				sx={{
					p: "20px 0",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						width: "400px",
						display: "flex",
						flexDirection: "column",
						gap: "30px",
						textAlign: "center",
					}}
				>
					<Typography variant='h4'>Регистрация</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: "10px",
						}}
					>
						<Typography>Почта</Typography>
						<TextField
							onChange={(e) => setEmail(e.target.value)}
							sx={{ width: "100%" }}
							id='outlined-basic'
							label='Введите свою почту'
							variant='outlined'
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: "10px",
						}}
					>
						<Typography>Пароль</Typography>
						<TextField
							sx={{ width: "100%" }}
							label='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											aria-label='toggle password visibility'
											edge='end'
										></IconButton>
									</InputAdornment>
								),
							}}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "30px",
						}}
					>
						<Typography>
							<div className='icons'>
								<h5>Согласен с Условиями</h5>
							</div>
						</Typography>
						<Button
							onClick={handleSubmit}
							sx={{ width: "100%" }}
							variant='contained'
						>
							Зарегистрироваться
						</Button>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								gap: "10px",
							}}
						>
							<div
								style={{ background: "gray", height: "1px", width: "130px" }}
							></div>
							или
							<div
								style={{ background: "gray", height: "1px", width: "130px" }}
							></div>
						</Box>
						<Button
							onClick={() => signInWithGoogle()}
							sx={{ width: "40%" }}
							variant='contained'
						>
							Google
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default SignUp
