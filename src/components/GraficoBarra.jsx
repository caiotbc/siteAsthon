import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {Typography, Paper , Box} from '@mui/material';
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
          //console.log(tickItem);
        
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
            <ResponsiveContainer width={"90%"}  height={200}>
            <BarChart
                
                data={props.data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid opacity={0.1} />
                <XAxis dataKey="timestamp" tickFormatter={formatXAxis} interval={props.interval}/>
                <YAxis domain={[0, 3]} />
                <Tooltip labelFormatter={formatXAxisLabel} />
                <Bar type="monotone" dataKey="value" stroke="#5794f2" fill="#5794f2" fillOpacity={0.7} strokeOpacity={1}/>
            </BarChart>
            </ResponsiveContainer>
            </Paper>
        </Box>
    );
}

export default GraficoBarra;