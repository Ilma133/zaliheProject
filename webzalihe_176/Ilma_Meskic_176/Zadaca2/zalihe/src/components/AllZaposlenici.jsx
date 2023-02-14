import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow , styled, Button} from "@mui/material";
import { getZaposlenici, deleteZaposlenik } from "../service/zaposlenikapi";
import { Link } from "react-router-dom";

const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto ;
background:white;
`;

const Thead= styled(TableRow)`
background: #FAC783;
`;




const AllZaposlenici=()=>{

    const[zaposlenici, setZaposlenici]=useState([]);

    useEffect(()=>{
        getAllZaposlenici();

    }, []);

    const getAllZaposlenici=async ()=>{
        let response = await getZaposlenici();
        setZaposlenici(response.data);
    }

    const deleteZaposlenikDetails=async(id)=>{
        await deleteZaposlenik(id);
        getAllZaposlenici();
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>Ime</TableCell>
                    <TableCell>Prezime</TableCell>
                    <TableCell>BrojTelefona</TableCell>
                    <TableCell>Adresa</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>DatumZaposlenja</TableCell>
                    <TableCell>DatumOtkaza</TableCell>
                    <TableCell>Akcije/Opcije</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    zaposlenici.map(zaposlenik=>(
                        <TableRow key={zaposlenik._id}>
                            <TableCell>{zaposlenik._id}</TableCell>
                            <TableCell>{zaposlenik.Ime}</TableCell>
                            <TableCell>{zaposlenik.Prezime}</TableCell>
                            <TableCell>{zaposlenik.BrojTelefona}</TableCell>
                            <TableCell>{zaposlenik.Adresa}</TableCell>
                            <TableCell>{zaposlenik.Email}</TableCell>
                            <TableCell>{zaposlenik.DatumZaposlenja}</TableCell>
                            <TableCell>{zaposlenik.DatumOtkaza}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editzaposlenik/${zaposlenik._id}`}>Edit</Button>
                                {/*<Button variant="contained" onClick={()=>deleteZaposlenikDetails(zaposlenik._id)}>Delete</Button>*/}
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </StyledTable>
        
    )
}

export default AllZaposlenici;