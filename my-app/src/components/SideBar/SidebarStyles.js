import styled from 'styled-components';

export const SideBar = styled.div`
  position: fixed;
  height: 100%;
  width: 150px;
  background-color:black;
  color:white;
  
`;

export const SideBarContents = styled.div`
    
    display: flex;
    position: relative;
    top: 10%;
    gap: 10px;
    align-items: center;

    flex-direction: column;
  a:hover {
      color: gray;
  }
`;



