import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { userRequest } from "../utils/axios";
import { ToastContainer, toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ post, fetchData }) {
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = async () => {
    try {
      await userRequest.put(`post/${post._id}`, { title, description });
      toast.success("Post updated successfully");
      handleClose();
      fetchData();
    } catch (err) {
      toast.error("Post cannot be updated");
    }
  };

  return (
    <div>
      <ToastContainer />
      <EditIcon className="text-lime-400 cursor-pointer" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="flex flex-col gap-2">
              <label>Title</label>
              <input
                value={title}
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className="outline"
              />
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="flex flex-col gap-2">
              <label>Description</label>
              <textarea
                value={description}
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                className="outline"
              />
            </div>
          </Typography>
          <Button
            style={{ backgroundColor: "red", color: "white", margin: "20px" }}
            onClick={handleUpdate}
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
