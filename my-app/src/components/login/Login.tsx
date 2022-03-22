import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { decrement, increment } from "../../features/counter/counterSlice";
import { logIn } from "../../features/Users/UserSlice";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,

} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginForm } from './LoginStyles'
import { useAppDispatch } from "../../app/hooks";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
export function Login() {
  let history = useNavigate();
  let location = useLocation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
//   const count = useSelector((state) => state.counter.value);
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useAppDispatch();

  const handleChangeUserName = (event: any) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event: any) => {
    setPassword(event.target.value);
  };
  const handleLogin = async (event:any) => {
      
   event.preventDefault();
    const res = await axios.get("http://localhost:3001/login", { params: { username: userName,
  password: password } });

  // if the user is verified in the system then they can login
  if(res.data === true){
      console.log('t3sting');
    dispatch(logIn());
    console.log("change?")
    history('/protected');
  }
    

      
    
  };

  return (
    <LoginForm>
          <h1>Login Form</h1>
        <TextField
          onChange={(event) => handleChangeUserName(event)}
          value={userName}
          sx={{ m: 1, width: '25ch' }}
          label="Username" 
          variant="outlined" 
        ></TextField>

       
        <TextField onChange={(event) => handleChangePassword(event)}
        label="Password" 
        sx={{ m: 1, width: '25ch' }}
        variant="outlined" 
        ></TextField>
        <Button variant = "contained"
       
        onClick={(event) => handleLogin(event)}>Login</Button>
       <span>Are you new?&nbsp;
       <a href="/Signup">sign up here</a></span>

       
    </LoginForm>
  );
}
