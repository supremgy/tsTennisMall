import Product from "../components/Product";

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
export default function Products() {
  return (
    <>
      {productsList.map((product: any) => {
        <Product key={product.id} product={product} />;
      })}
    </>
  );
}
