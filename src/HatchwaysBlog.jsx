import React, {useState, useEffect} from "react";
import {act} from "@testing-library/react"
import BlogList from "./components/BlogList";
import StyledNavbar from "./components/Navbar";
import StickySidebar from "./components/StickySidebar";
import blogs from "./data/blogs.json"


function HatchwaysBlog() {

// assigning state variables here so Pwe can setPosts, setLoading, SetCurrentPage, and setPostsPerPage on state change
const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setCurrentPage] = useState(1)
const [ postsPerPage, setPostsPerPage] = useState(15)


// this is teh useEffect function that will setLoading, setPosts, and grab posts from the blogs.json file
  useEffect (() => {
    const fetchPosts = async () => {
      setLoading(true);
      const results = blogs.posts;
      act(() => {setPosts(results);})
      act(() => {setLoading(false);})
      act(() => {setCurrentPage(1);})
      act(() => {setPostsPerPage(15);})
    }
    fetchPosts();
  }, [])

  // setting variables here for the indexOfLastPost, IndexOfFirstPost
  // these are then used to slice the posts to return our current posts
  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  // two paginate functions - one is for the page numbers at setCurrentPage
  // the other is for the page size options when they are changed 
  // these states will change and call the paginate functions 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginatePostsPerPage = (pageNumber) => setPostsPerPage(pageNumber);

  // below we are passing Bloglist the props page, posts, loading, postsPerPage, totalPosts, paginate and paginatePostsPerPage
  return (
    <div style={{ margin: "0 auto", width: "100%", padding: 20 }}>
      <StyledNavbar />
      <div style={{ marginTop: 60, display: "flex" }}>
        <BlogList page={page} posts={currentPosts} loading={loading} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} paginatePostsPerPage={paginatePostsPerPage} />
        <StickySidebar />
      </div>
    </div>
  );
}

export default HatchwaysBlog;
