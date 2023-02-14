import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow , styled, Button} from "@mui/material";
import { getSirovine, deleteSirovina } from "../service/sirovinaapi";
import { Link } from "react-router-dom";



const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto ;
background:white;
`;

const Thead= styled(TableRow)`
background: #FAC783;
`;




const AllSirovine=()=>{

    const[sirovine, setSirovine]=useState([]);

    useEffect(()=>{
        getAllSirovine();

    }, []);

    const getAllSirovine=async ()=>{
        let response = await getSirovine();
        setSirovine(response.data);
    }

    const deleteSirovinaDetails=async(id)=>{
        await deleteSirovina(id);
        getAllSirovine();
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Naziv</TableCell>
                    <TableCell>Kolicina</TableCell>
                    <TableCell>MinKolicina</TableCell>
                    <TableCell>Cijena</TableCell>
                    <TableCell>JedinicaMjere</TableCell>
                    <TableCell>DaLiSeKoristi</TableCell>
                    <TableCell>DobavljacID</TableCell>
                    <TableCell>Akcije/Opcije</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    sirovine.map(sirovina=>(
                        <TableRow key={sirovina._id}>
                            <TableCell>{sirovina._id}</TableCell>
                            <TableCell>{sirovina.Naziv}</TableCell>
                            <TableCell>{sirovina.Kolicina}</TableCell>
                            <TableCell>{sirovina.MinKolicina}</TableCell>
                            <TableCell>{sirovina.Cijena}</TableCell>
                            <TableCell>{sirovina.JedinicaMjere}</TableCell>
                            <TableCell>{sirovina.DaLiSeKoristi}</TableCell>
                            <TableCell>{sirovina.DobavljacID}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editsirovina/${sirovina._id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>deleteSirovinaDetails(sirovina._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </StyledTable>
        
    )
}

export default AllSirovine;