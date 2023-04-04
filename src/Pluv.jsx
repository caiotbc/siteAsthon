import {Grid} from '@mui/material';
import React, { useState , useEffect } from 'react';
import GraficoBarra from "./components/GraficoBarra"
import Card from "./components/Card"
import CardLora from "./components/CardLora"
import Ficha from "./components/Ficha"
import axios from "axios";
import config from "./config.json";
let baseURL = config.baseURL;
  
const Pluv = (props) =>
{
  const [rainLastHour, setRainLastHour] = useState([]);
  const [rainLastWeek, setRainLastWeek] = useState([]);
  const [rainLastDay, setRainLastDay] = useState([]);
  const [lastLora, setLastLora] = useState([]);
  const [rainAmountLastHour, setRainAmountLastHour] = useState([]);
  const [rainAmountLastDay, setRainAmountLastDay] = useState([]);
  const [currentRain, setCurrentRain] = useState([]);
  
  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "rainLastHour", id: "260d941c" }}).then((response) => 
    {
      //console.log(response.data);
      setRainLastHour(response.data);
    });
  }, []);
  
  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "rainLastDay", id: "260d941c" }}).then((response) => 
    {
      //console.log(response.data);
      setRainLastDay(response.data);
    });
  }, []);
  
  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "rainLastWeek", id: "260d941c" }}).then((response) => 
    {
      //console.log(response.data);
      setRainLastWeek(response.data);
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "currentRain", id: "260d941c" }}).then((response) => 
    {
       //console.log(response.data);
       if(response.data[0])
       {
          setCurrentRain(response.data);
       }
       else
       {
        setCurrentRain([{timestamp: "" , value : 0}]);
       }
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "rainAmountLastHour", id: "260d941c" }}).then((response) => 
    {
       //console.log(response.data);
       if(response.data[0])
       {
          setRainAmountLastHour(response.data);
       }
       else
       {
        setRainAmountLastHour([{timestamp: "" , value : 0}]);
       }
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "rainAmountLastDay", id: "260d941c" }}).then((response) => 
    {
       //console.log(response.data);
       if(response.data[0])
       {
        setRainAmountLastDay(response.data);
       }
       else
       {
        setRainAmountLastDay([{timestamp: "" , value : 0}]);
       }
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "currentLevel", id: "260d941c" }}).then((response) => 
    {
       //console.log(response.data);
       if(response.data[0])
       {
          setLastLora(response.data);
       }
       else
       {
        setLastLora([{timestamp: "" , value : 0}]);
       }
    });
  }, []);

  return (
  
          <div sx={{ margin: "10px" }}>
                    
              <Grid container
                    spacing={0}
                    marginTop={1}
                    rowSpacing={1}
                    paddingBottom={2}
                    marginLeft={1}
                    marginRight={1}
                    >

                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <GraficoBarra data={rainLastHour} title={"Chuva na última hora"} interval={5} date={"HH:mm"}/>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <GraficoBarra data={rainLastDay} title={"Chuva no último dia"} interval={250} date={"HH:mm"}/>
                  </Grid>
                  <Grid item lg={4} md={4} sm={12} xs={12}>
                    <GraficoBarra data={rainLastWeek} title={"Chuva na última semana"} interval={900} date={"DD/MM"}/>
                  </Grid>
                  <Grid item lg={3} md={4} sm={12} xs={12}>
                    <Card data={currentRain} title={"Chuva registrada no último minuto"} unit={" mm"}/>
                  </Grid>
                  <Grid item lg={3} md={4} sm={12} xs={12}>
                    <Card data={rainAmountLastHour} title={"Chuva registrada na última hora"} unit={" mm"}/>
                  </Grid>
                  <Grid item lg={3} md={4} sm={12} xs={12}>
                    <Card data={rainAmountLastDay} title={"Chuva registrada no último dia"} unit={" mm"}/>
                  </Grid>
                  <Grid item lg={3} md={4} sm={12} xs={12}>
                    <CardLora data={lastLora} title={"Último envio LoRaWAN"}/>
                  </Grid>
                  <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Ficha data={props.ficha} title={"Chuva na última semana"} interval={700} date={"HH:mm"}/>
                  </Grid>
              </Grid>
          </div>

  );
}

export default Pluv;