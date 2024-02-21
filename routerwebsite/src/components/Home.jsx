import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const productsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const jsonData = response.data;

        setProducts(jsonData.products || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container">
      <h1>Amazon</h1>
      <ul className="product-list">
        {currentProducts.map((product) => (
          <li key={product.id} className="product-item" onClick={() => setSelectedProduct(product)}>
            <div className="product-image">
              {product.images && <img src={product.images[0]} alt={product.title} />}
            </div>
            <div className="product-details">
              <strong className="product-title">{product.title}</strong>
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
          Next
        </button>
      </div>
      {selectedProduct && (
        <div className="selected-product">
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <p>Price: ${selectedProduct.price}</p>
          {/* Add other product details as needed */}
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Products;
