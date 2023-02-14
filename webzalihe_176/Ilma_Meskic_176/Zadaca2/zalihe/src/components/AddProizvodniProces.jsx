import { useState } from "react";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { addProizvodniProces } from "../service/proizvodniprocesapi";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 45%;
  margin: 5% auto 0 auto;
  background:white;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  Kolicina: "",
  SirovinaID: "",
};

const AddProzivodniProces = () => {
  const [proizvodniproces, setProizvodniProces] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setProizvodniProces({ ...proizvodniproces, [e.target.name]: e.target.value });
  };

  const addProizvodniProcesDetails = async () => {
    await addProizvodniProces(proizvodniproces);
    navigate("/allproizvodniprocesi");
  };

  return (
    <Container>
      <Typography variant="h4">Add Proizvodni Proces</Typography>
      <FormControl>
        <InputLabel>Kolicina</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Kolicina" />
      </FormControl>
      <FormControl>
        <InputLabel>SirovinaID</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="SirovinaID" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addProizvodniProcesDetails()}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddProzivodniProces;