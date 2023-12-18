import React, { useState } from 'react';
import { TestCard } from '../requiredPages/TestCard';
import { styled } from 'styled-components';

function TestsGrid({searchResults, userId, auth, cart, setCart, cardsPerPage, handleLoginClick}) {
  // const cardsPerPage  = 9;
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchResults.length / cardsPerPage);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = searchResults.slice(startIndex, endIndex);
  const getPageNumbers = () => {
    const visiblePageNumbers = [];
    if (currentPage > 3) {
      visiblePageNumbers.push('...');
    }
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      visiblePageNumbers.push(i);
    }
    if (currentPage < totalPages - 2) {
      visiblePageNumbers.push('...');
    }
    return visiblePageNumbers;
  };
  // pagination

  return (
    <Wrapper>
        <div className="categories d-flex justify-content-center align-items-center rounded py-2">
          <h6 className="px-4 py-2 rounded  bg-light text-dark fw-bold small text-center">Total tests {searchResults.length}</h6>
        </div>

        <div className="box-right-bottom mt-3">
          <div className="d-flex justify-content-center flex-wrap gap-3">
            {
              visibleCards.map((item) => (
                <TestCard key={item.product_id} item={item} auth={auth} userId={userId} cart={cart} setCart={setCart} handleLoginClick={handleLoginClick} />
              ))
            }
          </div>
        </div>

        <div className="pagination">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/>
            </svg>
          </button>
          {getPageNumbers().map((pageNumber, index) => (
            <button 
              key={index} 
              onClick={() => {if (pageNumber !== '...') {handlePageChange(pageNumber);}}}
              className={currentPage === pageNumber ? "active" : ""}
            >
              {pageNumber}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/>
            </svg>
          </button>
        </div>
    </Wrapper>
  )
}

export default TestsGrid;

const Wrapper = styled.section`
  /* pagination */
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .pagination button {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin: 0 5px;
    outline: none;
    transition: color 0.3s;
  }

  .pagination button.active {
    ${'' /* background: linear-gradient(360deg, #005bab, #00ffbb90); */}
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    border: none;
    border-radius: 5px;
  }
  .pagination button.active::after{
    display: none;
  }
  /* pagination */
  `;
