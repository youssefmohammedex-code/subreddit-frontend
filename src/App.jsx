import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import SubredditHeader from "./components/SubredditHeader";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import CreatePostModal from "./components/CreatePostModal";
import PostPage from "./components/PostPage";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Kushesolidoro",
      title: "They know, It's Over",
      image: "public/9e7w45.jpg",
      upvotes: "6.5k",
      time: "5 hours ago",
    },
    {
      id: 2,
      author: "Mike",
      title: "What is the most useful skill you learned accidentally?",
      upvotes: "3.2k",
      time: "2 hours ago",
    },
  ]);

  function addPost(data) {
    setPosts([
      {
        id: Date.now(),
        author: "You",
        upvotes: 1,
        time: "just now",
        ...data,
      },
      ...posts,
    ]);
  }

  return (
    <div className="app-container">
      <Navbar />
      <SubredditHeader onCreatePost={() => setShowModal(true)} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <Feed posts={posts} />
              <Sidebar />
            </div>
          }
        />
        <Route path="/post/:id" element={<PostPage posts={posts} />} />
      </Routes>

      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          onCreate={addPost}
        />
      )}
    </div>
  );
}
