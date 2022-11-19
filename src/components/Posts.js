import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { PostsContext } from "./PostsContext";
export default function Posts() {
  const { setPosts: setCnPosts } = useContext(PostsContext);
  const [posts, setPosts] = useState([]);

  // console.log("Posts.js", cnPosts);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/posts")
      .then((response) => {
        setPosts(response.data);
        setCnPosts(response.data);
        console.log(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const listPosts = posts.map((post) => (
    <li key={post.id} style={{ padding: "0.2rem" }}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ));

  return (
    <div className="postcontainer">
      <h1>Posts(Please post at least five posts)</h1>
      <ul style={{ textAlign: "left", padding: "2rem" }}>{listPosts}</ul>
      {posts.length > 5 && (
        <div>
          <h2>
            もしかしたらちょっと早いかもですが、卒業おめでとうございます！！！
          </h2>
          <h3>
            ここまで学習した内容はすぐには身にならないかもしれませんが、必ず生きてきますので頑張ってください！
          </h3>
        </div>
      )}
    </div>
  );
}
