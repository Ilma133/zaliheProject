import {useState, useEffect} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { editDobavljac, getDobavljac } from '../service/api';
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
Naziv:'',
JIB:'',
PDV:'',
Telefon:'',
KontaktOsoba:'',
Email:'',
DatumPocetka:'',
DatumZavrsetka:''
}



const EditDobavljac=()=>{

    const[dobavljac, setDobavljac]=useState(defaultValue);

    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadDobavljacDetails();

    },[]);

    const loadDobavljacDetails=async ()=>{
        const response=await getDobavljac(id);
        setDobavljac(response.data);
    }


 const onValueChange=(e)=>{
    setDobavljac({...dobavljac,[e.target.name]:e.target.value });
 }

 const editDobavljacDetails=async ()=>{
    await editDobavljac(dobavljac, id);
    navigate('/alldobavljaci');

 }

    return(
        <Container>
            <Typography variant="h4">Edit Dobavljac</Typography>
            <FormControl>
                <InputLabel>Naziv</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Naziv" value={dobavljac.Naziv}/>
            </FormControl>
            <FormControl>
                <InputLabel>JIB</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="JIB" value={dobavljac.JIB}/>
            </FormControl>
            <FormControl>
                <InputLabel>PDV</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="PDV" value={dobavljac.PDV}/>
            </FormControl>
            <FormControl>
                <InputLabel>Telefon</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Telefon" value={dobavljac.Telefon}/>
            </FormControl>
            <FormControl>
                <InputLabel>Kontakt Osoba</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="KontaktOsoba" value={dobavljac.KontaktOsoba}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Email" value={dobavljac.Email}/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumPocetka</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumPocetka" value={dobavljac.DatumPocetka}/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumZavrsetka</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumZavrsetka" value={dobavljac.DatumZavrsetka}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editDobavljacDetails()}>EDIT</Button>
            </FormControl>
        </Container>
    )

}

export default EditDobavljac;