//import logo from './logo.svg';
import './App.css';


//components
import NavBar  from './components/NavBar';
import Code from './components/Code';
import AllDobavljaci from './components/AllDobavljaci';
import AddDobavljac from './components/AddDobavljac';
import EditDobavljac from './components/EditDobavljac';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllZaposlenici from './components/AllZaposlenici';
import AddZaposlenik from './components/AddZaposlenik';
import EditZaposlenik from './components/EditZaposlenik';
import AllSirovine from './components/AllSirovine';
import AddSirovina from './components/AddSirovina';
import EditSirovina from './components/EditSirovina';
import AllKorisnici from './components/AllKorisnici';
import AddKorisnik from './components/AddKorisnik';
import EditKorisnik from './components/EditKorisnik';
import AllProizvodniProcesi from './components/AllProizvodniProcesi';
import AddProzivodniProces from './components/AddProizvodniProces';
import EditProizvodniProces from './components/EdtiProizvodniProces';
import AllProcesi from './components/AllProcesi';
import AddProces from './components/AddProces';
import EditProces from './components/EditProces';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path='/'  element={<Code/>} /> 
      <Route path='/alldobavljaci' element={<AllDobavljaci/>} />
      <Route path='/adddobavljac' element={<AddDobavljac/>} />
      <Route path='/editdobavljac/:id' element={<EditDobavljac/>} />
      <Route path='/allzaposlenici' element={<AllZaposlenici/>} />
      <Route path='/addzaposlenik' element={<AddZaposlenik/>} />
      <Route path='/editzaposlenik/:id' element={<EditZaposlenik/>} />
      <Route path='/allsirovine' element={<AllSirovine/>} />
      <Route path='/addsirovina' element={<AddSirovina/>} />
      <Route path='/editsirovina/:id' element={<EditSirovina/>} />
      <Route path='/allkorisnici' element={<AllKorisnici/>} />
      <Route path='/addkorisnik' element={<AddKorisnik/>} />
      <Route path='/editkorisnik/:id' element={<EditKorisnik/>} />
      <Route path='/allproizvodniprocesi' element={<AllProizvodniProcesi/>} />
      <Route path='/addproizvodniproces' element={<AddProzivodniProces/>} />
      <Route path='/editproizvodniproces/:id' element={<EditProizvodniProces/>} />
      <Route path='/allprocesi' element={<AllProcesi/>} />
      <Route path='/addproces' element={<AddProces/>} />
      <Route path='/editproces/:id' element={<EditProces/>} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
