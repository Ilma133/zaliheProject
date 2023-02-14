
import {useState} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { addDobavljac } from '../service/api';
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
Naziv:'',
JIB:'',
PDV:'',
Telefon:'',
KontaktOsoba:'',
Email:'',
DatumPocetka:'',
DatumZavrsetka:''
}



const AddDobavljac=()=>{

    const[dobavljac, setDobavljac]=useState(defaultValue);

    const navigate=useNavigate();


 const onValueChange=(e)=>{
    setDobavljac({...dobavljac,[e.target.name]:e.target.value });
 }

 const addDobavljacDetails=async ()=>{
    await addDobavljac(dobavljac);
    navigate('/alldobavljaci');

 }

    return(
        <Container>
            <Typography variant="h4">Add Dobavljac</Typography>
            <FormControl>
                <InputLabel>Naziv</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Naziv"/>
            </FormControl>
            <FormControl>
                <InputLabel>JIB</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="JIB"/>
            </FormControl>
            <FormControl>
                <InputLabel>PDV</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="PDV"/>
            </FormControl>
            <FormControl>
                <InputLabel>Telefon</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Telefon"/>
            </FormControl>
            <FormControl>
                <InputLabel>Kontakt Osoba</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="KontaktOsoba"/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Email"/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumPocetka</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumPocetka"/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumZavrsetka</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumZavrsetka"/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>addDobavljacDetails()}>Submit</Button>
            </FormControl>
        </Container>
    )

}

export default AddDobavljac;