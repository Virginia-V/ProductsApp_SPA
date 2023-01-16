import { useEffect, useState } from "react";
import Product from "../models/product";
import productService from "../services/ProductService";
import apiRequest from "../shared/apiRequest";
import SingleProduct from "./Product";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    apiRequest.execute(
      () => productService.get(),
      (result) => setProducts(result)
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </div>
  );
}
