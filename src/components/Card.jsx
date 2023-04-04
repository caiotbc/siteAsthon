import {Typography, Paper , Box} from '@mui/material';

const Card = (props) =>
{
    let title;
    let value;
    let time;
    let unit;
    if(props.data[0])
    {
        unit = props.unit;
        title = props.title;
        time = props.data[0].timestamp;
        if(time == "")
        {
            value = "Falha";
        }
        else
        {
            value = props.data[0].value;
            value = parseFloat(value);
            if(unit == " m")
            {
                value = value.toFixed(3);
            }
            else if(unit == " mm")
            {
                value = value.toFixed(2);
            }
            value = value + unit;
        }
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
                //background: "linear-gradient(120deg, rgb(95, 129, 225), rgb(65, 147, 220))"
                background: "#0E06AB"
                }}>
                <div style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "63.2989px",
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

export default Card;