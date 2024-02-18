import React from 'react';
import logo from '../../Assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const navigator = useNavigate();

    return (
        <div className='sign-up'>
            <form>
                <img src={logo} alt="Hamburger" />

                <div className='sign-up-inputs-container'>
                    <input type="text" id='name' placeholder='Nickname' />
                    <input type="e-mail" id='surname' placeholder='E-mail' />
                    <input type="password" id='password' placeholder='Password' />
                    <input type="password" id='password0' placeholder='Again password' />
                </div>
                <div className='sign-up-checkbox-container'>
                    <input type="checkbox" />
                    <p>I accept terms and conditions</p>
                </div>
                <div className='sign-up-buttons-container'>
                    <button>Sign up</button>
                    <button onClick={() => { navigator('/login') }}>Log in</button>
                </div>
            </form>
        </div>
    )
}