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
import { addProces } from "../service/procesapi";
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
  Naziv: "",
  DatumPocetka: "",
  DatumZavrsetka: "",
  Cijena: "",
};

const AddProces = () => {
  const [proces, setProces] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setProces({ ...proces, [e.target.name]: e.target.value });
  };

  const addProcesDetails = async () => {
    await addProces(proces);
    navigate("/allprocesi");
  };

  return (
    <Container>
      <Typography variant="h4">Add Proces</Typography>
      <FormControl>
        <InputLabel>Naziv</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Naziv" />
      </FormControl>
      <FormControl>
        <InputLabel>DatumPocetka</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="DatumPocetka" />
      </FormControl>
      <FormControl>
        <InputLabel>DatumZavrsetka</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="DatumZavrsetka" />
      </FormControl>
      <FormControl>
        <InputLabel>Cijena</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Cijena" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addProcesDetails()}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddProces;