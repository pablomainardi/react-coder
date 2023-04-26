import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./ItemDetail.css";

export const ItemDetail = ({ product }) => {
  return (
    <div key={product.id} className="shadow">
      <Card className="itemDetail">
        <CardActionArea>
          <CardMedia
            component="img"
            image={product.img}
            alt="Producto a la venta"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.descripcion}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $ {product.precio}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Stock: {product.stock}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/">
            <Button size="small" color="primary">
              Comprar
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
