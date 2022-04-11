import React from "react";
import { useDrop } from "react-dnd";

import { Card } from "./Card"
export function MyBox({ card } : any) {
  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: "card",
    drop: () => console.log("ya"),
    collect: (monitor: any) => ({
      isOver: monitor.isOver(),
    }),
  }));
  return (
    <div
      className="box"
      ref={dropRef}
      style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}
    >
      {card ? <Card /> : "Box"}
    </div>
  );
}