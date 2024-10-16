import React from 'react';
import { useEffect, useState } from 'react';
import User from './User';

export default function Users() {


    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = async () => {
          const res = await fetch('http://localhost:9090/users');
          const data = await res.json();
          setUsers(data);
        };
        fetchUsers();
      }, []);
  return (
    <>

<div id="usersmain-container">
      {users.map((user,index) => (
                <User key = {index} props={user} />
      ))}


      



    </div>
    </>
    
  )
}
