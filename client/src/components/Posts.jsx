import React from "react";
import Post from "./Post";

const Posts = ({ post, fetchData }) => {
  return (
    <div className="flex flex-col ">
      {post?.map((item) => (
        <Post key={item._id} post={item} fetchData={fetchData} />
      ))}
    </div>
  );
};

export default Posts;
