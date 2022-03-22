import { IconContainer } from "./ImportanceIconStyle";
// this is the icon that tells the important the issue is
export function ImportanceIcon(props) {
  const ImportanceNumber = props.ImportanceNumber;
  return (
      <IconContainer>
       {ImportanceNumber}
      </IconContainer>
  );
}
