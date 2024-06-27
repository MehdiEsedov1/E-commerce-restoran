import React from 'react';
import Home from '../components/Home';
import Menu from '../components/Menu';
import About from '../components/About';
import Basket from '../components/Basket';
import Aboutmeal from './AboutMeal';

import Error from '../components/Error';

import Signup from './registration/SignUp';
import Login from './registration/LogIn';
import Profile from './Profile';

import Pizzaburger from './menu_inner/Pizzaburger';
import Soucesalad from './menu_inner/Soucesalad';

import Cards from './Cards';

import { Route, Routes } from 'react-router-dom';

export default function Routess() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu'>
                    <Route index element={<Menu />} />
                    <Route path='dessert' >
                        <Route index element={<Cards />} />
                    </Route>
                    <Route path='pizza-Burger'>
                        <Route index element={<Pizzaburger />} />
                        <Route path='pizza' element={<Cards />} />
                        <Route path='burger' element={<Cards />} />
                    </Route>
                    <Route path='drinks'>
                        <Route index element={<Cards />} />
                    </Route>
                    <Route path='saucesalad'>
                        <Route index element={<Soucesalad />} />
                        <Route path='souce' element={<Cards />} />
                        <Route path='salad' element={<Cards />} />
                    </Route>
                    <Route path=':mID' element={<Aboutmeal />} />
                </Route>
                <Route path='/about' element={<About />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )
}