import React from 'react';
import logo from '../../Assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {

  const navigator = useNavigate();

  return (
    <div className='sign-up'>
      <form>
        <img src={logo} alt="Hamburger" />

        <div className='sign-up-inputs-container'>
          <input type="text" id='name' placeholder='Nickname' />
          <input type="password" id='password' placeholder='Password' />
        </div>
        <div className='sign-up-checkbox-container'>
          <input type="checkbox" />
          <p>I accept terms and conditions</p>
        </div>
        <div className='sign-up-buttons-container'>
          <button onClick={() => { navigator('/signup') }}>Sign up</button>
          <button>Log in</button>
        </div>
      </form>
    </div>
  )
}