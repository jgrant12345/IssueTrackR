import { WorkProgressIssue } from "./WorkProgressIssue/WorkProgressIssue";
import { MyBox } from "./WorkProgressIssue/MyBox";
import { Card } from "./WorkProgressIssue/Card";
import { useState } from "react";
import { blue } from "@mui/material/colors";
import { width } from "@mui/system";
import { Test } from "./WorkProgressIssue/WorkProgressIssueStyle";

export function WorkProgressHomePage() {
  const [currentTasks, setTasks] = useState([]);
  currentTasks.push("Task1");
  currentTasks.push("Task2");
  currentTasks.push("Task3");
  return (
    <div >
     <div draggable = "true"> inside draggabel</div>
        <WorkProgressIssue/>
    </div>
  );
}
