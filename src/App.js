import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import PostsNew from "./components/PostsNew";
import Post from "./components/Post";
import { useContext } from "react";
import { PostsContext } from "./components/PostsContext";
import { Routes, Route } from "react-router-dom";

function App() {
  const { posts } = useContext(PostsContext);
  console.log(posts.length);
  return (
    <div className={posts.length > 5 ? "App image" : "App"}>
      <Header />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="posts/new" element={<PostsNew />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
