import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from './Navbar';
import './App.css';
import Mapa from './Mapa';
import Nivel from './Nivel';
import socketIO from 'socket.io-client';
import Menubar from './components/Menubar';
import Pluv from './Pluv';

var connectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity", 
  "timeout" : 10000,                  
  "transports" : ["websocket"]
};

const socket = socketIO.connect('http://iot2.liteleds.com:8083', connectionOptions);

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
        <div className="App">
                <div className="content">
                  <Routes>
                    <Route exact path="Mapa" element={<Mapa socket={socket}></Mapa>} ></Route>
                    <Route exact path="/" element={<Mapa></Mapa>} ></Route>
                    <Route exact path="/Nivel" element={<Nivel socket={socket}></Nivel>} ></Route>
                    <Route exact path="/Menu" element={<Menubar socket={socket}></Menubar>} ></Route>
                    <Route exact path="/Pluv" element={<Pluv socket={socket}></Pluv>} ></Route>
                  </Routes>
                </div>
        </div>
      </Router>
      
    </ThemeProvider>
  );
}

export default App;
