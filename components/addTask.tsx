import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useCreateListMutation, useGetListQuery } from "@/generated";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const style = {
  position: "absolute",
  top: "30%",
  left: "17.5vw",
  right: "17.5vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "65vw",
  height: "40vh",
  border: "none",
  backgroundColor: "#242424",
  borderRadius: "20px",
};

export default function Add() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [workSection, setWorkSection] = React.useState("1");
  const { refetch } = useGetListQuery();
  const close = () => {
    setOpen(false);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };
  const handleWorkSection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setWorkSection(event.target.value);
  };

  const [CreateListMutation, { data, loading, error }] =
    useCreateListMutation();
  const addTask = async () => {
    if (title !== "" && description !== "") {
      try {
        setWorkSection("1");
        const res = await CreateListMutation({
          variables: {
            input: {
              title: title,
              description: description,
              workSection: workSection,
            },
          },
        });
        handleClose();
        refetch();
        setTitle("");
        setDescription("");
        setWorkSection("");
        toast.success("Successfully posted", {
          position: "top-left",
          theme: "dark",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Fill in all the input", {
        position: "top-center",
        theme: "dark",
        closeOnClick: true,
      });
    }
  };
  return (
    <div>
      <Button
        className={
          "bg-black p-[4px] text-white rounded-[10px] border-[1px] border-solid border-white"
        }
        onClick={handleOpen}
      >
        Add task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={"w-[100vw] h-[100vh] bg-[rgba(10, 10, 10, 0.1)]"}>
          <Box sx={style}>
            <div className={"flex flex-col gap-[15px] "}>
              <div
                className={
                  "bg-[#545454] w-[20px] h-[20px] flex justify-center items-center text-black rounded-[50%]"
                }
                onClick={close}
              >
                X
              </div>
              <div>
                <input
                  onChange={handleTitle}
                  value={title}
                  placeholder="Title"
                  className={
                    "bg-[#545454] rounded-[10px] border-[1px] border-white border-solid text-black w-[40vw] p-[5px]"
                  }
                />
              </div>
              <div className={"flex flex-col gap-[15px]"}>
                <textarea
                  onChange={handleDescription}
                  value={description}
                  placeholder="Description"
                  className={
                    "bg-[#545454] rounded-[10px] border-[1px] border-white border-solid text-black w-[40vw] h-[15vh] p-[5px]"
                  }
                />
                <select
                  className={
                    "bg-[#545454] rounded-[10px] border-[1px] border-white border-solid text-black w-[40vw] p-[5px]"
                  }
                  onChange={handleWorkSection}
                  value={workSection}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button
                onClick={addTask}
                className="bg-[#545454] rounded-[10px] border-[white] border-[1px] border-solid"
              >
                Add task
              </button>
            </div>
          </Box>
        </div>
      </Modal>
    </div>
  );
}
