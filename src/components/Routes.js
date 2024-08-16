import React from "react";
import Home from "../components/Home";
import Menu from "../components/Menu";
import About from "../components/About";
import Basket from "../components/Basket";
import Aboutmeal from "./AboutMeal";
import Error from "../components/Error";
import Cards from "./Cards";
import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";

export default function Routess() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu">
          <Route index element={<Menu />} />
          <Route path="dessert">
            <Route index element={<Cards />} />
          </Route>
          <Route path="pizzaburger">
            <Route index element={<Menu />} />
            <Route path="burger" element={<Cards />} />
            <Route path="pizza" element={<Cards />} />
          </Route>
          <Route path="saucesalad">
            <Route index element={<Menu />} />
            <Route path="souce" element={<Cards />} />
            <Route path="salad" element={<Cards />} />
          </Route>
          <Route path="drinks">
            <Route index element={<Cards />} />
          </Route>
          <Route path=":mID" element={<Aboutmeal />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}
