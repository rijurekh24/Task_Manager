"use client";

import Link from "next/link";
import TaskCard from "./componets/TaskCard";
import { child, get, ref } from "firebase/database";
import { db } from "@/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [tasksList, setTasksList] = useState({
    todo: {},
    in_progress: {},
    done: {},
  });

  const getTasksList = () => {
    get(child(ref(db), `tasks`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          // console.log(snapshot.val());
          const data = snapshot.val();

          const filtered_data = {
            todo: {},
            in_progress: {},
            done: {},
          };

          Object.keys(data).forEach((key) => {
            const item = data[key];
            filtered_data[item["status"]][key] = item;
          });

          // console.log(filtered_data);

          setTasksList(filtered_data);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getTasksList();
  }, []);

  // console.log(tasksList);
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center mb-3">
          <h3>Dashboard</h3>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3 mb-4">
            <div className="bg-primary px-3 py-2 rounded fw-bold">TODO</div>
            <div>
              {Object.keys(tasksList["todo"]).map((key) => {
                return (
                  <TaskCard
                    key={key}
                    props={{ ...tasksList["todo"][key], ["key"]: key }}
                  ></TaskCard>
                );
              })}
            </div>
          </div>

          <div className="col-12 col-lg-3 mb-4">
            <div className="bg-warning px-3 py-2 rounded fw-bold">
              In Progress
            </div>
            <div>
              {Object.keys(tasksList["in_progress"]).map((key) => {
                return (
                  <TaskCard
                    key={key}
                    props={{ ...tasksList["in_progress"][key], ["key"]: key }}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-3 mb-4 fw-bold">
            <div className="bg-success px-3 py-2 rounded">Done</div>
            <div>
              {Object.keys(tasksList["done"]).map((key) => {
                return (
                  <TaskCard
                    key={key}
                    props={{ ...tasksList["done"][key], ["key"]: key }}
                  />
                );
              })}
            </div>
          </div>
          <div className="col-12 col-lg-3">
            <Link href={"/tasks/create"} className="btn btn-dark ">
              Add new task +
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
