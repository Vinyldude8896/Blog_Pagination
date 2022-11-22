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
 
  // variable for currentpage
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
  const currentPageSelected = pageSelected;
  console.log("current page selected" + currentPageSelected)

  // return the last page number
  const pageNumbersEnd = arrayOfPages.length;
  console.log( "last page number is" + pageNumbersEnd)

  // determine where to put DOTS




  return (arrayOfPages);
}

export default usePagination;
