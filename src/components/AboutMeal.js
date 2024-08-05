import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Aboutmeal() {
  const { mID } = useParams();
  const [mealData, setMealData] = useState(null);
  const [mealImg, setMealImg] = useState(null);

  async function fetchData() {
    const respond = await axios("http://localhost:3001/meals");
    return respond.data;
  }

  async function search() {
    const mealDatas = await fetchData();
    for (let j = 0; j < mealDatas[0].Dessert.length; j++) {
      if (mealDatas[0].Dessert[j].id == mID) {
        setMealData(mealDatas[0].Dessert[j].mainData);
        setMealImg(mealDatas[0].Dessert[j].photo);
        break;
      }
    }
    for (let j = 0; j < mealDatas[1].Hamburger.length; j++) {
      if (mealDatas[1].Hamburger[j].id == mID) {
        setMealData(mealDatas[1].Hamburger[j].mainData);
        setMealImg(mealDatas[1].Hamburger[j].photo);
        break;
      }
    }
    for (let j = 0; j < mealDatas[2].Pizza.length; j++) {
      if (mealDatas[2].Pizza[j].id == mID) {
        setMealData(mealDatas[2].Pizza[j].mainData);
        setMealImg(mealDatas[2].Pizza[j].photo);
        break;
      }
    }
    for (let j = 0; j < mealDatas[3].Souce.length; j++) {
      if (mealDatas[3].Souce[j].id == mID) {
        setMealData(mealDatas[3].Souce[j].mainData);
        setMealImg(mealDatas[3].Souce[j].photo);
        break;
      }
    }
    for (let j = 0; j < mealDatas[4].Salad.length; j++) {
      if (mealDatas[4].Salad[j].id == mID) {
        setMealData(mealDatas[4].Salad[j].mainData);
        setMealImg(mealDatas[4].Salad[j].photo);
        break;
      }
    }
    for (let j = 0; j < mealDatas[5].Drinks.length; j++) {
      if (mealDatas[5].Drinks[j].id == mID) {
        setMealData(mealDatas[5].Drinks[j].mainData);
        setMealImg(mealDatas[5].Drinks[j].photo);
        break;
      }
    }
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <div className="about-meal-container">
      <img src={mealImg} />
      <div className="data">{mealData}</div>
    </div>
  );
}
