export const DOTS = "...";
import { array } from "prop-types";
import { useState, useEffect, useMemo } from "react";
import blogs from "../data/blogs.json";

function usePagination({
  currentPage,
  totalCount,
  pageSize,
  siblingCount = 1,
}) {

  // range function to provide a range to send to the array, has a start and end point
  const range = (start, end) => {
    let length = end - start + 1;
    /*
        Create an array of certain length and set the elements within it from
        start value to end value.
      */
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = useMemo(() => {
    // calculating the total page count as totalCount / pageSize
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    // first option is if there are less pages than the total numbner of pages we want to show in our component
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    // calculate left and right sibling indexes
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    // setting variables to determine whether to show dots on left or right side of current page
    const showLeftDots = leftSiblingIndex > 1;
    const showRightDots = rightSiblingIndex < totalPageCount;
    // const showRightDots = rightSiblingIndex > 1;

    //variables for the first and last index pages
    const firstPageIndex = 1;
    const lastpageIndex = totalPageCount;

    // second option is if there are no left dots but there are right dots
    if (!showLeftDots && showRightDots) {
      let leftItemCount = 1 + 1 * siblingCount;
      let rightItemCount = 1 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, rightItemCount, DOTS, totalPageCount];
    }

    // third option is when there are no dots to show on the right side
    if (showLeftDots && !showRightDots) {
      let rightItemCount = 1 + 2 * siblingCount;
      let leftItemCount = 1 + 2 * siblingCount;
      let rightRange = range (
        totalPageCount - rightItemCount +1 , totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    } 

    // fourth option is when we need left and right dots to be shown

    if (showLeftDots && showRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastpageIndex];;
    }


  }, [totalCount, pageSize, currentPage, siblingCount]);
  return paginationRange;
}

export default usePagination;
