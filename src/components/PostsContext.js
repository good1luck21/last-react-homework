import { useState, createContext } from "react";

export const PostsContext = createContext();

export default function PostsProvider(props) {
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {props.children}
    </PostsContext.Provider>
  );
}
