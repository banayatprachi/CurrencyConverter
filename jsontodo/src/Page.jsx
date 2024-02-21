const Paginate = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="pagination-container">
        <ul className="pagination">
          {currentPage > 1 && (
            <li onClick={() => paginate(currentPage - 1)}>
              <span>&laquo;</span>
            </li>
          )}
          {pageNumbers.map((number) => (
            <li key={number} onClick={() => paginate(number)}>
              <span>{number}</span>
            </li>
          ))}
          {currentPage < Math.ceil(totalPosts / postsPerPage) && (
            <li onClick={() => paginate(currentPage + 1)}>
              <span>&raquo;</span>
            </li>
          )}
        </ul>
      </div>
    );
  };
  export default Paginate;