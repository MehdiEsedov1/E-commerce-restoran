import { Paper, Stack } from '@mui/material';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import pizza from '../Assets/pizza.png';
import salad from '../Assets/salad.png';
import sweets from '../Assets/sweets.png';
import water from '../Assets/water.png';
import burger from '../Assets/burger.png';
import souz from '../Assets/souz.png';

export default function Menu() {

  return (
    <div className='menu'>
      <Stack direction="row" spacing={8} style={{
        height: '90vh',
        marginTop: '50px'
      }}>
        <Link to="dessert">
          <Paper className='papers'>
            <img className='logo' src={sweets} alt="sweets" />
          </Paper>
        </Link>
        <Link to="/menu/pizza-Burger">
          <Paper className='papers'>
            <div>
              <img className='logo' src={pizza} alt="pizza" />
              <img className='logo' src={burger} alt="burger" />
            </div>
          </Paper>
        </Link>
        <Link to="/menu/saucesalad">
          <Paper className='papers'>
            <img className='logo' src={salad} alt="salad" />
            <img className='logo' src={souz} alt="souz" />
          </Paper>
        </Link>
        <Link to="/menu/drinks">
          <Paper className='papers'>
            <img className='logo' src={water} alt="water" />
          </Paper>
        </Link>
      </Stack>
      <Outlet />
    </div>
  )
}