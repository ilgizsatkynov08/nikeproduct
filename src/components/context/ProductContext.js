import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);
const ProductContext = ({ children }) => {
  let API_PRODUCTS = "http://localhost:3000/product";
  let API_BASKET = "http://localhost:3000/basket";

  const [product, setProduct] = useState([]);
  const [oneProduct, setOneProduct] = useState({});

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCTS);
    setProduct(data);
  }

  async function deleteProduct(id) {
    await axios.delete(`${API_PRODUCTS}/${id}`);
    readProduct();
  }

  async function getOneProduct(id) {
    const { data } = await axios(`${API_PRODUCTS}/${id}`);
    setOneProduct(data);
  }

  async function editProduct(id, updatedProduct) {
    await axios.put(`${API_PRODUCTS}/${id}`, updatedProduct);
    readProduct();
  }

  // pagination
  const [page, setPage] = useState(1);
  const itemsParPage = 6;
  const count = Math.ceil(product.length / itemsParPage);

  function currentPage() {
    const begin = (page - 1) * itemsParPage;
    const end = begin + itemsParPage;
    return product.slice(begin, end);
  }

  // search

  ///basket

  async function basketAdd() {
    await axios.post(API_BASKET);
  }

  ///basket

  //! Color

  // function colorProduct(color) {
	// let color = product.filter((el) => el.price === color) 

  // }

  //! Color

  let values = {
    addProduct,
    readProduct,
    product,
    setProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
    oneProduct,
    count,
    page,
    setPage,
    currentPage,
    basketAdd,
	// colorProduct
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
