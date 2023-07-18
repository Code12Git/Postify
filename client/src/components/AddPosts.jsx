import React, { useEffect } from "react";
import { useState } from "react";
import { publicRequest } from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Posts from "./Posts";
const AddPosts = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await publicRequest.get("/post");
      setPost(res.data.posts);
    } catch (err) {
      console.error(err);
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (title && description) {
        const res = await publicRequest.post("/post", { title, description });
        await res.data;
        toast("Post Created Successfully");
        fetchData();
        setTitle("");
        setDescription("");
      } else {
        toast("Please enter a description and title");
      }
    } catch (err) {
      toast("Please ");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <ToastContainer />
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <h1 className="text-center font-serif text-2xl text-lime-500">
              Add Post
            </h1>
            <label htmlFor="title" className="text-lg font-semibold">
              Title
            </label>
            <input
              name="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="text-lg font-semibold">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              onClick={submitHandler}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Posts post={post} fetchData={fetchData} />
    </>
  );
};

export default AddPosts;
