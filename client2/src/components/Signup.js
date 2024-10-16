import React from 'react';
import  { useEffect , useState} from 'react';

import "./signup.css";



export default function Signup() {











    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [about, setAbout] = useState("");
    





    const handlesubmit = async (event) => {
      event.preventDefault()
  
   


        // const formData = new FormData();
        // formData.append("username", username);
        // formData.append("password", password);
        // formData.append("about", about);

        const formData = {
          username : username,
          password : password,
          about : about
        }
        

        
        
        const response = await fetch('http://127.0.0.1:9090/register', {
            method: 'POST',
            body: formData,
            headers: {
                
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            alert("User submitted");
            console.log('Success:', data);
        } else {
            console.error('Error:', response.statusText);
        }
    
    }


    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    };
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleChangeAbout = (event) => {
        setAbout(event.target.value);
    };

    return (
        <>
          <div className="Signup-container">
            <h1 className='signup-container-h1'>Signup</h1>
            <form className='signup-container-form' id="signup-form" onSubmit={handlesubmit}>
              <input className="signup-container-input" type="text" placeholder="Enter your username" required  onChange={handleChangeUsername}/>
              <input className="signup-container-password" type="password" placeholder="Enter your Password" required onChange={handleChangePassword} />
              <textarea className="signup-container-textarea" placeholder='Write something about yoursekf' required onChange={handleChangeAbout}>

              </textarea>
              <input className='signup-container-input-submit' type="submit" value="Signup" />
            </form>
          </div>
        </>
      );

}    