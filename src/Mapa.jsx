import { Button, Grid, Typography} from '@mui/material';
import React, { useState , useEffect } from 'react';
import { MapContainer, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import { divIcon } from "leaflet";
import 'leaflet/dist/leaflet.css'
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import { renderToStaticMarkup } from "react-dom/server";
import {Link} from 'react-router-dom';
import axios from "axios";
import config from "./config.json";
let baseURL = config.baseURL;

const iconMarkup = renderToStaticMarkup(
    <TapAndPlayIcon />
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
    className: 'dummy'
  });

const Mapa = (props) =>
{
  const [statusMarlin1, setStatusMarlin1] = useState([]);
  const [statusMarlin2, setStatusMarlin2] = useState([]);

  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "currentLevel", id: "260d941c" }}).then((response) => 
    {
      let alerta = "Falha";
      let level = 0;
       //console.log(response.data);
       if(response.data[0])
       {
          level = response.data[0].value;
         
          if(level<1.9)
          {
            alerta = "Nível do rio baixo";
          } 
          else if(level>=1.9 && level <2.3)
          {
            alerta = "Nível do rio em alerta";
          }
          else if(level>=2.3)
          {
            alerta = "Rio transbordando";
          }
          level = level.toFixed(3);
          console.log("Operacional");
          setStatusMarlin2({
            color: "#00FF00",
            level: level ,
            status: "Operacional",
            alert: alerta
          })
       }
       else
       {
        setStatusMarlin2({
          color: "#FF0000",
          level: level ,
          status: "Falha",
          alert: "Falha"
        })
        //setLastLora([{timestamp: "" , value : 0}]);
       }
    });
  }, []);
  
  useEffect(() => 
  {
    axios.get(baseURL + 'getData', { crossDomain: true , params: { value: "currentLevel", id: "260d941a" }}).then((response) => 
    {
      let alerta = "Falha";
      let level = 0;
       //console.log(response.data);
       if(response.data[0])
       {
          level = response.data[0].value;
         
          if(level<1.9)
          {
            alerta = "Nível do rio baixo";
          } 
          else if(level>=1.9 && level <2.3)
          {
            alerta = "Nível do rio em alerta";
          }
          else if(level>=2.3)
          {
            alerta = "Rio transbordando";
          }
          level = level.toFixed(3);
          console.log("Operacional");
          setStatusMarlin1({
            color: "#00FF00",
            level: level ,
            status: "Operacional",
            alert: alerta
          })
       }
       else
       {
        setStatusMarlin1({
          color: "#FF0000",
          level: level ,
          status: "Falha",
          alert: "Falha"
        })
        //setLastLora([{timestamp: "" , value : 0}]);
       }
    });
  }, []);

    const position2 = [-22.888933730019023, -48.438002527966525]
    const position = [-22.8770711974971, -48.44667233316467]
    return (
   
            <div className="registro">
                <Grid container
                      spacing={2}
                      alignItems="left"
                      justifyContent="left" 
                      marginTop={1}
                      paddingBottom={2}

                      width="98%"
                      >

                    <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width: '100vw' , height: '100vh'}}>
                        <TileLayer
                        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                        url="https://api.maptiler.com/maps/streets-v2-dark/{z}/{x}/{y}.png?key=UfLEum3i1PbpAyvaKvNS"
                        />
                        <CircleMarker center={position} icon={customMarkerIcon} color={"#00FF00"} radius={20}>
                        <Popup>
                             <Typography> <b>Estação Rodoviária</b></Typography>
                             <Link to="/Nivel" style={{ textDecoration: 'none' }}><Button variant="contained">Acessar os Dados</Button></Link>
                             <Typography>Status : {statusMarlin1.status} </Typography>
                             <Typography>Nivel : {statusMarlin1.level} m</Typography>
                            <Typography color={statusMarlin1.color} >{statusMarlin1.alert} </Typography>
                        </Popup>
                        </CircleMarker>

                        <CircleMarker center={position2} color={"#00FF00"} radius={20}>
                        <Popup>
                             <Typography> <b>Estação Barduco</b></Typography>
                             <Link to="/Pluv" style={{ textDecoration: 'none' }}><Button variant="contained">Acessar os Dados</Button></Link>
                             <Typography>Status : {statusMarlin2.status}</Typography>
                        </Popup>
                        </CircleMarker>
                    </MapContainer>
                </Grid>
            </div>

    );
}

export default Mapa;