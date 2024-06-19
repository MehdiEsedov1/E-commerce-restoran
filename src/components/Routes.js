import React from 'react';
import Home from '../components/Home';
import Menu from '../components/Menu';
import About from '../components/About';
import Basket from '../components/Basket';
import AboutMeal from './AboutMeal';

import Error from '../components/Error';

import SignUp from './Registration/SignUp';
import LogIn from './Registration/LogIn';
import Profile from './Profile';

import Pizza_Burger from '../components/MenuInner/Pizza-Burger';
import Drinks from '../components/MenuInner/Drinks';
import Souce_salad from '../components/MenuInner/Souce-salad';

import Burger from '../components/MenuInner/Burger';
import Dessert from '../components/MenuInner/Dessert';
import Pizza from '../components/MenuInner/Pizza';
import Salad from '../components/MenuInner/Salad';
import Souce from '../components/MenuInner/Souce';

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
                        <Route index element={<Pizza_Burger />} />
                        <Route path='pizza' element={<Pizza />} />
                        <Route path='burger' element={<Burger />} />
                    </Route>
                    <Route path='drinks'>
                        <Route index element={<Drinks />} />
                    </Route>
                    <Route path='saucesalad'>
                        <Route index element={<Souce_salad />} />
                        <Route path='souce' element={<Souce />} />
                        <Route path='salad' element={<Salad />} />
                    </Route>
                    <Route path=':mID' element={<AboutMeal />} />
                </Route>
                <Route path='/about' element={<About />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )
}