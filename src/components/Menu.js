import { Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import sweets from "../assets/sweets.png";
import water from "../assets/water.png";
import saladSouz from "../assets/saladSouz.png";
import pizzaBurger from "../assets/pizzaBurger.png";
import pizza from "../assets/pizza.png";
import burger from "../assets/burger.png";
import salad from "../assets/salad.png";
import souce from "../assets/souz.png";

export default function Menu() {
  const [menu, setMenu] = useState([]);
  const location = useLocation();

  let firstMenu = [
    {
      to: "dessert",
      img: sweets,
      alt: "sweets",
    },
    {
      to: "/menu/pizzaburger",
      img: pizzaBurger,
      alt: "pizza-burger",
    },
    {
      to: "/menu/saucesalad",
      img: saladSouz,
      alt: "salad-souz",
    },
    {
      to: "/menu/drinks",
      img: water,
      alt: "water",
    },
  ];

  let secondMenu = [
    {
      to: "burger",
      img: burger,
      alt: "burger",
    },
    {
      to: "pizza",
      img: pizza,
      alt: "pizza",
    },
  ];

  let thirdMenu = [
    {
      to: "souce",
      img: souce,
      alt: "souce",
    },
    {
      to: "salad",
      img: salad,
      alt: "salad",
    },
  ];

  useEffect(() => {
    if (location.pathname === "/menu") {
      setMenu(firstMenu);
    } else if (location.pathname === "/menu/saucesalad") {
      setMenu(thirdMenu);
    } else if (location.pathname === "/menu/pizzaburger") {
      setMenu(secondMenu);
    }
  }, [location]);

  return (
    <div className="menu">
      <Stack
        direction="row"
        spacing={8}
        style={{
          height: "90vh",
          marginTop: "50px",
        }}
      >
        {menu.map((item, index) => {
          return (
            <Link key={index} to={item.to}>
              <Paper className="papers">
                <img className="logo" src={item.img} alt={item.alt} />
              </Paper>
            </Link>
          );
        })}
      </Stack>
      <Outlet />
    </div>
  );
}
