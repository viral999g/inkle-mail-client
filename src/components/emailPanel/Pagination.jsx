import { CPagination, CPaginationItem } from "@coreui/react";
import React from "react";

const Pagination = ({ totalPages, currentPage, changePage }) => {
  return (
    <CPagination className="pagination-container" aria-label="Navigation">
      <CPaginationItem
        className={currentPage === 1 ? "" : "pointer"}
        aria-label="Previous"
        disabled={currentPage === 1}
        onClick={() => changePage(currentPage - 1)}
      >
        <span aria-hidden="true">&laquo;</span>
      </CPaginationItem>
      {Array.from({ length: totalPages }, (_, index) => (
        <CPaginationItem
          active={currentPage === index + 1}
          onClick={() => changePage(index + 1)}
          key={index + 1}
          className="pointer"
        >
          {index + 1}
        </CPaginationItem>
      ))}

      <CPaginationItem
        className={currentPage === totalPages ? "" : "pointer"}
        aria-label="Next"
        disabled={currentPage === totalPages}
        onClick={() => changePage(currentPage + 1)}
      >
        <span aria-hidden="true">&raquo;</span>
      </CPaginationItem>
    </CPagination>
  );
};

export default Pagination;
