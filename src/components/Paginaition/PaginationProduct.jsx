import Pagination from "@mui/material/Pagination"
import React from "react"
import { useProduct } from "../context/ProductContext"

export default function PaginationProduct() {
  const { page, setPage, count } = useProduct()

  function productPagination(p, n) {
    setPage(n)
  }

  return (
    <Pagination onChange={productPagination} count={count} color='primary' />
  )
}
