import { useState } from "react";

export default function SubredditHeader({ onCreatePost }) {
  const [joined, setJoined] = useState(false);

  return (
    <div className="subreddit-header">
      <img
        className="banner"
        src="public\images.jpg"
        alt="banner"
      />

      <div className="sub-info">
        <div className="sub-icon"></div>

        <div>
          <div className="sub-title">r/Dexter</div>
        </div>

        <div className="sub-buttons">
          <button className="button" onClick={onCreatePost}>
            Create Post
          </button>

          <button
            className="button"
            onClick={() => setJoined(!joined)}
          >
            {joined ? "Joined" : "Join"}
          </button>
        </div>
      </div>
    </div>
  );
}
