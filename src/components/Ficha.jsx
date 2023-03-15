import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material';

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
              <TableCell>{props.data[0]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Especificação</TableCell>
              <TableCell>{props.data[1]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Data de instalação</TableCell>
              <TableCell>{props.data[2]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Local de instalação</TableCell>
              <TableCell>{props.data[3]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sensores instalados</TableCell>
              <TableCell>{props.data[4]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Precisão</TableCell>
              <TableCell>{props.data[5]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Transmissão</TableCell>
              <TableCell>{props.data[6]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Intervalo</TableCell>
              <TableCell>{props.data[7]}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    );
}

export default Ficha;