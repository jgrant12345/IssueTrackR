import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SideBar, SideBarContents } from "./SidebarStyles";

export function Sidebar(){
    return (
        <SideBar>
            <SideBarContents>
                <a>1</a>
                <a>2</a>
                <a>3</a>
            </SideBarContents>
        </SideBar>
    )
}