import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./ItemDetail.css";
import CounterContainer from "../Counter/CounterContainer";

export const ItemDetail = ({ product, agregado }) => {
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
          <div>
            <CounterContainer stock={product.stock} agregado={agregado} />
          </div>
        </CardActions>
        <Link to="/">
          <Button size="small" color="primary">
            Atras
          </Button>
        </Link>
      </Card>
    </div>
  );
};
