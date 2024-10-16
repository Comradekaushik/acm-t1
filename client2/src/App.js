
import Login from "./components/Login";
import Signup from "./components/Signup";
import Users from "./components/Users";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (

    <>
      <Routes>


        <Route path="/" element={< Login/>} />
        <Route path="/users" element={< Users/>} />

        <Route path="/login" element={<Login  />} />

        <Route path="/signup" element={<Signup />} />
        

      </Routes>
    
    </>
    

      
     
   
  );
}

export default App;
