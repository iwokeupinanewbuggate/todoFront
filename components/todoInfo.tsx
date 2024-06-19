import { useEffect, useState } from "react";
import Edit from "./editTask";
import { DeleteTask } from "./deleteTask";
import { useGetListQuery, useUptadeStatusMutation } from "@/generated";

export const TodoInfo = ({
  id,
  title,
  description,
  createdAt,
  status,
  workSection,
}: {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  status: boolean;
  workSection: string;
}) => {
  const [isChecked, setIsChecked] = useState(status);
  const [taskDonePTag, setTaskDonePTag] = useState("Pending");
  const [uptadeStatusMutation, { data, loading, error }] =
    useUptadeStatusMutation();
  const { refetch } = useGetListQuery();
  useEffect(() => {
    setTaskDonePTag(status ? "Completed" : "Pending");
  }, [status]);

  useEffect(() => {
    const updateTask = async () => {
      try {
        const res = await uptadeStatusMutation({
          variables: {
            input: {
              TaskId: id,
              status: isChecked,
            },
          },
        });
        refetch();
      } catch (err) {
        console.log("Server error", err);
      }
    };
    updateTask();
  }, [isChecked]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    setTaskDonePTag(checked ? "Completed" : "Pending");
  };

  const date = new Date(createdAt);
  const readableDate = date.toLocaleDateString();
  return (
    <div
      style={{
        width: "64vw",
        height: "15vh",
        border: "1px white solid",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div>
        <h1>{title}</h1>
      </div>
      <div
        style={{
          width: "60vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "10vh",
        }}
      >
        {description}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>{readableDate}</div>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p style={{ width: "100px" }}>{taskDonePTag}</p>
            <DeleteTask id={id} />
            <Edit
              id={id}
              title={title}
              description={description}
              workSection={workSection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
