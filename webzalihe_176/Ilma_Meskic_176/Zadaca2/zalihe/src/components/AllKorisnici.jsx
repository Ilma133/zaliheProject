import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableRow , styled, Button} from "@mui/material";
import { getKorisnici, deleteKorisnik } from "../service/korisnikapi";
import { Link } from "react-router-dom";



const StyledTable=styled(Table)`
width:90%;
margin:50px auto 0 auto ;
background:white;
`;

const Thead= styled(TableRow)`
background: #FAC783;
`;




const AllKorisnici=()=>{

    const[korisnici, setKorisnici]=useState([]);

    useEffect(()=>{
        getAllKorisnici();

    }, []);

    const getAllKorisnici=async ()=>{
        let response = await getKorisnici();
        setKorisnici(response.data);
    }

    const deleteKorisnikDetails=async(id)=>{
        await deleteKorisnik(id);
        getAllKorisnici();
    }

    return(
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>ID</TableCell>
                    <TableCell>KorisnickoIme</TableCell>
                    <TableCell>Sifra</TableCell>
                    <TableCell>Uloga</TableCell>
                    <TableCell>ZaposlenikID</TableCell>
                    <TableCell>Akcije/Opcije</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    korisnici.map(korisnik=>(
                        <TableRow key={korisnik._id}>
                            <TableCell>{korisnik._id}</TableCell>
                            <TableCell>{korisnik.KorisnickoIme}</TableCell>
                            <TableCell>{korisnik.Sifra}</TableCell>
                            <TableCell>{korisnik.Uloga}</TableCell>
                            <TableCell>{korisnik.ZaposlenikID}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/editkorisnik/${korisnik._id}`}>Edit</Button>
                                <Button variant="contained" onClick={()=>deleteKorisnikDetails(korisnik._id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }

            </TableBody>
        </StyledTable>
        
    )
}

export default AllKorisnici;