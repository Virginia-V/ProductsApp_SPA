import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../context/ModelContext";
import CreateProductModel from "../models/createProductModel";
import Product from "../models/product";
import productService from "../services/ProductService";
import apiRequest from "../shared/apiRequest";
import { CreateProduct } from "./CreateProduct";
import Modal from "./Modal";
import SingleProduct from "./Product";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const { modal, open, close } = useContext(ModalContext);

  const createHandler = (product: CreateProductModel) => {
    close();
    // addProduct(product);
  };

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
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={createHandler} />
        </Modal>
      )}
      <button
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2"
        onClick={open}
      >
        +
      </button>
    </div>
  );
}
