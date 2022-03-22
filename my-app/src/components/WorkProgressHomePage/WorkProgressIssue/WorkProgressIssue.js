import { ImportanceIcon } from "../../ImportanceIcon/ImportanceIcon";
import {
  IconRow,
  WorkProgressIssueContainer,
  Title,
} from "./WorkProgressIssueStyle";
export function WorkProgressIssue() {
  return (
    <WorkProgressIssueContainer>
       <Title>Titlejk jkl;jkl; jkalk;dsjf;laasdfasdfkjsd;klfja;sldf asl;dfj a;lskd fa jk</Title>
       <div>description is here</div>
      <IconRow>
        {" "}
        <ImportanceIcon ImportanceNumber="3"> </ImportanceIcon>
      </IconRow>

     
    </WorkProgressIssueContainer>
  );
}
