import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./components/Posts";
import Pagination from "./components/PaginationComponent";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPost();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChange = (event, page) => {
    //console.log({page})
    setCurrentPage(page);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">MY blog</h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
        count={Math.ceil(posts.length / postPerPage)}
        onChange={handleChange}
        showFirstButton={true} //default false
        showLastButton={true} //default false
        hideNextButton={false} //default false
        hidePrevButton={false} //default false
        boundaryCount={1} //default 1
        defaultPage={1} //default 1
        disabled={false} //default false
        siblingCount={1} //default 1
      />
    </div>
  );
};

export default App;
