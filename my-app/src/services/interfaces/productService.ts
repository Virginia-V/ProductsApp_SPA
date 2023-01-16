import CreateProductModel from "../../models/createProductModel";
import Product from "../../models/product";

export default interface ProductService {
  get(): Promise<Product[]>;
  getById(productId: number): Promise<Product>;
  post(model: CreateProductModel): Promise<unknown>;
}
