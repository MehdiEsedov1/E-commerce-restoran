import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
import logo from '../Assets/logo.png';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Dropdownmenu from './Dropdownmenu.js';
export default function Header() {

    const IOSSwitch = styled((props) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 50,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
                transform: 'translateX(26px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                    opacity: 1,
                    border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: 0.5,
                },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#33cf4d',
                border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color:
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[100]
                        : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
                duration: 500,
            }),
        },
    }));

    return (
        <div className='Header'>
            <div className="header-container">
                <Link to='/'>
                    <img className='logo' src={logo} alt="Hamburger" />
                </Link>
                <div className='pages'>
                    <Link to='/'>HOME</Link>
                    <Link to='/menu'>MENU</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link>SECTION</Link>
                </div>
                <div className="side-bar">
                    <FormControlLabel
                        control={<IOSSwitch />}
                    />
                    <Dropdownmenu />
                    <Link to='/basket'>
                        <ShoppingBasketIcon sx={{
                            fontSize: "2.7rem",
                            color: "white"
                        }} />
                    </Link>
                </div>
            </div>
        </div>
    )
}