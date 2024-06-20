import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid, Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Mysnackbar from './Mysnackbar';

export default function Cards(props) {
  const [mealDatas, setMealDatas] = useState([]);
  const [statusSnackbar, setStatusSnackbar] = useState(null);
  const [open, setOpen] = React.useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    async function fetchMealData() {
      try {
        const respond = await axios.get("http://localhost:3000/meals");
        if (props.AllDatas == 1) {
          setMealDatas(respond.data[0].Dessert);
        }
        else if (props.AllDatas == 2) {
          setMealDatas(respond.data[1].Hamburger);
        }
        else if (props.AllDatas == 3) {
          setMealDatas(respond.data[2].Pizza);
        }
        else if (props.AllDatas == 4) {
          setMealDatas(respond.data[3].Souce);
        }
        else if (props.AllDatas == 5) {
          setMealDatas(respond.data[4].Salad);
        }
        else if (props.AllDatas == 6) {
          setMealDatas(respond.data[5].Drinks);
        }
        else {
          console.error("Empty!!!");
        }
      }
      catch (error) {
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
      await axios.post("http://localhost:3000/basket", {
        'name': meal.name,
        'value': meal.value,
        'id': meal.id,
        'photo': meal.photo,
      });
      setStatusSnackbar(true);
    }
    catch (error) {
      setStatusSnackbar(false);
    }
  }

  return (
    <div>
      {mealDatas.length > 0 ?
        <Grid container
          sx=
          {{
            marginLeft: "350px",
            marginTop: "50px",
            width: "80%"
          }}>
          {mealDatas.map((meal, index) => {
            return (
              <Grid key={index} item xs={4} sm={4} md={4} lg={4}>
                <Card
                  key={index}
                  style={{
                    width: "500px",
                    height: "500px",
                    marginTop: "50px"
                  }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={meal.photo}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {meal.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {meal.value}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button onClick={() => { addBasket(meal); handleClick() }} size="small" color="primary">
                      add to basket
                    </Button>
                    <Button onClick={() => { navigator(`/menu/${meal.id}`) }} size="small" color="primary">
                      More detail
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )
          })}
        </Grid>
        : console.error("mealDatas is empty!!!")
      }
      <Mysnackbar status={statusSnackbar} handleClick={handleClick} />
    </div >
  )
}