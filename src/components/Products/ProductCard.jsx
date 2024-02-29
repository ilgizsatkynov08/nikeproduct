import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import { useAuthContext } from "../context/AuthContext"
import { useProduct } from "../context/ProductContext"
import { ADMIN_USER } from "../../helpers/const"
const ProductCard = ({ i }) => {
  const { deleteProduct, basketAdd } = useProduct()
  const navigate = useNavigate()
  const { user } = useAuthContext()
  return (
    <Card sx={{ width: 435, height: "550px" }}>
      <CardMedia sx={{ height: 350 }} image={i.img} title='green iguana' />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {i.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {i.price}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {i.type}
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {ADMIN_USER.map(el =>
          user && el.email === user.email ? (
            <CardActions>
              <Button onClick={() => deleteProduct(i.id)} size='small'>
                delete
              </Button>
              <Button onClick={() => navigate(`edit/${i.id}`)} size='small'>
                edit
              </Button>
           </CardActions>
          ) : (
            ""
          )
        )}
        <Button
          sx={{ margin: "0 0 0 10px" }}
          onClick={() => basketAdd()}
          size='small'
        >
          Basket
        </Button>
      </Box>
    </Card>
  )
}

export default ProductCard
