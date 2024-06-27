import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MenuIntroduction() {

  const [status, setStatus] = useState("none");
  const navigator = useNavigate();

  function onMouseEnterHandler() {
    setStatus("block");
  }

  function onMouseLeaveHandler() {
    setStatus("none");
  }

  return (
    <div style={{
      position: 'relative'
    }}>
      <div onMouseOver={onMouseEnterHandler}>
        <Avatar />
      </div>
      <div onMouseLeave={onMouseLeaveHandler} style={{
        display: status
      }} className='dropDownMenu'>
        <button onClick={() => navigator("signup")}>Sign up</button>
        <button onClick={() => navigator("login")}>Log in</button>
      </div>
    </div>
  );
}