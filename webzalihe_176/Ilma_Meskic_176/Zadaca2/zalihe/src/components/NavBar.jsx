import{AppBar, Toolbar, styled} from '@mui/material'

import { NavLink } from 'react-router-dom';

const Header =styled(AppBar) `
   background: #FF7000
`;

const Tabs=styled(NavLink)`
  font-size: 20 px;
  margin-right: 20px;
  color:inherit;
  text-decoration:none;
`;

const NavBar=()=>{
    return(
        <Header position='static'> 
            <Toolbar>
              <Tabs to='/'>STOCK</Tabs>
              <Tabs to='alldobavljaci'>Dobavljaci</Tabs>
              <Tabs to='adddobavljac'>Add dobavljac</Tabs>
              <Tabs to='allzaposlenici'>Zaposlenici</Tabs>
              <Tabs to='addzaposlenik'>Add zaposlenik</Tabs>
              <Tabs to='allsirovine'>Sirovine</Tabs>
              <Tabs to='addsirovina'>Add sirovine</Tabs>
              <Tabs to='allkorisnici'>Korisnici</Tabs>
              <Tabs to='addkorisnik'>Add korisnici</Tabs>
              <Tabs to='allproizvodniprocesi'>PPS</Tabs>
              <Tabs to='addproizvodniproces'>Add PPS</Tabs>
              <Tabs to='allprocesi'>Procesi</Tabs>
              <Tabs to='addproces'>Add Proces</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;