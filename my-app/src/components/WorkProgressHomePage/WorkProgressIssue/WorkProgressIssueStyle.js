import styled from 'styled-components';

export const WorkProgressIssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 300px;
  height: 150px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  overflow: hidden;
  white-space: nowrap;
  
`;

export const Title = styled.div`
display: inline-block;
  width: 250px;
  font: 500 40px Roman;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Test = styled.div`
display: block;
width: 200px;
background-color:yellow;
`
