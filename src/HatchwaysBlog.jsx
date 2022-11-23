import React, {useState, useEffect} from "react";
import BlogList from "./components/BlogList";
import StyledNavbar from "./components/Navbar";
import StickySidebar from "./components/StickySidebar";
import blogs from "./data/blogs.json"


function HatchwaysBlog() {

const [posts, setPosts] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setCurrentPage] = useState(1)

const [ postsPerPage, setPostsPerPage] = useState(15)

  useEffect (() => {
    const fetchPosts = async () => {
      setLoading(true);
      const results = await blogs.posts;
      setPosts(results);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  console.log(posts)

  const indexOfLastPost = page * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  console.log("Indexes are" + "First Post " + indexOfFirstPost + " Index of Last Post " + indexOfLastPost) 

  console.log(currentPosts)

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginatePostsPerPage = (pageNumber) => setPostsPerPage(pageNumber);

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
