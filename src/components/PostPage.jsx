import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function PostPage({ posts }) {
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if (!post) return <h2>Post not found</h2>;

  return (
    <div className="main-content">
      <div className="feed">
        <div className="post-card">
          <div className="post-author">u/{post.author}</div>
          <div className="post-title">{post.title}</div>
          {post.image && (
            <img className="post-image" src={post.image} alt="" />
          )}
        </div>
      </div>

      <Sidebar />
    </div>
  );
}
