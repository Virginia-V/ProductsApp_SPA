import React, { useState } from "react";
import CreateProductModel from "../models/createProductModel";
import productService from "../services/ProductService";

const productData: CreateProductModel = {
  title: "",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10,
  },
};

interface CreateProductProps {
  onCreate: (product: CreateProductModel) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState("");

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (value.trim().length === 0) {
      return;
    }

    productData.title = value;
    const response = await productService.post(productData);
    console.log(response);
    // onCreate(response);
  };

  // ??? event: React.KeyboardEvent<HTMLInputElement>
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        className="border py-2 px-4 mb-2 w-full outline-0"
        placeholder="Enter product title..."
        value={value}
        onChange={changeHandler}
      />
      <button
        type="submit"
        className="py-2 px-4 border bg-yellow-400 hover:text-white"
      >
        Create
      </button>
    </form>
  );
}
