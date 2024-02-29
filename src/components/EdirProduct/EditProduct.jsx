import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavbarCarusel from "../Navbar/NavbarCarusel";
import NavbarTest from "../Navbar/NavbarTest";
import UpNavbar from "../Navbar/UpNavbar";
import { useProduct } from "../context/ProductContext";

const EditProduct = () => {
  const { getOneProduct, editProduct, oneProduct } = useProduct();

  const { id } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [img, setImg] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getOneProduct(id);
  }, [id]);

  useEffect(() => {
    if (oneProduct) {
      setName(oneProduct.name);
      setPrice(oneProduct.price);
      setType(oneProduct.type);
      setImg(oneProduct.img);
      setColor(oneProduct.color);
    }
  }, [oneProduct]);

  const handleSave = () => {
    const obj = {
      id: id,
      name: name,
      price: price,
      type: type,
      img: img,
      color: color,
    };
    editProduct(id, obj);
    navigate("/");
  };

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
            value={name}
          />
          <TextField
            onChange={(e) => setPrice(e.target.value)}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={price}
          />
          <TextField
            onChange={(e) => setType(e.target.value)}
            id="outlined-basic"
            label="Type"
            variant="outlined"
            value={type}
          />
          <TextField
            onChange={(e) => setImg(e.target.value)}
            id="outlined-basic"
            label="Image"
            variant="outlined"
            value={img}
          />
          <TextField
            onChange={(e) => setColor(e.target.value)}
            id="outlined-basic"
            label="color"
            variant="outlined"
            value={color}
          />{" "}
          <Button
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
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default EditProduct;
