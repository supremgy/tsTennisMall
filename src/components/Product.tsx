import React from 'react';

interface ProductProps {
  name: string;
  count: number;
  img: string;
  id: number;
}

const Product: React.FC<{ product: ProductProps }> = ({ product }) => {
  // public 폴더 내부의 이미지에 접근
  const imagePath = `/img/${product.img}`;
  console.log(imagePath);

  return (
    <div className='mt-5'>
      <img className='w-48' src={imagePath} alt={product.name} />
      <p className='my-8'>{product.name}</p>
      <button>order</button>
    </div>
  );
};

export default Product;
