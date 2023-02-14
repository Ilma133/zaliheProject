import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow , styled, Button} from "@mui/material";
import { getProizvodniProcesi, deleteProizvodniProces } from "../service/proizvodniprocesapi";
import { Link } from "react-router-dom";



const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto ;
background:white;
`;

const Thead= styled(TableRow)`
background: #FAC783;
`;




const AllProizvodniProcesi=()=>{

    const[proizvodniprocesi, setProizvodniProcesi]=useState([]);

    useEffect(()=>{
        getAllProizvodniProcesi();

    }, []);

    const getAllProizvodniProcesi=async ()=>{
        let response = await getProizvodniProcesi();
        setProizvodniProcesi(response.data);
    }

    const deleteProizvodniProcesDetails=async(id)=>{
        await deleteProizvodniProces(id);
        getAllProizvodniProcesi();
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Kolicina</TableCell>
                    <TableCell>SirovinaID</TableCell>
                    <TableCell>Akcije/Opcije</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    proizvodniprocesi.map(proizvodniproces=>(
                        <TableRow key={proizvodniproces._id}>
                            <TableCell>{proizvodniproces._id}</TableCell>
                            <TableCell>{proizvodniproces.Kolicina}</TableCell>
                            <TableCell>{proizvodniproces.SirovinaID}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editproizvodniproces/${proizvodniproces._id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>deleteProizvodniProcesDetails(proizvodniproces._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </StyledTable>
        
    )
}

export default AllProizvodniProcesi;