import Posts from "./Posts";
import logo from "../assets/no-posts-yet.png";
import { useContext } from "react";
import SocialMediaContext from "./store/SocialMediaContext";

const PostList = () => {
  const { userPosts, handleDeletePost } = useContext(SocialMediaContext);

  return (
    <div className="post-card">
      <h1 className="heading-card">Your Recent Posts</h1>
      {userPosts.length !== 0 ? (
        userPosts.map((post) => (
          <Posts
            key={post.postDescription}
            handleDeletePost={handleDeletePost}
            post={post}
          />
        ))
      ) : (
        <div className="text-primary text-center fw-bold mt-2">
          <p style={{ margin: "20px 0px" }}>
            No Post Available!!! Start Adding Some Posts...
          </p>
          <img
            style={{
              height: "18rem",
              borderRadius: "100px",
              margin: "30px 0px",
            }}
            src={logo}
            alt="no post available!!"
          />
        </div>
      )}
    </div>
  );
};

export default PostList;
