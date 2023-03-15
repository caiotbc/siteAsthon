import { Button, Grid, Typography} from '@mui/material';
import React, { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { MapContainer, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import { divIcon } from "leaflet";
import 'leaflet/dist/leaflet.css'
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import { renderToStaticMarkup } from "react-dom/server";
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
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
                      marginLeft={2}
                      width="98%"
                      >

                    <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width: '100vw' , height: '100vh'}}>
                        <TileLayer
                        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                        url="https://api.maptiler.com/maps/streets-v2-dark/{z}/{x}/{y}.png?key=UfLEum3i1PbpAyvaKvNS"
                        />
                        <CircleMarker center={position} icon={customMarkerIcon}>
                        <Popup>
                             <Typography> <b>Estação Rodoviária</b></Typography>
                             <Link to="/Nivel" style={{ textDecoration: 'none' }}><Button variant="contained">Acessar os Dados</Button></Link>
                             <Typography>Status : </Typography>
                            <Typography>Alerta : </Typography>
                        </Popup>
                        </CircleMarker>

                        <CircleMarker center={position2}>
                        <Popup>
                             <Typography> <b>Estação Barduco</b></Typography>
                             <Link to="/Pluv" style={{ textDecoration: 'none' }}><Button variant="contained">Acessar os Dados</Button></Link>
                             <Typography>Status : </Typography>
                            <Typography>Alerta : </Typography>
                        </Popup>
                        </CircleMarker>
                    </MapContainer>
                </Grid>
            </div>

    );
}

export default Mapa;