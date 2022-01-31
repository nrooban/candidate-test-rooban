import { IProduct } from "../models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  products: IProduct[];
}

const initialState: ProductsState = {
  products: [
    {
      productid: 1,
      price: 120,
      name: "noissue Tissue",
      description: "Compostable tissue paper",
      imageUrl: "noissue-tissue.jpeg",
    },
    {
      productid: 2,
      price: 100,
      name: "Compostable mailer",
      description: "The perfect alternative to plastic poly mailer bags.",
      imageUrl: "noissue-mailer.png",
    },
    {
      productid: 3,
      price: 120,
      name: "Padded mailer",
      description:
        "Recycled Plastics and have a bubble inner that provides an extra layer of cushion.",
      imageUrl: "Padded-mailer.png",
    },
    {
      productid: 4,
      price: 100,
      name: "Recycled mailer",
      description:
        "Recycled mailer gives plastics already in circulation a second life.",
      imageUrl: "recycled-mailer.png",
    },
    {
      productid: 5,
      price: 100,
      name: "Shipping Label",
      description: "Compatible shipping labels",
      imageUrl: "shipping-labels.png",
    },
  ],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<IProduct[]>) => {
      //TODO: Fetch from Server
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
