import React from "react";
import _ from "lodash";

const PaginationComponent = ({
  itemsCount,
  pageSize,
  currentPage,
  onPageChange
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage - 1, pagesCount)}
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              onClick={() => onPageChange(page, pagesCount)}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage + 1, pagesCount)}
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PaginationComponent;
