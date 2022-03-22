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
  Outlet,

} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { LoginForm } from './SignupStyles'
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
export function Signup() {
  let navigate = useNavigate();
  let location = useLocation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const count = useSelector((state) => state.counter.value);
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  const handleChangeUserName = (event) => {
    setUserName(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLogin = async (event) => {
      
   event.preventDefault();
    const res = await axios.post("http://localhost:3001/signup", {   username: userName,
  password: password }); 

  if(res.data == "Success"){
    dispatch(logIn());
    navigate("/protected")
  }

      
    
  };

  return (
    <LoginForm>
          <h1>Sign up</h1>
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
       
        onClick={(event) => handleLogin(event)}>Sign up</Button>

        <span>Have an account?&nbsp;
       <a href="/">Log in here</a></span>
       
    </LoginForm>
  );
}
