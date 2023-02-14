import {useState, useEffect} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { editProces, getProces } from '../service/procesapi';
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
    DatumPocetka:'',
    DatumZavrsetka:'',
    Cijena:''
    }



const EditProces=()=>{

    const[proces, setProces]=useState(defaultValue);

    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadProcesDetails();

    },[]);

    const loadProcesDetails=async ()=>{
        const response=await getProces(id);
        setProces(response.data);
    }


 const onValueChange=(e)=>{
    setProces({...proces,[e.target.name]:e.target.value });
 }

 const editProcesDetails=async ()=>{
    await editProces(proces, id);
    navigate('/allprocesi');

 }

    return(
        <Container>
            <Typography variant="h4">Edit Proces</Typography>
            <FormControl>
                <InputLabel>Naziv</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Naziv" value={proces.Naziv}/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumPocetka</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumPocetka" value={proces.DatumPocetka}/>
            </FormControl>
            <FormControl>
                <InputLabel>DatumZavrsetka</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumZavrsetka" value={proces.DatumZavrsetka}/>
            </FormControl>
            <FormControl>
                <InputLabel>Cijena</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Cijena" value={proces.Cijena}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editProcesDetails()}>EDIT</Button>
            </FormControl>
        </Container>
    )

}

export default EditProces;