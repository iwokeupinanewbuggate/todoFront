import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  useCreateListMutation,
  useEditTaskMutation,
  useGetListQuery,
} from "@/generated";
import { EditIcon } from "./icons/edit";
import { toast } from "react-toastify";

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

export default function Edit({
  id,
  title,
  description,
  workSection,
}: {
  id: string;
  title: string;
  description: string;
  workSection: string;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [EditTitle, setEditTitle] = React.useState(title);
  const [Editdescription, setEditDescription] = React.useState(description);
  const [EditWorkSection, setEditWorkSection] = React.useState(workSection);
  const close = () => {
    setOpen(false);
  };
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(event.target.value);
  };
  const handleDescription = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditDescription(event.target.value);
  };
  const handleWorkSection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditWorkSection(event.target.value);
  };
  const { refetch } = useGetListQuery();
  const [editTaskMutation, { data, loading, error }] = useEditTaskMutation();
  const editTask = async () => {
    if (EditTitle !== "" && Editdescription !== "") {
      try {
        const res = await editTaskMutation({
          variables: {
            input: {
              id: id,
              title: EditTitle,
              description: Editdescription,
              workSection: EditWorkSection,
            },
          },
        });
        toast.success("Successfully posted", {
          position: "top-left",
          theme: "dark",
        });
        handleClose();
        refetch();
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
        <EditIcon />
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
                  value={EditTitle}
                  placeholder="Title"
                  className={
                    "bg-[#545454] rounded-[10px] border-[1px] border-white border-solid text-black w-[40vw] p-[5px]"
                  }
                />
              </div>
              <div className={"flex flex-col gap-[15px]"}>
                <textarea
                  onChange={handleDescription}
                  value={Editdescription}
                  placeholder="Description"
                  className={
                    "bg-[#545454] rounded-[10px] border-[1px] border-white border-solid text-black w-[40vw] h-[15vh] p-[5px]"
                  }
                />

                <input
                  onChange={handleWorkSection}
                  value={EditWorkSection}
                  placeholder="Work Section"
                  className={
                    "bg-[#545454] rounded-[10px] border-[1px] border-white border-solid text-black w-[40vw] p-[5px]"
                  }
                />
              </div>
              <button
                onClick={editTask}
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
