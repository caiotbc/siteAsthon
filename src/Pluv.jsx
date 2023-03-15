import {Grid} from '@mui/material';
import React, { useState , useEffect } from 'react';
import GraficoBarra from "./components/GraficoBarra"
import Card from "./components/Card"
import CardLora from "./components/CardLora"
import Ficha from "./components/Ficha"

  
const Pluv = (props) =>
{
    const socket = props.socket;
    useEffect(() => {
        socket.emit('dataReq', "marlin_3");
      },[socket]);

      useEffect(() => {
        socket.on('rainLastHour', (message) => {
          //console.log(message);
          setRainLastHour(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('rainLastWeek', (message) => {
          //console.log(message);
          setRainLastWeek(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('rainLastDay', (message) => {
          //console.log(message);
          setRainLastDay(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      
      useEffect(() => {
        socket.on('lastLora', (message) => {
          //console.log(message);
          setLastLora(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('currentRain', (message) => {
          //console.log(message);
          setCurrentRain(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('rainAmountLastDay', (message) => {
          //console.log(message);
          setRainAmountLastDay(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('rainAmountLastHour', (message) => {
          //console.log(message);
          setRainAmountLastHour(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      

    const [rainLastHour, setRainLastHour] = useState([]);
    const [rainLastWeek, setRainLastWeek] = useState([]);
    const [rainLastDay, setRainLastDay] = useState([]);
    const [lastLora, setLastLora] = useState([]);
    const [rainAmountLastHour, setRainAmountLastHour] = useState([]);
    const [rainAmountLastDay, setRainAmountLastDay] = useState([]);
    const [currentRain, setCurrentRain] = useState([]);

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
                      <GraficoBarra data={rainLastWeek} title={"Chuva na última semana"} interval={700} date={"DD/MM"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={currentRain} title={"Chuva registrada no último minuto"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={rainAmountLastHour} title={"Chuva registrada na última hora"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={rainAmountLastDay} title={"Chuva registrada no último dia"}/>
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