import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow , styled, Button} from "@mui/material";
import { getProcesi, deleteProces } from "../service/procesapi";
import { Link } from "react-router-dom";



const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto ;
background:white;
`;

const Thead= styled(TableRow)`
background: #FAC783;
`;




const AllProcesi=()=>{

    const[procesi, setProcesi]=useState([]);

    useEffect(()=>{
        getAllProcesi();

    }, []);

    const getAllProcesi=async ()=>{
        let response = await getProcesi();
        setProcesi(response.data);
    }

    const deleteProcesDetails=async(id)=>{
        await deleteProces(id);
        getAllProcesi();
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Naziv</TableCell>
                    <TableCell>DatumPocetka</TableCell>
                    <TableCell>DatumZavrsetka</TableCell>
                    <TableCell>Cijena</TableCell>
                    <TableCell>Akcije/Opcije</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    procesi.map(proces=>(
                        <TableRow key={proces._id}>
                            <TableCell>{proces._id}</TableCell>
                            <TableCell>{proces.Naziv}</TableCell>
                            <TableCell>{proces.DatumPocetka}</TableCell>
                            <TableCell>{proces.DatumZavrsetka}</TableCell>
                            <TableCell>{proces.Cijena}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editproces/${proces._id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>deleteProcesDetails(proces._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </StyledTable>
        
    )
}

export default AllProcesi;