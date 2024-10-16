import React from 'react';


export default function User({props}) {
  return (
    <>
        <div id="username-user">
            {props.username}
        </div>
        <div id="user-about">
            {props.about}
        </div>
        
    </>
  )
}
