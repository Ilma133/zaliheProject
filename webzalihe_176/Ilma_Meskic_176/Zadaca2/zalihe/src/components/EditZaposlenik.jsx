import {useState, useEffect} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { editZaposlenik, getZaposlenik } from '../service/zaposlenikapi';
import { useNavigate, useParams } from 'react-router-dom';

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



const EditZaposlenik=()=>{

    const[zaposlenik, setZaposlenik]=useState(defaultValue);

    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadZaposlenikDetails();

    },[]);

    const loadZaposlenikDetails=async ()=>{
        const response=await getZaposlenik(id);
        setZaposlenik(response.data);
    }


 const onValueChange=(e)=>{
    setZaposlenik({...zaposlenik,[e.target.name]:e.target.value });
 }

 const editZaposlenikDetails=async ()=>{
    await editZaposlenik(zaposlenik, id);
    navigate('/allzaposlenici');

 }

    return(
        <Container>
            <Typography variant="h4">Edit Zaposlenik</Typography>
            <FormControl>
                <InputLabel>Ime</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Ime" value={zaposlenik.Ime}/>
            </FormControl>
            <FormControl>
                <InputLabel>Prezime</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Prezime" value={zaposlenik.Prezime}/>
            </FormControl>
            <FormControl>
                <InputLabel>BrojTelefona</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="BrojTelefona" value={zaposlenik.BrojTelefona}/>
            </FormControl>
            <FormControl>
                <InputLabel>Adresa</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Adresa" value={zaposlenik.Adresa}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Email" value={zaposlenik.Email}/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumZaposlenja</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumZaposlenja" value={zaposlenik.DatumZaposlenja}/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumOtkaza</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumOtkaza" value={zaposlenik.DatumOtkaza}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editZaposlenikDetails()}>EDIT</Button>
            </FormControl>
        </Container>
    )

}

export default EditZaposlenik;