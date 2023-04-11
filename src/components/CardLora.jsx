import {Typography, Paper , Box} from '@mui/material';
import moment from "moment";

function formatXAxis(tickItem) {
  // If using moment.js
  //console.log(tickItem);
    if(tickItem>0)
    {
        let a = moment(tickItem);
        a = a.add(3, 'h');
        a = a.format('DD/MM HH:mm:ss');
        return a;
    }
    else
    {
        return " ";
    }
  }

  
const CardLora = (props) =>
{
    let title;
    let value;
    let time;
    if(props.data[0])
    {
        //console.log(props.data[0][0]);
        title = props.title;
        time = props.data[0][0];
        if(time == "")
        {
            value = "Falha";
        }
        else
        {
            value = formatXAxis(time);
        }
        //console.log(formatXAxis(time));
    }

    return (
            <Paper style={{
            display : "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "3px",
            height: "150px",
            width: "97%",
        }}>
            <Typography>{title}</Typography>
            <Box style={{
                display: "flex",
                width: "100%",
                height: "100%",
                color: "white",
                alignItems: "center",
                justifyItems: "center",
                borderRadius: "3px",
                //background: "linear-gradient(120deg, rgb(107, 188, 108), rgb(106, 177, 82))"
                background: "#0E06AB"

                }}>
                <div style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "39.3986px",
                    fontWeight: "500",
                    lineHeight: "1.2",
                    position: "relative",
                    zIndex: "1"
                }}>
                    {value}
                </div>
                
            </Box>
            </Paper>
    );
}

export default CardLora;