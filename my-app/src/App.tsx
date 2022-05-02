import './App.css';
import { Login } from './components/login/Login';
import { Signup } from './components/Signup/Signup';
import { useAppSelector } from './app/hooks';
import { Sidebar } from './components/SideBar/Sidebar';
import { WorkProgressHomePage } from './components/WorkProgressHomePage/WorkProgressHomePage';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet
} from "react-router-dom";
import { useEffect, useState } from 'react';
let check = false

function App() {
  
  const [isAuthenticated, setAuthenticated] = useState(false)
  
  return (
    <div className="App">
      <Outlet />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/protected" element={
          <RequireAuth passed = "true">
            <About />
          </RequireAuth>
        } />
       
        <Route path = "/2/checking" element = {<div>checking</div>}/>
      </Routes>
    </div>
  );
}
function RequireAuth(props : any){
  const isLoggedIn : boolean = useAppSelector(state => state.user.isLoggedIn)

  let location = useLocation();

  if(!isLoggedIn){
    return <Navigate to = "/" state = {{from: location}} />
  }
  
  return <WorkProgressHomePage />
}


function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/protected">About</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
