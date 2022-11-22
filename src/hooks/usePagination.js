export const DOTS = "...";
import { useState, useEffect} from "react";

function usePagination({ 
  currentPage,
    totalCount,
    pageSize
} ) {
  

  /*
    Rewrite the logic here to map out the pagination to be displayed.
  */
 
  // variable for current page
  var pageSelected = currentPage;
  // totalCount for total blog posts
  var totalBlogPosts = totalCount;
  // pageSizeSelected for page size
  var pageSizeSelected = pageSize;

  console.log( 'Paramters sent are ' + pageSelected, totalBlogPosts, pageSizeSelected);

  // calculate number of pages for based on totalCount and pageSize Selected

  var arrayOfPages = []
  var countdownTotalBlogPosts = totalBlogPosts;

  console.log("These " + currentPage + " " + countdownTotalBlogPosts)

  // loop through the total blog post count and push a page number
  // each time decresing the total post count by the page size selected 
  // and incrementing the page number
  for (let i=1 ; i <= countdownTotalBlogPosts +i; i++ ) {
    countdownTotalBlogPosts = countdownTotalBlogPosts - pageSizeSelected;
    console.log("Countdown total blog posts" + countdownTotalBlogPosts)
    var pageCounter = i;
    console.log("Pagecounter is" + pageCounter)
    arrayOfPages.push(pageCounter);
    console.log("pushing" + pageCounter)
    console.log("array of pages is" + arrayOfPages)
  }
  console.log("array of pages" + arrayOfPages)

  // return the current page number
  var currentPageSelected = pageSelected;
  console.log("current page selected" + currentPageSelected)

  // return the last page number
  const pageNumbersEnd = arrayOfPages.length;
  console.log( "last page number is" + pageNumbersEnd)

  // determine where to put DOTS
  // array to be returned with DOTS
  var arrayOfPageNumbersReturned = []

  for (let i =0; i < arrayOfPages.length; i++) {
    // find index of page selected in array
    let currentPageIndex = arrayOfPages[i];
    // if the current index is equal to the current page selected 
    if (currentPageIndex === currentPageSelected) {
       console.log ("found page index at " + arrayOfPages[i])
       // if current page selected is less than index 3 push the first three index values followed by DOTS and then the last index
       if (currentPageSelected < 3) {
        arrayOfPageNumbersReturned.push(arrayOfPages[0]);
        arrayOfPageNumbersReturned.push(arrayOfPages[1]);
        arrayOfPageNumbersReturned.push(arrayOfPages[2]);
        arrayOfPageNumbersReturned.push(DOTS);
        arrayOfPageNumbersReturned.push(arrayOfPages[arrayOfPages.length]);
        console.log("array of pages to be returned is" + arrayOfPageNumbersReturned)
        return (arrayOfPageNumbersReturned);
     }
     // if current page selected is the last page push the first two index values followed by DOTS and then the last two index
     if (currentPageSelected = arrayOfPages.length) {
      arrayOfPageNumbersReturned.push(arrayOfPages[0]);
      arrayOfPageNumbersReturned.push(arrayOfPages[1]);
      arrayOfPageNumbersReturned.push(arrayOfPages[arrayOfPages.length]-1)
      arrayOfPageNumbersReturned.push(arrayOfPages[arrayOfPages.length]);
      console.log("array of pages to be returned is" + arrayOfPageNumbersReturned)
      return (arrayOfPageNumbersReturned);
     } else {
      // otherwise push the first page then DOTS, followed by the index value before, the index value, and the index value afterwards
      // followed again by DOTS and then finished with the last index of the array
      arrayOfPageNumbersReturned.push(arrayOfPages[0]);
      arrayOfPageNumbersReturned.push(DOTS);
      arrayOfPageNumbersReturned.push(arrayOfPages[currentPageSelected]-1);
      arrayOfPageNumbersReturned.push(arrayOfPages[currentPageSelected]);
      arrayOfPageNumbersReturned.push(arrayOfPages[currentPageSelected]+1);
      arrayOfPageNumbersReturned.push(DOTS);
      arrayOfPageNumbersReturned.push(arrayOfPages[arrayOfPages.length]);
      return (arrayOfPageNumbersReturned);

     }
    }
  }
     
  


  // return (arrayOfPages);
  }
export default usePagination;
