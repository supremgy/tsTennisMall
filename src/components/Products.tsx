import React, { useEffect, useState } from 'react';
import Product from './Product';

interface ProductProps {
  name: string;
  count: number;
  img: string;
  id: number;
}

const Products: React.FC = () => {
  const [productList, setProductList] = useState<ProductProps[]>([]);

  useEffect(() => {
    // Fetching data asynchronously
    const fetchData = async () => {
      try {
        const response = await fetch('/data.json'); // Assuming data.json is in the public folder
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-5rem flex justify-around text-center'>
      {productList.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
