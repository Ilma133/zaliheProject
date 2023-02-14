import {useState, useEffect} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { editSirovina, getSirovina } from '../service/sirovinaapi';
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



const EditSirovina=()=>{

    const[sirovina, setSirovina]=useState(defaultValue);

    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadSirovinaDetails();

    },[]);

    const loadSirovinaDetails=async ()=>{
        const response=await getSirovina(id);
        setSirovina(response.data);
    }


 const onValueChange=(e)=>{
    setSirovina({...sirovina,[e.target.name]:e.target.value });
 }

 const editSirovinaDetails=async ()=>{
    await editSirovina(sirovina, id);
    navigate('/allsirovine');

 }

    return(
        <Container>
            <Typography variant="h4">Edit Sirovina</Typography>
            <FormControl>
                <InputLabel>Naziv</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Naziv" value={sirovina.Naziv}/>
            </FormControl>
            <FormControl>
                <InputLabel>Kolicina</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="JIB" value={sirovina.Kolicina}/>
            </FormControl>
            <FormControl>
                <InputLabel>MinKolicina</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="PDV" value={sirovina.MinKolicina}/>
            </FormControl>
            <FormControl>
                <InputLabel>Cijena</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Telefon" value={sirovina.Cijena}/>
            </FormControl>
            <FormControl>
                <InputLabel>JedinicaMjere</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="KontaktOsoba" value={sirovina.JedinicaMjere}/>
            </FormControl>
            <FormControl>
                <InputLabel>DaLiSeKoristi</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="Email" value={sirovina.DaLiSeKoristi}/>
            </FormControl>
            <FormControl>
                <InputLabel>DobavljacID</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="DatumPocetka" value={sirovina.DobavljacID}/>
            </FormControl>
            <FormControl>
            <Button variant="contained" onClick={()=>editSirovinaDetails()}>EDIT</Button>
            </FormControl>
        </Container>
    )

}

export default EditSirovina;