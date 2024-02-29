import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import AddIcon from "@mui/icons-material/Add"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import WorkOutlineIcon from "@mui/icons-material/WorkOutline"
import { Box, IconButton, Link, Menu, MenuItem, Tooltip } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ADMIN_USER } from "../../helpers/const"
import logo from "../../image/up_test.png"
import { useAuthContext } from "../context/AuthContext"
import { useProduct } from "../context/ProductContext"
import "./Navbar.css"

const NavbarTest = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const { setProduct, product, readProduct } = useProduct()
  const { user, logOut } = useAuthContext()

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const searchProduct = () => {
    const result = product.filter(
      el =>
        el.name.toLowerCase().includes(search) ||
        el.price.toString().includes(search)
    )
    setProduct(result)
  }

  useEffect(() => {
    if (search.trim() !== "") {
      searchProduct()
    } else {
      readProduct()
    }
  }, [search, readProduct, setProduct])

  function handleLogOut() {
    logOut()
    handleClose()
  }

  const renderAuthMenu = () => {
    return (
      <Menu
        id='menu-appbar'
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            p: "10px"
          }}
        >
          <Link onClick={() => navigate("/sign_in")}>sign in</Link>
          <Link onClick={() => navigate("/sign_up")}>sign up</Link>
        </Box>
      </Menu>
    )
  }

  return (
    <Box id='test_navbar'>
      <Box className='container'>
        <Box className='test_navbar'>
          <img src={logo} alt='test_navbar' />
          <Box className='test_navbar_nav'>
            <Box className='test_nav_link'>
              {ADMIN_USER.map(el =>
                user && el.email === user.email ? (
                  <IconButton onClick={() => navigate("/admin")}>
                    <AddIcon />
                  </IconButton>
                ) : (
                  ""
                )
              )}

              <Link>New & Featured</Link>
              <Link>Men</Link>
              <Link>Women</Link>
              <Link>Kids</Link>
              <Link>Sale</Link>
              <Link>Customise</Link>
              <Link>SNKRS</Link>
            </Box>
            <Box className='test_navbar_icons'>
              <input
                className='navbarTest_input'
                onChange={e => setSearch(e.target.value)}
                placeholder='Search…'
                value={search}
              />
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <Link onClick={() => navigate("/basket")}>
                <IconButton sx={{ p: "5px 0" }}>
                  <WorkOutlineIcon />
                </IconButton>
              </Link>
              <div>
                {user ? (
                  <>
                    <Tooltip title={user.displayName}>
                      <img
                        onClick={handleMenu}
                        style={{
                          width: "30px",
                          height: "30px",
                          marginTop: "5px",
                          background: "red",
                          borderRadius: "50%"
                        }}
                        src={user.photoURL}
                        alt={user.displayName}
                      />
                    </Tooltip>
                    <Menu
                      id='menu-appbar'
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right"
                      }}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "14px",
                          p: "10px"
                        }}
                      >
                        <Link onClose={handleClose}>
                          <MenuItem
                            onClick={() => navigate("/sign_in")}
                            m
                            onClose={handleClose}
                          >
                            sign in
                          </MenuItem>
                        </Link>
                        <Link>
                          <MenuItem
                            onClick={() => navigate("/sign_up")}
                            onClose={handleClose}
                          >
                            sign up
                          </MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogOut}>log Out</MenuItem>
                      </Box>
                    </Menu>
                  </>
                ) : (
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleMenu}
                    color='inherit'
                  >
                    <AccountCircleIcon />
                  </IconButton>
                )}
                {renderAuthMenu()}
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default NavbarTest
