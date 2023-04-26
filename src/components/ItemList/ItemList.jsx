import "./ItemList.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button, CardActionArea, CardActions } from "@mui/material";

export const ItemList = ({ greeting, items }) => {
  return (
    <>
      <h4>{greeting}</h4>
      <div className="listadoBox">
        {items.map((item) => {
          return (
            <div key={item.id} className="articulo shadow">
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="Producto a la venta"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      $ {item.precio}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/itemDetail/${item.id}`}>
                    <Button size="small" color="primary">
                      Ver Mas
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};
