import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="post-card">
      <div className="post-author">
        u/{post.author} • {post.time}
      </div>

      <Link to={`/post/${post.id}`} style={{ textDecoration: "none", color: "white" }}>
        <div className="post-title">{post.title}</div>
        {post.image && (
          <img className="post-image" src={post.image} alt="" />
        )}
      </Link>

      <div className="post-actions">
        <div>⬆ {post.upvotes}</div>
        <div>💬 492</div>
        <div>↗ Share</div>
      </div>
    </div>
  );
}
