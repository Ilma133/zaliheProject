import {useState} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { addZaposlenik } from '../service/zaposlenikapi';
import { useNavigate } from 'react-router-dom';


const Container=styled( FormGroup)`
width:45%;
margin:5% auto 0 auto;
background:white;
& > div{
    margin-top:20px;
}
`;

const defaultValue={
Ime:'',
Prezime:'',
BrojTelefona:'',
Adresa:'',
Email:'',
DatumZaposlenja:'',
DatumOtkaza:''
}



const AddZaposlenik=()=>{

    const[zaposlenik, setZaposlenik]=useState(defaultValue);

    const navigate=useNavigate();


 const onValueChange=(e)=>{
    setZaposlenik({...zaposlenik,[e.target.name]:e.target.value });
 }

 const addZaposlenikDetails=async ()=>{
    await addZaposlenik(zaposlenik);
    navigate('/allzaposlenici');

 }

    return(
        <Container>
            <Typography variant="h4">Add Zaposlenik</Typography>
            <FormControl>
                <InputLabel>Ime</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Ime"/>
            </FormControl>
            <FormControl>
                <InputLabel>Prezime</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Prezime"/>
            </FormControl>
            <FormControl>
                <InputLabel>BrojTelefona</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="BrojTelefona"/>
            </FormControl>
            <FormControl>
                <InputLabel>Adresa</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Adresa"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Email"/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumZaposlenja</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumZaposlenja"/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumOtkaza</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumOtkaza"/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>addZaposlenikDetails()}>Submit</Button>
            </FormControl>
        </Container>
    )

}

export default AddZaposlenik;