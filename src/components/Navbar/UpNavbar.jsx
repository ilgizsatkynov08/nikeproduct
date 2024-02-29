import { Box, Link } from "@mui/material";
import React from "react";
import logo from "../../image/up_navbar.png";
import "./Navbar.css";
import { useNavigate } from 'react-router-dom'
const UpNavbar = () => {
  const navigate = useNavigate()
  return (
		<Box id='up_navbar'>
			<Box className='container'>
				<Box className='up_navbar'>
					<Link onClick={() => navigate("/")}>
						<img src={logo} alt='up_navbar' />
					</Link>
					<Box className='up_navbar_nav'>
						<Link>Find a Store</Link> | <Link>Help</Link> | <Link>Join Us</Link>{" "}
						| <Link>Sign In</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	)
};

export default UpNavbar;
