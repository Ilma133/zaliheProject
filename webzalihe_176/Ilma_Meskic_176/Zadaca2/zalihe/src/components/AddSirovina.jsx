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
import { addSirovina } from "../service/sirovinaapi";
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
  Kolicina: "",
  MinKolicina: "",
  Cijena: "",
  JedinicaMjere: "",
  DaLiSeKoristi: "",
  DobavljacID: "",
};

const AddSirovina = () => {
  const [sirovina, setSirovina] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setSirovina({ ...sirovina, [e.target.name]: e.target.value });
  };

  const addSirovinaDetails = async () => {
    await addSirovina(sirovina);
    navigate("/allsirovine");
  };

  return (
    <Container>
      <Typography variant="h4">Add Sirovina</Typography>
      <FormControl>
        <InputLabel>Naziv</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Naziv" />
      </FormControl>
      <FormControl>
        <InputLabel>Kolicina</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Kolicina" />
      </FormControl>
      <FormControl>
        <InputLabel>MinKolicina</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="MinKolicina" />
      </FormControl>
      <FormControl>
        <InputLabel>Cijena</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Cijena" />
      </FormControl>
      <FormControl>
        <InputLabel>JedinicaMjere</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="JedinicaMjere" />
      </FormControl>
      <FormControl>
        <InputLabel>DaLiSeKoristi</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="DaLiSeKoristi" />
      </FormControl>
      <FormControl>
        <InputLabel>DobavljacID</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="DobavljacID" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addSirovinaDetails()}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddSirovina;
