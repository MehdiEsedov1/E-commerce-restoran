import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Paper, Stack } from '@mui/material';
import pizza from '../../assets/pizza.png';
import burger from '../../assets/burger.png';

export default function Pizza_Burger() {

  return (
    <div className='menu'>
      <Stack direction="row" spacing={8} style={{
        height: '90vh',
        marginTop: '50px'
      }}>
        <Link to="burger">
          <Paper className='papers'>
            <img className='logo' src={burger} alt="burger" />
          </Paper>
        </Link>
        <Link to="pizza">
          <Paper className='papers'>
            <div>
              <img className='logo' src={pizza} alt="Pizza" />
            </div>
          </Paper>
        </Link>
      </Stack>
      <Outlet />
    </div>
  )
}