import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Viagem Espacial Moonage Daydream",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 2,
    name: "Viagem Espacial Ashes to Ashes",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 3,
    name: "Viagem Espacial Space Odity",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },

  {
    id: 3,
    name: "Viagem Espacial Ziggy Stardust",
    value: 10000.0,
    imageUrl: "https://picsum.photos/200/200",
  },
  
];


const Home = () => {
  return (
    <div>
      <h2>Lista de Produtos</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;

