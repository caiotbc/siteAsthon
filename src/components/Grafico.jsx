import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import {Typography, Paper , Box} from '@mui/material';
import moment from "moment";
  
const Grafico = (props) =>
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
            <ResponsiveContainer width={"90%"}  height={200}>
            <AreaChart
                
                data={props.data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0
                }}
                >
                <CartesianGrid  opacity={0.1}  />
                <XAxis dataKey="name" tickFormatter={formatXAxis} interval={props.interval}/>
                <YAxis domain={[0, 2.4]} />
                <Tooltip labelFormatter={formatXAxisLabel} />
                <Area type="monotone" dataKey="nivel" stroke="#5794f2" fill="#5794f2" fillOpacity={0.7} strokeOpacity={1}/>
                <ReferenceLine y={2.3} stroke="red" label="Transbordamento" />
                <ReferenceLine y={1.9} stroke="yellow" label="Alerta" />

                {//}<Line type="monotone" dataKey="nivel" stroke="#062ee8" dot={{r:0}} strokeWidth={3} strokeOpacity={1}/>
                }
            </AreaChart>
            </ResponsiveContainer>
            </Paper>
        </Box>
    );
}

export default Grafico;