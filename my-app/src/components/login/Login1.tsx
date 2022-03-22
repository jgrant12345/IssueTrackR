import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logIn } from "../../features/Users/UserSlice";

export function Login1(){
    let history = useNavigate();
    let location = useLocation();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useAppDispatch();
  
    const handleChangeUserName = (event : any) => {
      setUserName(event.target.value);
    };
    const handleChangePassword = (event: any) => {
      setPassword(event.target.value);
    };
    const handleLogin = async (event: any) => {
        
     event.preventDefault();
      const res = await axios.get("http://localhost:3001/login", { params: { username: userName,
    password: password } });
  
    // if the user is verified in the system then they can login
    if(res.data === true){
      dispatch(logIn);
      history('/protected');
    }
      
  
        
      
    };
  
    return (
  
      <div>a;sdkjfa;lskdj;fka</div>
    );
}

