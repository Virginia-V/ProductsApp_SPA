import CreateProductModel from "../models/createProductModel";
import Product from "../models/product";
import http from "./http";
import ProductService from "./interfaces/productService";

const baseUrl = "products";
// const baseUrl = "https://localhost:7101/api"; (Example with fetch)

function get(): Promise<Product[]> {
  return http.get(`${baseUrl}`);
}

// export const getAll = async () => {
//   const res = await fetch(`${baseUrl}/products`, {
//       method: "GET",
//       headers: {
//           'Content-Type': 'application/json',
//       }
//   });
//   return await res.json();
// };

function getById(productId: number): Promise<Product> {
  return http.get(`${baseUrl}/${productId}`);
}

// export const getById = async (id: number) => {
//   const res = await fetch(`${baseUrl}/products/${id}`, {
//       method: "GET",
//       headers: {
//           'Content-Type': 'application/json',
//       }
//   });
//   return await res.json();
// };

function post(model: CreateProductModel): Promise<unknown> {
  return http.post(`${baseUrl}`, model);
}

// export const create = async (model: CreateProductModel) => {
//   const res = await fetch(`${baseUrl}/products`, {
//       method: "POST",
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(model)
//   });
//   return await res.json();
// };


const productService: ProductService = {
  get,
  getById,
  post,
};

export default productService;
