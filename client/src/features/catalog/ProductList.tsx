import { Grid } from "@mui/material";
import { Product } from "../../app/models/Product";
import ProductCard from "./ProductCard";

interface Props {
  Products: Product[];
}
export default function ProductList({ Products }: Props) {
  return (
    <Grid container spacing={4}>
      {Products.map((Product) => (
        <Grid item xs={6} sm={4} md={3}>
          <ProductCard Product={Product} />
        </Grid>
      ))}
    </Grid>
  );
}
