import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {Grid, Typography, Paper , Box} from '@mui/material';
import moment from "moment";
  
const GraficoBarra = (props) =>
{

    function formatXAxis(tickItem) {
        // If using moment.js
        //console.log(tickItem);
      
        return moment(tickItem).format(props.date)
        }
      
        function formatXAxisLabel(tickItem) {
          // If using moment.js
          console.log(tickItem);
        
          return "Hora: " + moment(tickItem).format("DD/MM HH:mm")
          }


    return (
        <Box width="100%">
            <Paper style={{
            display : "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "5px",
            width: "97%",
        }}>
            <Typography>{props.title}</Typography>
            <ResponsiveContainer width={"90%"}  height={300}>
            <BarChart
                
                data={props.data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" tickFormatter={formatXAxis} interval={props.interval}/>
                <YAxis domain={[0, 3]} />
                <Tooltip labelFormatter={formatXAxisLabel} />
                <Bar type="monotone" dataKey="chuva" stroke="#F884d8" fill="#88C4d8"/>
            </BarChart>
            </ResponsiveContainer>
            </Paper>
        </Box>
    );
}

export default GraficoBarra;