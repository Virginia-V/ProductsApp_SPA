import Rating from "./rating";

export default interface CreateProductModel {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
