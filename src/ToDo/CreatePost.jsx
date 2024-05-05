import { useContext } from "react";
import SocialMediaContext from "./store/SocialMediaContext";

const CreatePost = () => {
  const { successAlert, handleCreatePostSubmit, handleSuccessAlert } =
    useContext(SocialMediaContext);
  return (
    <div className="menu">
      <div className="heading">
        <div
          className={
            `alert alert-success alert-dismissible fade show ` +
            (successAlert || `alert-message-hidden`)
          }
          role="alert"
        >
          <strong>Wohoo !!</strong> Your Post has been created successfully,
          visit home page...!!!
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={handleSuccessAlert}
          ></button>
        </div>
        <h1>Add your post</h1>
      </div>
      <form name="item-data-form" onSubmit={handleCreatePostSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            name="post-title"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Post Discription
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="post-description"
            required={true}
            placeholder="start a post, express your thoughts..."
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          POST
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
