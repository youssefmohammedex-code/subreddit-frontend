import { useState } from "react";
import Post from "./Post";

export default function Feed({ posts }) {
  return (
    <div className="feed">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
