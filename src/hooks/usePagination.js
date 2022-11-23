export const DOTS = "...";
import { useState, useEffect } from "react";
import blogs from "../data/blogs.json";

function usePagination({ currentPage, totalCount, pageSize}) {
  /*
    Rewrite the logic here to map out the pagination to be displayed.
  */

  console.log("paginated curent page is " + currentPage)
  // empty array for page numbers
  var pageNumbers = [];
 
  // loop through the total blog post count and push a page number
  // each time decresing the total post count by the page size selected
  // and incrementing the page number
  for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
   pageNumbers.push(i);
  }

  return (pageNumbers)
}
export default usePagination;
