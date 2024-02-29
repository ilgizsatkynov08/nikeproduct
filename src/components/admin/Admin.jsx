import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarCarusel from "../Navbar/NavbarCarusel";
import NavbarTest from "../Navbar/NavbarTest";
import UpNavbar from "../Navbar/UpNavbar";
import { useProduct } from "../context/ProductContext";

const Admin = () => {
  const { addProduct } = useProduct();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [img, setImg] = useState("");
  const [color, setColor] = useState("");

  const navigate = useNavigate();

  function hendleChane() {
    let newObj = {
      name: name,
      price: price,
      type: type,
      img: img,
      color: color,
    };
    addProduct(newObj);
  }
  return (
    <>
      <UpNavbar />
      <NavbarTest />
      <NavbarCarusel />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            width: "350px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <TextField
            onChange={(e) => setName(e.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setColor(e.target.value)}
            id="outlined-basic"
            label="color"
            variant="outlined"
          />
          <Button
            onClick={() => (navigate("/"), hendleChane())}
            sx={{
              color: "#000",
              border: "1px solid #000",
              fontWeight: "bold",
              background: "transparent",
              "&:hover": {
                background: "#000",
                color: "#fff",
              },
            }}
            variant="contained"
          >
            add Shoes
          </Button>
          P{" "}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Admin;
