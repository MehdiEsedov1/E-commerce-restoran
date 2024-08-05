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

  const navigator = useNavigate();

  useEffect(() => {
    async function getMealFromBaskter() {
      const data = await axios("http://localhost:3001/basket");
      setMealDatas(data.data);
    }

    getMealFromBaskter();
  }, [deleteStatus]);

  async function deleteFromBasket(id) {
    await axios.delete(`http://localhost:3001/basket/${id}`);
    if (deleteStatus) {
      setDeleteStatus(false);
    } else {
      setDeleteStatus(true);
    }
  }

  async function handleClick(enteredNumbers, meal) {
    await axios.patch(`http://localhost:3001/basket/1`, {
      count: enteredNumbers[meal.id],
    });
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
                      <button className="changer">+</button>
                      <div>1</div>
                      <button className="changer">-</button>
                    </div>
                    <Button
                      onClick={() => {
                        handleClick(enteredNumbers, meal.id);
                      }}
                      size="small"
                      style={{ color: "green" }}
                    >
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
