import { createContext, useCallback, useReducer, useState } from "react";

const createPostReducer = (currPostVal, action) => {
  let newPostVal = currPostVal;

  if (action.type === "CREATE_POST") {
    newPostVal = [action.payload, ...currPostVal];
  } else if (action.type === "DELETE_POST") {
    newPostVal = currPostVal.filter(
      (post) => post.postId !== action.payload.postId
    );
  }
  return newPostVal;
};

const SocialMediaContext = createContext([
  {
    userPosts: [],
    successAlert: false,
    postLike: 0,
    handleCreatePostSubmit: () => {},
    handleDeletePost: () => {},
    handleSuccessAlert: () => {},
    handlePostLikeButton: () => {},
  },
]);

export const SocialMediaContextProvider = ({ children }) => {
  const [userPosts, userPostsDispatcher] = useReducer(createPostReducer, []);
  const [successAlert, setSuccessAlert] = useState(false);
  const [postLike, setPostLike] = useState(0);

  const handlePostLikeButton = () => setPostLike(postLike + 1);

  const handleSuccessAlert = () => setSuccessAlert(false);

  const handleCreatePostSubmit = useCallback((event) => {
    event.preventDefault();
    const createPostAction = {
      type: "CREATE_POST",
      payload: {
        postId: new Date(),
        postTitle: event.target[0].value,
        postDescription: event.target[1].value,
      },
    };
    userPostsDispatcher(createPostAction);
    document.getElementsByName("item-data-form")[0].reset();
    setSuccessAlert(true);
  });

  const handleDeletePost = useCallback((postId) => {
    userPostsDispatcher({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  });
  return (
    <SocialMediaContext.Provider
      value={{
        userPosts,
        successAlert,
        postLike,
        handleCreatePostSubmit,
        handleDeletePost,
        handleSuccessAlert,
        handlePostLikeButton,
      }}
    >
      {children}
    </SocialMediaContext.Provider>
  );
};

export default SocialMediaContext;
