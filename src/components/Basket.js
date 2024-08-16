import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid, Button, CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Basket() {
  const [mealDatas, setMealDatas] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(true);
  const [mealCount, setMealCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigator = useNavigate();

  useEffect(() => {
    async function getMealFromBaskter() {
      const data = await axios("http://localhost:3001/basket");
      setMealDatas(data.data);
    }

    getMealFromBaskter();
  }, [deleteStatus, mealCount]);

  useEffect(() => {
    let totalValue = 0;

    mealDatas.forEach((item) => {
      totalValue += item.count * item.value;
    });

    setTotalPrice(totalValue);
  }, [mealDatas]);

  async function deleteFromBasket(id) {
    await axios.delete(`http://localhost:3001/basket/${id}`);
    if (deleteStatus) {
      setDeleteStatus(false);
    } else {
      setDeleteStatus(true);
    }
  }

  async function valueChanger(count, meal) {
    await axios.patch(`http://localhost:3001/basket/${meal.id}`, {
      count: count,
    });
  }

  function handleValueIncreaser(meal) {
    valueChanger(meal.count + 1, meal);
    setMealCount(mealCount + 1);
  }

  function handleValueDecreaser(meal) {
    if (meal.count > 1) {
      valueChanger(meal.count - 1, meal);
      setMealCount(mealCount - 1);
    }
  }

  return (
    <div className="basket-container">
      <div className="total-price-container">
        <p className="total-price">Total price : {totalPrice}$</p>
      </div>
      <button
        className="order-button"
        onClick={() => {
          navigator("/payment");
        }}
      >
        order
      </button>
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
                    <div className="count-changer-container">
                      <button
                        className="changer"
                        onClick={() => {
                          handleValueIncreaser(meal);
                        }}
                      >
                        +
                      </button>
                      <div className="value">{meal.count}</div>
                      <button
                        className="changer"
                        onClick={() => {
                          handleValueDecreaser(meal);
                        }}
                      >
                        -
                      </button>
                    </div>
                    <Button size="small" style={{ color: "green" }}>
                      Buy
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
                    <Button
                      onClick={() => {
                        deleteFromBasket(meal.id);
                      }}
                      size="small"
                      style={{ color: "green" }}
                    >
                      Delete from basket
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
    </div>
  );
}
