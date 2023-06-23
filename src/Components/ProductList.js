import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.log(error));
  }, []);

  const handleImageError = event => {
    event.target.src = 'https://picsum.photos/200/300'; 
  };

  
  return (
    <div>
      <h1>Product List</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between'
        }}
      >
        {products.map(product => (
          <Link
            to={`/productList/${product.id}`}
            key={product.id}
            style={{
              width: 'calc(20% - 10px)',
              marginBottom: '20px',
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <div
              className="card"
              style={{
                border: '1px solid #ccc',
                borderRadius: '5px',
                padding: '10px'
              }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                onError={handleImageError}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  marginBottom: '10px'
                }}
              />
              <div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: ${product.rating}</p>
                <p>{product.brand}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
