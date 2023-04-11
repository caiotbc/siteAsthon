import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import './App.css';
import Mapa from './Mapa';
import Nivel from './Nivel';
import Menubar from './components/Menubar';
import Pluv from './Pluv';

let rodoviaria = ["Estação Rodoviária" , "Monitoramento Fluviométrico" , "11/03/2023" , "Ponte da Rodoviária" , "GlobalWater WL500" , "0,1 cm" , "LoRaWAN" , "90 segundos"];
let barduco = ["Estação Barduco" , "Monitoramento Pluviométrico e Fluviométrico" , "11/03/2023" , "Auto Elétrica Barduco" , "YOUNG 52203" , "0,1 mm" , "LoRaWAN" , "90 segundos"];

function App() {
 const theme = createTheme({
    palette : 
    {
        mode : "dark",
        tomato: '#FF6347',
        textArea:
        {
          primary: '#0E06AB',
          secondary: '#FFFFFF',
        },
        background:
        {
          default: '#111111'
        }
    }
})
  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
      <Menubar position="fixed"></Menubar>
      <div style={{
      padding : "10px",
      margin: "20px"
    }}>
        <div className="App">
                <div className="content">
                  <Routes>
                    <Route exact path="Mapa" element={<Mapa></Mapa>} ></Route>
                    <Route exact path="/" element={<Mapa></Mapa>} ></Route>
                    <Route exact path="/Nivel" element={<Nivel ficha={rodoviaria}></Nivel>} ></Route>
                    <Route exact path="/Menu" element={<Menubar ></Menubar>} ></Route>
                    <Route exact path="/Pluv" element={<Pluv ficha={barduco}></Pluv>} ></Route>
                  </Routes>
                </div>
        </div>
        </div>
      </Router>
    </ThemeProvider>

  );
}

export default App;
