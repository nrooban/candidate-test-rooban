export interface IProduct {
  productid: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface ICartItem extends IProduct {
  itemid: string;
  quantity: number;
  totalPrice: number;
}
