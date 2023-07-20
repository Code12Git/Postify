import React from "react";
import { format } from "timeago.js";
import DeleteIcon from "@mui/icons-material/Delete";
import { userRequest } from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import Modal from "./Modal";
const Post = ({ post, fetchData }) => {
  console.log(post);
  const deleteHandler = async (userId) => {
    try {
      const res = await userRequest.delete(`/post/${userId}`);
      await res.data;
      toast.success("Post deleted successfully");
      fetchData();
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <ToastContainer />
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-12">
          <div class="p-12 md:w-1/2 flex flex-col items-start">
            <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              {post.title}
            </h2>
            <p class="leading-relaxed mb-8">{post.description}</p>
            <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a class="text-indigo-500 inline-flex items-center">
                Created {format(post.createdAt)}
              </a>
              <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <Modal fetchData={fetchData} post={post} />
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <DeleteIcon
                  onClick={() => deleteHandler(post._id)}
                  className="text-sky-400 cursor-pointer"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;
