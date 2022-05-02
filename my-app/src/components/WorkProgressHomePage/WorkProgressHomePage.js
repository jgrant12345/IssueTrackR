import { WorkProgressIssue } from "./WorkProgressIssue/WorkProgressIssue";
import { MyBox } from "./WorkProgressIssue/MyBox";
import { Card } from "./WorkProgressIssue/Card";
import { useEffect, useState } from "react";
import { blue } from "@mui/material/colors";
import { width } from "@mui/system";
import { Test } from "./WorkProgressIssue/WorkProgressIssueStyle";
import { Column } from "../column/column";
export const initialData = {
  tasks: {
      'task1' : {id: 'taask-1', content: 'Take out the garbage'},
      'task2' : {id: 'task-2', content: 'Take out the light'},
      'task3' : {id: 'task-3', content: 'Take out the dryer'},

  },
  columns : {
      'column-1': {
          id: 'to do',
          taskIds: ['task-1', 'task-2', 'task-3', 'task4']
      },
  },
  columnOrder: ['column-1'],
};

export function WorkProgressHomePage() {
  const [title, setTitle] = useState({});
   
  useEffect(() => {
    setTitle(initialData);
  })
  const data = [1,2,3,4,5]
  return (
      <div>
          {console.log(initialData.columns['column-1'].taskIds)}
         {initialData.columns['column-1'].taskIds.map((input) => {
             return (<div>{input}</div>)
         })}
         <Column></Column>
      </div>
    //   state.columns.map(columnId => {
    // const column = this.state.columns[columnId];
    // const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

    // return <div key={column.id} column = {column} tasks = {tasks} />


)
    
  
}
