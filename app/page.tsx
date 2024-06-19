"use client";
import { TodoInfo } from "@/components/todoInfo";
import { ListItem, useGetListQuery } from "@/generated";
import Add from "@/components/addTask";
import React, { useState } from "react";

export default function Home() {
  const [searchBar, setSearchBar] = useState("");
  const [workSectionSelection, setWorkSectionSelection] = useState("1");
  const { data, loading, error } = useGetListQuery();
  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Server Error {error.message}</div>;
  if (data) {
    console.log(data);
  }
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchBar(event.target.value);
  };
  const handleSelectWorkSection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setWorkSectionSelection(event.target.value);
  };

  const filteredDataBySearch = data?.getList.filter((task) =>
    task.title.toLowerCase().includes(searchBar.toLocaleLowerCase())
  );

  const filteredDataByWorkSection = filteredDataBySearch?.filter(
    (task) => task.workSection === workSectionSelection
  );
  return (
    <div
      className={
        "bg-black w-[100vw] h-[100vh] text-white flex justify-center items-center"
      }
    >
      <div
        className={
          "border-solid border-[1px] border-white rounded-[20px] p-[10px] w-[80vw] h-[80vh] flex justify-center items-center flex-col gap-[15px]"
        }
      >
        <div
          className={
            "flex justify-evenly items-center gap-[10px] border-[1px] border-white border-solid rounded-[10px] p-[10px] w-[75vw] "
          }
        >
          <input
            className={
              "bg-[#545454] rounded-[10px] border-[1px] border-white border-solid text-black w-[20vw] p-[5px]"
            }
            value={searchBar}
            onChange={handleSearchInputChange}
          />
          <select
            className={
              "bg-black border-[1px] border-white border-solid p-[5px] rounded-[10px] w-[5vw]"
            }
            value={workSectionSelection}
            onChange={handleSelectWorkSection}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
          <Add />
        </div>
        <div
          className={
            " flex justify-center items-center gap-[10px] border-white border-[1px] border-solid rounded-[10px] p-[10px] w-[75vw] h-[65vh]"
          }
        >
          <div
            className={
              "flex gap-[30px] w-[64vw] h-[60vh] flex-col overflow-y-auto"
            }
          >
            {filteredDataByWorkSection?.map((todo: ListItem, key: number) => {
              return (
                <TodoInfo
                  key={key}
                  id={todo._id}
                  title={todo.title}
                  description={todo.description}
                  createdAt={todo.createdAt}
                  workSection={todo.workSection}
                  status={todo.status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
