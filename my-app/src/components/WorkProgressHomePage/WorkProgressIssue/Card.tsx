import React from "react";
import { useDrag } from "react-dnd";
import { CardContainer } from "./CardStyles";

export function Card() {
    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "card",
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }));
      return (
       <div draggable = "true">
         hiiiii
       </div>
      );
  }