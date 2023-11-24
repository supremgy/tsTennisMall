import React from "react";
interface ProductInFo {
  name: string;
  count: number;
  img: string;
  id: number;
}
const productsList: ProductInFo[] = [
  { name: "blackRacket", count: 1, img: "./img/blackRacket", id: 1 },
  { name: "blueckRacket", count: 1, img: "./img/blueRacket", id: 2 },
  { name: "redRacket", count: 1, img: "./img/redRacket", id: 3 },
];
export default function Product(product: ProductInFo) {
  return (
    <>
      {productsList.map((product) => {
        <div>
          <img src={product.img} alt="" />
          <p>{product.name}</p>
          <input type="button" value="order" />
        </div>;
      })}
    </>
  );
}
