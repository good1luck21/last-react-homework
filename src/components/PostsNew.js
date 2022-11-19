import Button from "./Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function PostsNew() {
  const [post, setPost] = useState({ title: "", body: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/posts", post).then((response) => {
      console.log(response);
      setPost({ title: "", body: "" });
      navigate("/");
    });
  };

  return (
    <div className="postcontainer">
      <h1>新規投稿</h1>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>タイトル</label>
          <input
            type="text"
            className="form-input"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>本文</label>
          <textarea
            className="form-input"
            style={{ height: "10rem" }}
            name="body"
            value={post.body}
            onChange={handleChange}
          />
        </div>
        <Button text="投稿" color="blue" />
      </form>
    </div>
  );
}
