import "../css/pagination.scss";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import usePagination, { DOTS } from "../hooks/usePagination";

import PropTypes, { array } from "prop-types";
import React from "react";
import { nanoid } from "nanoid";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

function Pagination({
  onPageChange,
  onPageSizeOptionChange,
  totalCount,
  currentPage,
  pageSize,
  pageSizeOptions,
}) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const onNext = () => {
    onPageChange(currentPage + 1);

  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  // this variable will be used to assign the last value in the pagination array returned
  // and will be used to disable the button when the user is on the last page
  var lastvalueInMap = 0 

  return (
    <ul
      className="wrapper"
      // Do not modify the aria-label below, it is used for Hatchways automation.
      aria-label="Blog post pagination list"
    >
      <li className="paginationItem">
        <button
          name = "Goto previous page"
          type="button"
          className="arrowButton left"
          // Do not modify the aria-label below, it is used for Hatchways automation.
          aria-label="Goto previous page"
          onClick={onPrevious}
          disabled={currentPage === "1" ? true : false} // If the current page is 1 - have the button be disabled, otherwise keep it enabled
        >
          <ChevronLeftIcon />
        </button>
      </li>

      {paginationRange.map((pageNumber, i, arr) => {
        const key = nanoid(); 
        //  when we reach the alst item in teh returned array
        // we assign it to a temp variable, then assign it to a global variable 
        // this will be used to test and see if we are on the last page/to disable the next button
        if ( arr.length === i +1 ) {
          var getLastValueinMap = arr[i]
          lastvalueInMap= getLastValueinMap
        }

        if (pageNumber === DOTS) {
          return (
            <li key={key} className="dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={key}
            className="paginationItem"
            aria-current= {pageNumber === currentPage ? "page" : "Notpage"} // if pagenumber selected is equal to currentpage then use CSS styling page
          >
            <button
              name= {pageNumber}
              type="button"
              // Do not modify the aria-label below, it is used for Hatchways automation.
              aria-label={`Goto page ${pageNumber}`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      })}

      <li className="paginationItem">
        <button
          name ="Goto next page"
          type="button"
          className="arrowButton right"
          // Do not modify the aria-label below, it is used for Hatchways automation.
          aria-label="Goto next page"
          onClick={onNext}
          disabled={currentPage === lastvalueInMap ? true : false} // This will check to see if the currentpage is the lastvalue in the pagination pages returned
        >
          <ChevronRightIcon />
        </button>
      </li>

      <select
        className="paginationSelector"
        // Do not modify the aria-label below, it is used for Hatchways automation.
        aria-label="Select page size"
        value={pageSize}
        onChange={(e) => {
          onPageSizeOptionChange(e.target.value);
        }}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} defaultValue={pageSize === size} value={size}>
            {size} per page
          </option>
        ))}
      </select>
    </ul>
  );
}

Pagination.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.instanceOf(Array),
  onPageChange: PropTypes.func,
  onPageSizeOptionChange: PropTypes.func,
};

Pagination.defaultProps = {
  totalCount: 0,
  currentPage: 1,
  pageSize: 1,
  pageSizeOptions: [15, 25, 50, 100],
  onPageChange: () => {
  },
  onPageSizeOptionChange: () => {},
};

export default Pagination;
