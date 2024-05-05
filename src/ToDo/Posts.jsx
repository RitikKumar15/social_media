import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import SocialMediaContext from "./store/SocialMediaContext";

const Posts = ({ post }) => {
  const { postLike, handleDeletePost, handlePostLikeButton } =
    useContext(SocialMediaContext);

  return (
    <div className="card" style={{ maxWidth: "68rem", margin: "6px" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge">
        <button
          style={{ fontSize: "1rem" }}
          className="btn btn-danger"
          onClick={() => handleDeletePost(post.postId)}
        >
          <MdDeleteSweep />
        </button>
      </span>
      <div className="card-body">
        <h3 className="card-title">{post.postTitle}</h3>
        <p className="card-text">{post.postDescription}</p>
        <div className="mb-3">
          <span className="badge bg-primary tags">#enjoy</span>
          <span className="badge bg-primary tags">#vacation</span>
          <span className="badge bg-primary tags">#trip</span>
        </div>
        <div className="alert alert-success" role="alert">
          <span className="h3 like-btn" onClick={handlePostLikeButton}>
            <AiTwotoneLike />
          </span>
          This post has been reacted by {postLike} peoples
        </div>
      </div>
    </div>
  );
};

export default Posts;
