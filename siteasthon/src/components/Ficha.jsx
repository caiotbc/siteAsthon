import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {Grid, Typography, Paper , Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';
import moment from "moment";

function formatXAxis(tickItem) {
  // If using moment.js
  //console.log(tickItem);

  return moment(tickItem).format('DD/MM HH:mm:ss')
  }

  
const Ficha = (props) =>
{
    return (
            <TableContainer component={Paper} style={ {
                display : "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "3px",

            width: "99%",}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ficha Técnica</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Estação Rodoviária</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Especificação</TableCell>
              <TableCell>Monitoramento Fluviométrico</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data de instalação</TableCell>
              <TableCell>11/03/2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Local de instalação</TableCell>
              <TableCell>Ponte da Rodoviária</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sensores instalados</TableCell>
              <TableCell>GlobalWater WL400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Precisão</TableCell>
              <TableCell>0,1 cm</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transmissão</TableCell>
              <TableCell>LoRaWAN</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Intervalo</TableCell>
              <TableCell>90 segundos</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default Ficha;