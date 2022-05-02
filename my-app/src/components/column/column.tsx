import React from 'react'
import {Container, Title, TaskList} from "./columnstyles";
import { initialData } from '../WorkProgressHomePage/WorkProgressHomePage';


export function Column() {
    return (
        <Container>
             <Title>
                 hello
             </Title>
             <TaskList>Tasks go here</TaskList>
         </Container>
    )
}