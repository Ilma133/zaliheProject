import {useState, useEffect} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { editProizvodniProces, getProizvodniProces } from '../service/proizvodniprocesapi';
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
    Kolicina:'',
    MinKolicina:'',
    Cijena:'',
    JedinicaMjere:'',
    DaLiSeKoristi:'',
    DobavljacID:''
    }



const EditProizvodniProces=()=>{

    const[proizvodniproces, setProizvodniProces]=useState(defaultValue);

    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadProizvodniProcesDetails();

    },[]);

    const loadProizvodniProcesDetails=async ()=>{
        const response=await getProizvodniProces(id);
        setProizvodniProces(response.data);
    }


 const onValueChange=(e)=>{
    setProizvodniProces({...proizvodniproces,[e.target.name]:e.target.value });
 }

 const editProizvodniProcesDetails=async ()=>{
    await editProizvodniProces(proizvodniproces, id);
    navigate('/allproizvodniprocesi');

 }

    return(
        <Container>
            <Typography variant="h4">Edit Proizvodni Proces</Typography>
            <FormControl>
                <InputLabel>Kolicina</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Kolicina" value={proizvodniproces.Kolicina}/>
            </FormControl>
            <FormControl>
                <InputLabel>SirovinaID</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="SirovinaID" value={proizvodniproces.SirovinaID}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editProizvodniProcesDetails()}>EDIT</Button>
            </FormControl>
        </Container>
    )

}

export default EditProizvodniProces;