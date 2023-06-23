import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [id]);

  const handleImageError = event => {
    event.target.src = 'https://picsum.photos/200';
  };

  const handleShowAllProducts = () => {
    window.location.href = '/productList';
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '30%', margin: '0 auto' }}>
      <h1>Product Details</h1>
      <div className="card">
        <div className="card-content">
          <Carousel showThumbs={false}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={product.name} onError={handleImageError} />
              </div>
            ))}
          </Carousel>
          <div className="card-body">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.rating}</p>
          </div>
        </div>
        <div className="card-footer">
          <button onClick={handleShowAllProducts}>Show All Products</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
