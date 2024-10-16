import React from 'react';
import  { useEffect , useState} from 'react';
import {useNavigate} from 'react-router-dom';



export default function Login() {

    const navigate = useNavigate(); 











    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    





    const handlesubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
     
        const response = await fetch('http://127.0.0.1:9090/login', {
            method: 'POST',
            body: formData,
            headers: {
                // 'Content-Type': 'multipart/form-data' // Do not set this header; fetch will set it automatically
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            alert("User submitted");
            console.log('Success:', data);
        } else {
            console.error('Error:', response.statusText);
        }


        const result = await response.json();
        setPassword('');
        setUsername('');
            if(result.isValid === 'true'){
                navigate('/home');

            }
            else{
                alert("Not valid Password or Email");
            }
    
    }


    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
   

    return (
        <>
          <div className="login-container">
            <h1>Login</h1>
            <form  id="login-form" onSubmit={handlesubmit}>
              <input type="text" placeholder="Enter your username" required  onChange={handleChangeUsername}/>
              <input type="password" placeholder="Enter your Password" required onChange={handleChangePassword} />
              
              <input type="submit" value="Login" />
            </form>
          </div>
        </>
      );

}    
