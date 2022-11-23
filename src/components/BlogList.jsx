import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList({ posts, loading}) {

  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  // const currentPaginationData = blogs.posts.slice(0, 15);

  const currentPaginationData = posts;



  const updateRowsPerPage = () => {};


  const updatePage = () => {

  };

  return (
    <div>
      <Pagination
        currentPage={1}
        totalCount={blogs.posts.length}
        pageSize={15}
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
