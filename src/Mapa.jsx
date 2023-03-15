import { Button, Grid, Typography} from '@mui/material';
import React, { useState , useEffect } from 'react';
import { MapContainer, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import { divIcon } from "leaflet";
import 'leaflet/dist/leaflet.css'
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import { renderToStaticMarkup } from "react-dom/server";
import {Link} from 'react-router-dom';

const iconMarkup = renderToStaticMarkup(
    <TapAndPlayIcon />
  );
  const customMarkerIcon = divIcon({
    html: iconMarkup,
    className: 'dummy'
  });



const Mapa = (props) =>
{
  const socket = props.socket;
  const [marlinStatus, setMarlinStatus] = useState({
    marlin_1:
    {
      color: "#00FF00"
    },
    marlin_3:
    {
      color : "#00FF00"
    }
  });

  

  useEffect(() => {
    socket.emit('mapaReq');
  },[socket]);

  useEffect(() => {
    socket.on('mapaRes', (message) => {
      console.log(message);
      setMarlinStatus(message);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  });

    const position = [-22.888933730019023, -48.438002527966525]
    const position2 = [-22.8770711974971, -48.44667233316467]
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
                        <CircleMarker center={position} icon={customMarkerIcon} color={marlinStatus.marlin_1.color} radius={20}>
                        <Popup>
                             <Typography> <b>Estação Rodoviária</b></Typography>
                             <Link to="/Nivel" style={{ textDecoration: 'none' }}><Button variant="contained">Acessar os Dados</Button></Link>
                             <Typography>Status : {marlinStatus.marlin_1.status} </Typography>
                             <Typography>Nivel : {marlinStatus.marlin_1.nivel} m</Typography>
                            <Typography color={marlinStatus.marlin_1.corAlerta} >{marlinStatus.marlin_1.alerta} </Typography>
                        </Popup>
                        </CircleMarker>

                        <CircleMarker center={position2} color={marlinStatus.marlin_3.color} radius={20}>
                        <Popup>
                             <Typography> <b>Estação Barduco</b></Typography>
                             <Link to="/Pluv" style={{ textDecoration: 'none' }}><Button variant="contained">Acessar os Dados</Button></Link>
                             <Typography>Status : {marlinStatus.marlin_1.status}</Typography>
                        </Popup>
                        </CircleMarker>
                    </MapContainer>
                </Grid>
            </div>

    );
}

export default Mapa;