import { render, screen } from "@testing-library/react";
import { ICartItem } from "../../../models/models";
import { Cart } from "../Cart";

test("renders learn react link", () => {
  const cartItems: ICartItem[] = [
    {
      itemid: 1,
      price: 120,
      name: "noissue Tissue",
      description: "Compostable tissue paper",
      imageUrl: "noissue-tissue.jpeg",
      quantity: 2,
    },
    {
      itemid: 2,
      price: 100,
      name: "Compostable mailer",
      description: "The perfect alternative to plastic poly mailer bags.",
      imageUrl: "noissue-mailer.png",
      quantity: 1,
    },
  ];

  render(<Cart items={cartItems} />);

  const total = screen.getByText("Total: $340");
  expect(total).toBeInTheDocument();
});
