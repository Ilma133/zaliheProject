import {useState, useEffect} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { editKorisnik, getKorisnik } from '../service/korisnikapi';
import { useNavigate, useParams } from 'react-router-dom';



const Container=styled( FormGroup)`
width:45%;
margin:5% auto 0 auto;
background:white;
& > div{
    margin-top:20px;
}
`;

const defaultValue = {
    KorisnickoIme: "",
    Sifra: "",
    Uloga: "",
    ZaposlenikID: "",
  };



const EditKorisnik=()=>{

    const[korisnik, setKorisnik]=useState(defaultValue);

    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadKorisnikDetails();

    },[]);

    const loadKorisnikDetails=async ()=>{
        const response=await getKorisnik(id);
        setKorisnik(response.data);
    }


 const onValueChange=(e)=>{
    setKorisnik({...korisnik,[e.target.name]:e.target.value });
 }

 const editKorisnikDetails=async ()=>{
    await editKorisnik(korisnik, id);
    navigate('/allkorisnici');

 }

    return(
        <Container>
            <Typography variant="h4">Edit Korisnik</Typography>
            <FormControl>
                <InputLabel>KorisnickoIme</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="KorisnickoIme" value={korisnik.KorisnickoIme}/>
            </FormControl>
            <FormControl>
                <InputLabel>Sifra</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Sifra" value={korisnik.Sifra}/>
            </FormControl>
            <FormControl>
                <InputLabel>Uloga</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Uloga" value={korisnik.Uloga}/>
            </FormControl>
            <FormControl>
                <InputLabel>ZaposlenikID</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="ZaposlenikID" value={korisnik.ZaposlenikID}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editKorisnikDetails()}>EDIT</Button>
            </FormControl>
        </Container>
    )

}

export default EditKorisnik;