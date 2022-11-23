export const DOTS = "...";
import { useState, useEffect } from "react";
import blogs from "../data/blogs.json";

function usePagination({ currentPage, totalCount, pageSize }) {
  /*
    Rewrite the logic here to map out the pagination to be displayed.
  */

  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [page, setCurrentPage] = useState(1)
  // const [ postsPerPage, setPostsPerPage] = useState(15)
  




  // empty array for page numbers
  var pageNumbers = [];
 
  // loop through the total blog post count and push a page number
  // each time decresing the total post count by the page size selected
  // and incrementing the page number
  for (let i = 1; i <= Math.ceil(totalCount / pageSize); i++) {
   pageNumbers.push(i);
  }

  // return the current page number
  // var currentPageSelected = pageSelected;

  // // return the last page number
  // const pageNumbersEnd = arrayOfPages.length;

  // determine where to put DOTS
  // array to be returned with DOTS
  // var arrayOfPageNumbersReturned = [];

  // for (let i = 0; i < arrayOfPages.length; i++) {
  //   // find index of page selected in array
  //   let currentPageIndex = arrayOfPages[i];
  //   // if the current index is equal to the current page selected
  //   if (currentPageIndex === currentPageSelected) {
  //     // if current page selected is less than index 3 push the first three index values followed by DOTS and then the last index
  //     if (currentPageSelected < 3) {
  //       arrayOfPageNumbersReturned.push(arrayOfPages[0]);
  //       arrayOfPageNumbersReturned.push(arrayOfPages[1]);
  //       arrayOfPageNumbersReturned.push(arrayOfPages[2]);
  //       arrayOfPageNumbersReturned.push(DOTS);
  //       arrayOfPageNumbersReturned.push(arrayOfPages.length);
  //       return arrayOfPageNumbersReturned;
  //     }
  //     // if current page selected is the last page push the first two index values followed by DOTS and then the last two index
  //     if ((currentPageSelected = arrayOfPages.length)) {
  //       arrayOfPageNumbersReturned.push(arrayOfPages[0]);
  //       arrayOfPageNumbersReturned.push(arrayOfPages[1]);
  //       arrayOfPageNumbersReturned.push(arrayOfPages.length - 1);
  //       arrayOfPageNumbersReturned.push(arrayOfPages.length);
  //       return arrayOfPageNumbersReturned;
  //     } else {
  //       // otherwise push the first page then DOTS, followed by the index value before, the index value, and the index value afterwards
  //       // followed again by DOTS and then finished with the last index of the array
  //       arrayOfPageNumbersReturned.push(arrayOfPages[0]);
  //       arrayOfPageNumbersReturned.push(DOTS);
  //       arrayOfPageNumbersReturned.push(arrayOfPages[currentPageSelected] - 1);
  //       arrayOfPageNumbersReturned.push(arrayOfPages[currentPageSelected]);
  //       arrayOfPageNumbersReturned.push(arrayOfPages[currentPageSelected] + 1);
  //       arrayOfPageNumbersReturned.push(DOTS);
  //       arrayOfPageNumbersReturned.push(arrayOfPages.length);
  //       return arrayOfPageNumbersReturned;
  //     }
  //   }
  // }
  return (pageNumbers)
}
export default usePagination;
