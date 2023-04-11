import { Grid} from '@mui/material';
import React, { useState , useEffect } from 'react';
import Grafico from "./components/Grafico"
import Card from "./components/Card"
import CardLora from "./components/CardLora"
import Ficha from "./components/Ficha"
import axios from "axios";
import config from "./config.json";
let baseURL = config.baseURL;

const Nivel = (props) =>
{
  const [levelLastHour, setlevelLastHour] = useState([]);
  const [levelLastDay, setlevelLastDay] = useState([]);
  const [levelLastWeek, setlevelLastWeek] = useState([]);
  const [maxLevelDay, setMaxLevelDay] = useState([]);
  const [maxLevelWeek, setMaxLevelWeek] = useState([]);
  const [currentLevel, setCurrentLevel] = useState([]);
  const [lastLora, setLastLora] = useState([]);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "levelLastHour", id: "260d941a" }}).then((response) => 
    {
      //console.log(response.data);
      setlevelLastHour(response.data);
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "levelLastDay", id: "260d941a" }}).then((response) => 
    {
       //console.log(response.data);
       setlevelLastDay(response.data);
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "levelLastWeek", id: "260d941a" }}).then((response) => 
    {
       //console.log(response.data);
       setlevelLastWeek(response.data);
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "maxLevelDay", id: "260d941a" }}).then((response) => 
    {
       console.log(response.data);
       if(response.data[0])
       {
          setMaxLevelDay(response.data);
       }
       else
       {
        console.log("BANANA");
        setMaxLevelDay([{timestamp: "nan" , value : 0}]);
       }
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "maxLevelWeek", id: "260d941a" }}).then((response) => 
    {
       //console.log(response.data);
       if(response.data[0])
       {
          setMaxLevelWeek(response.data);
       }
       else
       {
        setMaxLevelWeek([{timestamp: "nan" , value : 0}]);
       }
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "currentLevel", id: "260d941a" }}).then((response) => 
    {
       //console.log(response.data);
       if(response.data[0])
       {
          setCurrentLevel(response.data);
       }
       else
       {
        setCurrentLevel([{timestamp: "" , value : 0}]);
       }
    });
  }, []);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "currentLevel", id: "260d941a" }}).then((response) => 
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
                      <Grafico data={levelLastHour} title={"Nível do rio na última hora"} interval={5} date={"HH:mm"}/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Grafico data={levelLastDay} title={"Nível do rio no último dia"} interval={150} date={"HH:mm"}/>
                    </Grid>
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                      <Grafico data={levelLastWeek} title={"Nível do rio na última semana"} interval={700} date={"DD/MM"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={currentLevel} title={"Nível do rio no último minuto"} unit={" m"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={maxLevelDay} title={"Nível máximo registrado no dia"} unit={" m"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={maxLevelWeek} title={"Nível máximo registrado na semana"} unit={" m"}/>
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

export default Nivel;