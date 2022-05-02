import { ImportanceIcon } from "../../ImportanceIcon/ImportanceIcon";
import { useState } from "react";
import {
  IconRow,
  WorkProgressIssueContainer,
  Title,
} from "./WorkProgressIssueStyle";
export function WorkProgressIssue() {
  const [Number, setNumber] = useState(0);
  const onDragStart = (event) => {
    console.log(event)
  }

  const onDrag = (event) => {
    
   setNumber(event.clientX)
  }
  return (
    <div draggable
    onDragStart={onDragStart}
    onDrag = {onDrag}>
    <WorkProgressIssueContainer>
       <Title>Titlejk jkl;jkl; jkalk;dsjf;laasdfasdfkjsd;klfja;sldf asl;dfj a;lskd fa jk</Title>
       <div>description is here</div>
       <div>{Number}</div>
      <IconRow>
        {" "}
        <ImportanceIcon ImportanceNumber="3"> </ImportanceIcon>
      </IconRow>

     
    </WorkProgressIssueContainer>
    </div>
  );
}
