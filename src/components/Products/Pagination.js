import React from 'react';
import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => onPageChange(number)}>
            {number === currentPage ? <strong className='active'>{number}</strong> : number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
