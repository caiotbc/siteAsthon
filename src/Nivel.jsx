import { Grid} from '@mui/material';
import React, { useState , useEffect } from 'react';
import Grafico from "./components/Grafico"
import Card from "./components/Card"
import CardLora from "./components/CardLora"
import Ficha from "./components/Ficha"


  
const Nivel = (props) =>
{
    const socket = props.socket;
    useEffect(() => {
        socket.emit('dataReq', "marlin_1");
      },[socket]);

      useEffect(() => {
        socket.on('levelLastHour', (message) => {
          //console.log(message);
          setlevelLastHour(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('levelLastDay', (message) => {
          //console.log(message);
          setlevelLastDay(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('levelLastWeek', (message) => {
          //console.log(message);
          setlevelLastWeek(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
     
      useEffect(() => {
        socket.on('maxLevelDay', (message) => {
          //console.log(message);
          setMaxLevelDay(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('maxLevelWeek', (message) => {
          //console.log(message);
          setMaxLevelWeek(message);
        });
    
        return () => {
          socket.off('connect');
          socket.off('disconnect');
        };
      });
      useEffect(() => {
        socket.on('currentLevel', (message) => {
          //console.log(message);
          setCurrentLevel(message);
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


    const [levelLastHour, setlevelLastHour] = useState([]);
    const [levelLastDay, setlevelLastDay] = useState([]);
    const [levelLastWeek, setlevelLastWeek] = useState([]);
    const [maxLevelDay, setMaxLevelDay] = useState([]);
    const [maxLevelWeek, setMaxLevelWeek] = useState([]);
    const [currentLevel, setCurrentLevel] = useState([]);
    const [lastLora, setLastLora] = useState([]);

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
                      <Card data={currentLevel} title={"Nível do rio no último minuto"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={maxLevelDay} title={"Nível máximo registrado no dia"}/>
                    </Grid>
                    <Grid item lg={3} md={4} sm={12} xs={12}>
                      <Card data={maxLevelWeek} title={"Nível máximo registrado na semana"}/>
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