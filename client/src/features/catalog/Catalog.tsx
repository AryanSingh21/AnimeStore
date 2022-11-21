import { useState, useEffect } from "react";
import { Product } from "../../app/models/Product";
import ProductList from "./ProductList";

// interface Props {
//   Products: Product[];
//   AddProducts: () => void;
// }

export default function Catalog() {
  const [Products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5073/api/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <ProductList Products={Products} />
    </>
  );
}
