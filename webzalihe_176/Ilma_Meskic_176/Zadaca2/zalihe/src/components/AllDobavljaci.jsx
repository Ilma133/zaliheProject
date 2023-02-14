import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Button,
} from "@mui/material";
import { getDobavljaci, deleteDobavljac } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  background:white;
`;

const Thead = styled(TableRow)`
  background: #FAC783;
`;

const AllDobavljaci = () => {
  const [dobavljaci, setDobavljaci] = useState([]);

  useEffect(() => {
    getAllDobavljaci();
  }, []);

  const getAllDobavljaci = async () => {
    let response = await getDobavljaci();
    setDobavljaci(response.data);
  };

  const deleteDobavljacDetails = async (id) => {
    await deleteDobavljac(id);
    getAllDobavljaci();
  };

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Naziv</TableCell>
          <TableCell>JIB</TableCell>
          <TableCell>PDV</TableCell>
          <TableCell>Telefon</TableCell>
          <TableCell>KontaktOsoba</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>DatumPocetka</TableCell>
          <TableCell>DatumZavrsetka</TableCell>
          <TableCell>Akcije/Opcije</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
        {dobavljaci.map((dobavljac) => (
          <TableRow key={dobavljac._id}>
            <TableCell>{dobavljac._id}</TableCell>
            <TableCell>{dobavljac.Naziv}</TableCell>
            <TableCell>{dobavljac.JIB}</TableCell>
            <TableCell>{dobavljac.PDV}</TableCell>
            <TableCell>{dobavljac.Telefon}</TableCell>
            <TableCell>{dobavljac.KontaktOsoba}</TableCell>
            <TableCell>{dobavljac.Email}</TableCell>
            <TableCell>{dobavljac.DatumPocetka}</TableCell>
            <TableCell>{dobavljac.DatumZavrsetka}</TableCell>
            <TableCell>
              <Button
                variant="contained" style={{ marginRight: 10 }} component={Link} to={`/editdobavljac/${dobavljac._id}`}> Edit</Button>
              {/*<Button variant="contained" onClick={() => deleteDobavljacDetails(dobavljac._id)}>Delete</Button>*/}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  )
}

export default AllDobavljaci;
