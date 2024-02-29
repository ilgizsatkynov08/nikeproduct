import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import PaginationProduct from "../Paginaition/PaginationProduct";
import { useProduct } from "../context/ProductContext";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Save Up to 40%",
    link: "Shop All Our New Markdowns",
  },
  {
    label: "Members: Free Shipping on Orders $50+",
    link: "Sign Up",
  },
  {
    label: "Get Your Gear Faster",
    link: "Look for Store Pickup at Checkout",
  },
];

function NavbarCarusel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [icons, setIcons] = useState(false);
  const maxSteps = images.length;
  const { product } = useProduct();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#F5F5F5",
          height: "60px",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
          }}
        >
          <Button
            sx={{ color: "#111" }}
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </Button>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "400px",
                        textAlign: "center",
                        color: "#111",
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {step.label}
                    </Typography>
                    <Link
                      sx={{
                        color: "#111",
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      {step.link}
                    </Link>
                  </Box>
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <Button
            sx={{ color: "#111" }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        </Box>
      </Box>
      <Box
      // sx={{ display: "flex", justifyContent: "center", margin: "10px 0 0 0" }}
      >
        <Box>
          <Box className="container">
            <Box
              sx={{
                marginLeft: "-1pc",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                margin: "15px 0 ",
              }}
            >
              <Typography variant="h5" sx={{ fontSize: "22px" }}>
                Men's Shoes & Sneakers({product.length})
              </Typography>
              <PaginationProduct />

              <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Typography>Hide Filters</Typography>
                <div>
                  <IconButton
                    sx={{ fontSize: "17px", color: "black" }}
                    onClick={handleMenu}
                  >
                    Sort By
                    <KeyboardArrowDownIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    sx={{ marginTop: "2pc" }}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Featured</MenuItem>
                    <MenuItem onClick={handleClose}>Newest</MenuItem>
                    <MenuItem onClick={handleClose}>Price: High-Low</MenuItem>
                    <MenuItem onClick={handleClose}>Price: Low-High</MenuItem>
                  </Menu>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default NavbarCarusel;
