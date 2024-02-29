import React, { useEffect } from "react"

import { Box } from "@mui/material"
import { useProduct } from "../context/ProductContext"
import ProductCard from './ProductCard'

const ProductList = () => {
  const { readProduct, product, currentPage } = useProduct()
  useEffect(() => {
    readProduct()
  }, [])

  return (
    <Box
      sx={{
        p: "30px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px"
      }}
    >
      {product ? (
        currentPage().map(i => <ProductCard i={i} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  )
}

export default ProductList
