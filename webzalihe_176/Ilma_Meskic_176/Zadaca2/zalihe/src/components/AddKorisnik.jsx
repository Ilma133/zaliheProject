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
import { addKorisnik } from "../service/korisnikapi";
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
  KorisnickoIme: "",
  Sifra: "",
  Uloga: "",
  ZaposlenikID: "",
};

const AddKorisnik = () => {
  const [korisnik, setKorisnik] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setKorisnik({ ...korisnik, [e.target.name]: e.target.value });
  };

  const addKorisnikDetails = async () => {
    await addKorisnik(korisnik);
    navigate("/allkorisnici");
  };

  return (
    <Container>
      <Typography variant="h4">Add Korisnik</Typography>
      <FormControl>
        <InputLabel>KorisnickoIme</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="KorisnickoIme" />
      </FormControl>
      <FormControl>
        <InputLabel>Sifra</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Sifra" />
      </FormControl>
      <FormControl>
        <InputLabel>Uloga</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="Uloga" />
      </FormControl>
      <FormControl>
        <InputLabel>ZaposlenikID</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="ZaposlenikID" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addKorisnikDetails()}>
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddKorisnik;