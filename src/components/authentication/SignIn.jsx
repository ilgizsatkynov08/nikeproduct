import { Box, Button, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthContext } from '../context/AuthContext'

const SignIn = () => {
	const { logIn } = useAuthContext()

	const [email, setEmail] = useState()
	const [password, setPassword] = useState()
	const [erorr, setErorr] = useState()
	const navigate = useNavigate()
	async function handleLogInSabmit() {
		try {
			await logIn(email, password)
			navigate("/")
		} catch (error) {
			console.log("erorrd")
		}
	}

	return (
		<>
			<Box
				sx={{
					p: "80px 0",
					display: "flex",
					flexDirection: "column",
					alignItems: "center"
				}}
			>
				<Box
					sx={{
						width: "400px",
						display: "flex",
						flexDirection: "column",
						gap: "30px",
						textAlign: "center"
					}}
				>
					<Typography variant='h4'>Добро пожаловать</Typography>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: "10px"
						}}
					>
						<Typography>Почта</Typography>
						<TextField
							onChange={e => setEmail(e.target.value)}
							sx={{ width: "100%" }}
							id='outlined-basic'
							label='Outlined'
							variant='outlined'
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							gap: "10px"
						}}
					>
						<Typography>Пароль</Typography>
						<TextField
							onChange={e => setPassword(e.target.value)}
							sx={{ width: "100%" }}
							id='outlined-basic'
							label='Outlined'
							variant='outlined'
						/>
					</Box>
					<Button
						onClick={handleLogInSabmit}
						sx={{ width: "100%" }}
						variant='contained'
					>
						Sign in
					</Button>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							gap: "30px"
						}}
					>
						<Typography>
							У вас нет аккаунта? <Link to='/sign_up'> Зарегистрироваться</Link>{" "}
						</Typography>
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								gap: "10px"
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
						<Button sx={{ width: "40%" }} variant='contained'>
							Google
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default SignIn
