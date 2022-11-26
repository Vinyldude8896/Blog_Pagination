import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React, {useState, useEffect} from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList({ page, posts, loading, postsPerPage, paginate, paginatePostsPerPage}) {

  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  // currentPagination data is being assigned through props by the posts value
  const currentPaginationData = posts

  const updateRowsPerPage = (postsPerPage) => {

    // as postsPerPage is a string we are converting it to an Integer here
    const  integerPostsPerPage = parseInt(postsPerPage);

    //calling paginatePostsPerPage function to update the per page values and paginate the page numbers again
    paginatePostsPerPage(integerPostsPerPage);
  };


  const updatePage = (pageNumber) => {

    // this will call the paginate function to refresh the page on Update Page
    paginate(pageNumber)

  };

  return (
    <div>
      <Pagination
        currentPage={page}
        totalCount={blogs.posts.length}
        pageSize={postsPerPage}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
  
      />
      <ul
        // Do not modify the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
