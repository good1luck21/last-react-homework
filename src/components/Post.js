import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/posts/${id}`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="postcontainer">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
