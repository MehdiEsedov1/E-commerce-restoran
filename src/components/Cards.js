import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Mysnackbar from "./Mysnackbar";

export default function Cards() {
  const [mealDatas, setMealDatas] = useState([]);
  const [statusSnackbar, setStatusSnackbar] = useState(null);
  const [open, setOpen] = useState(false);

  const current_url = window.location.href;
  const navigator = useNavigate();

  useEffect(() => {
    async function fetchMealData() {
      try {
        //TODO: Add loading page.
        const respond = await axios.get("http://localhost:3001/meals");

        if (current_url === "http://localhost:3000/menu/dessert") {
          setMealDatas(respond.data[0].Dessert);
        } else if (
          current_url === "http://localhost:3000/menu/pizza-Burger/burger"
        ) {
          setMealDatas(respond.data[1].Hamburger);
        } else if (
          current_url === "http://localhost:3000/menu/pizza-Burger/pizza"
        ) {
          setMealDatas(respond.data[2].Pizza);
        } else if (
          current_url === "http://localhost:3000/menu/saucesalad/salad"
        ) {
          setMealDatas(respond.data[3].Souce);
        } else if (
          current_url === "http://localhost:3000/menu/saucesalad/souce"
        ) {
          setMealDatas(respond.data[4].Salad);
        } else if (current_url === "http://localhost:3000/menu/drinks") {
          setMealDatas(respond.data[5].Drinks);
        } else {
          console.error("Empty!!!");
        }
      } catch (error) {
        console.error("There is nothing like this in JSON!!!");
      }
    }

    fetchMealData();
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  async function addBasket(meal) {
    try {
      await axios.post("http://localhost:3001/basket", {
        name: meal.name,
        value: meal.value,
        id: meal.id,
        photo: meal.photo,
      });
      setStatusSnackbar(true);
    } catch (error) {
      setStatusSnackbar(false);
    }
  }

  return (
    <div>
      {mealDatas.length > 0 ? (
        <Grid
          container
          sx={{
            margin: "auto",
            marginTop: "50px",
            width: "80%",
          }}
        >
          {mealDatas.map((meal, index) => {
            return (
              <Grid key={index} item xs={4} sm={4} md={4} lg={4}>
                <Card
                  key={index}
                  style={{
                    width: "500px",
                    height: "500px",
                    marginTop: "50px",
                    borderRadius: "8px",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="325"
                      image={meal.photo}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{ fontSize: "20px" }}
                      >
                        {meal.value}$
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => {
                        addBasket(meal);
                        handleClick();
                      }}
                      size="small"
                      style={{ color: "green" }}
                    >
                      add to basket
                    </Button>
                    <Button
                      onClick={() => {
                        navigator(`/menu/${meal.id}`);
                      }}
                      size="small"
                      style={{ color: "green" }}
                    >
                      More detail
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        console.error("mealDatas is empty!!!")
      )}
      <Mysnackbar status={statusSnackbar} handleClick={handleClick} />
    </div>
  );
}
