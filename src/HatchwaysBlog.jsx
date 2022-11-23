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
      const results = await blogs.posts.slice(0, postsPerPage);
      setPosts(results);
      setLoading(false);
    }
    fetchPosts();
  }, [])

  console.log(posts)

  return (
    <div style={{ margin: "0 auto", width: "100%", padding: 20 }}>
      <StyledNavbar />
      <div style={{ marginTop: 60, display: "flex" }}>
        <BlogList posts={posts} loading={loading} />
        <StickySidebar />
      </div>
    </div>
  );
}

export default HatchwaysBlog;
