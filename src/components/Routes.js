import React from 'react';
import Home from '../components/Home';
import Menu from '../components/Menu';
import About from '../components/About';
import Basket from '../components/Basket';
import Aboutmeal from './Aboutmeal';

import Error from '../components/Error';

import Signup from './registration/Signup';
import Login from './registration/Login';
import Profile from './Profile';

import Pizzaburger from './menu_inner/Pizzaburger';
import Drinks from './menu_inner/Drinks';
import Soucesalad from './menu_inner/Soucesalad';

import Burger from './menu_inner/Burger';
import Dessert from './menu_inner/Dessert';
import Pizza from './menu_inner/Pizza';
import Salad from './menu_inner/Salad';
import Souce from './menu_inner/Souce';

import { Route, Routes } from 'react-router-dom';

export default function Routess() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/menu'>
                    <Route index element={<Menu />} />
                    <Route path='dessert' >
                        <Route index element={<Dessert />} />
                    </Route>
                    <Route path='pizza-Burger'>
                        <Route index element={<Pizzaburger />} />
                        <Route path='pizza' element={<Pizza />} />
                        <Route path='burger' element={<Burger />} />
                    </Route>
                    <Route path='drinks'>
                        <Route index element={<Drinks />} />
                    </Route>
                    <Route path='saucesalad'>
                        <Route index element={<Soucesalad />} />
                        <Route path='souce' element={<Souce />} />
                        <Route path='salad' element={<Salad />} />
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