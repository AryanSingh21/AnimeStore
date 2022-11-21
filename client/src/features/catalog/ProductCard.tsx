import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/Product";

interface Props {
  Product: Product;
}

export default function ProductCard({ Product }: Props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              bgcolor: "secondary.main",
            }}
          >
            {Product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={Product.name}
        titleTypographyProps={{
          fontWeight: "700",
          color: "primary.main",
        }}
      />
      <CardMedia
        sx={{ backgroundSize: "contain", bgcolor: "primary.light" }}
        component="img"
        // height="140"
        // sx={{ backgroundSize: "contain" }}

        image={Product.pictureUrl}
        alt={Product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(Product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {Product.brand} / {Product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button component={Link} to={`/catalog/${Product.id}`} size="small">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
