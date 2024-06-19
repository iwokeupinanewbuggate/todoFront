import { useDeleteTaskMutation, useGetListQuery } from "@/generated";
import { DeleteIcon } from "lucide-react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const DeleteTask = ({ id }: { id: string }) => {
  const { refetch } = useGetListQuery();
  const [deleteTaskMutation, { data, loading, error }] =
    useDeleteTaskMutation();
  const deleteTask = async () => {
    try {
      const res = await deleteTaskMutation({
        variables: {
          deleteTaskId: id,
        },
      });
      refetch();
      toast.success("Successfuly deleted", {
        theme: "dark",
        position: "top-center",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <DeleteIcon onClick={deleteTask} />
    </div>
  );
};
