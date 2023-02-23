import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ coursesPerPage, totalPosts, setCurrentPage }) => {
  const [newPage, setNewPage] = useState(1);

  const pageNumbers = [];
  const totalPages = Math.ceil(totalPosts / coursesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setNewPage(pageNumber);
  };

  const incrementPage = () => {
    setCurrentPage(newPage + 1);
    setNewPage(newPage + 1);
  };
  const decrementPage = () => {
    setCurrentPage(newPage - 1);
    setNewPage(newPage - 1);
  };

  return (
    <div className="d-flex justify-content-center pt-3 pb-5">
      {newPage === 1 ? (
        <Button variant="primary" className="py-2 px-3 me-3" disabled>
          <FontAwesomeIcon icon={faAnglesLeft} />
        </Button>
      ) : (
        <Button
          onClick={decrementPage}
          variant="primary"
          className="py-2 px-3 me-3"
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </Button>
      )}
      {pageNumbers.map((pageNumber) => (
        <Button
          onClick={() => handlePage(pageNumber)}
          variant="primary"
          className="py-2 px-3 me-3"
        >
          {pageNumber}
        </Button>
      ))}
      {newPage === totalPages ? (
        <Button variant="primary" className="py-2 px-3 me-3" disabled>
          <FontAwesomeIcon icon={faAnglesRight} />
        </Button>
      ) : (
        <Button
          onClick={incrementPage}
          variant="primary"
          className="py-2 px-3 me-3"
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </Button>
      )}
    </div>
  );
};

export default Pagination;
