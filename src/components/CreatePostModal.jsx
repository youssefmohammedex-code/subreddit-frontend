import { useState } from "react";

export default function CreatePostModal({ onClose, onCreate }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  function submit() {
    if (!title) return;
    onCreate({ title, image });
    onClose();
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Create a post</h2>

        <input
          placeholder="Post title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          placeholder="Image URL (optional)"
          value={image}
          onChange={e => setImage(e.target.value)}
        />

        <div className="modal-actions">
          <button className="button" onClick={submit}>Post</button>
          <button className="button" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
