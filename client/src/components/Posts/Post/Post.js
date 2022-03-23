import react from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    <>
      <h1>POST</h1>
      <Post />
      <Post />
    </>
  );
};

export default Post;
