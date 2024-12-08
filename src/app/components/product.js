'use client';

import React, { useState, useEffect } from 'react';
import './product.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('An error occurred while fetching products.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
   <div>
     <div></div>
     <div className="container">
      
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt={product.title} className="product-image" />
            </div>
            <div className="content">
              <h2 className="product-title">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <div className="details">
                <span className="price">${product.price.toFixed(2)}</span>
                <span className="category">{product.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};
export default ProductList;