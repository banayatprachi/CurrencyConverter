import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './App.css';


const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [sortOrder, setSortOrder] = useState('asc');

  const productsPerPage = 10;
  const productsPerRow = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const pageCount = Math.ceil(products.length / productsPerPage);

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const startIndex = pageNumber * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  // Sorting logic
  const sortedProducts = [...displayedProducts].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });

  
  return (
    <div>
      
      <header className="header">
        <div className="logo">Amazon</div>
        <button className="logout-button" >
          Logout
        </button>
      </header>
 
     <img className="imu"src="Capture.JPG" alt="Your "  />
    
      <div>
        <div className="sort-buttons">
          <button onClick={toggleSortOrder}>
           {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-container">
            {sortedProducts.reduce((rows, product, index) => {
              if (index % productsPerRow === 0) {
                rows.push([]);
              }
              rows[rows.length - 1].push(product);
              return rows;
            }, []).map((row, rowIndex) => (
              <div key={rowIndex} className="product-row">
                {row.map(product => (
                  <div key={product.id} className="card">
                    <img src={product.image} alt={product.title} className="card-img" />
                    <div className="card-content">
                      <h3 className="card-title">{product.title}</h3>
                      <p className="card-price">Price: ${product.price}</p>
                      <button className='addtocart'> Add to cart</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <ReactPaginate
              previousLabel={'Previous'}
              nextLabel={'Next'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
            />
          </div>
        )}
      </div>
    </div>

    
  );
};

export default Home;