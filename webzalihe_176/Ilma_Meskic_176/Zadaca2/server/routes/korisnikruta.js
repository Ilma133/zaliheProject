import express from 'express';
import { addKorisnik, deleteKorisnik, editKorisnik, getKorisnici, getKorisnik } from '../controller/korisnikcontroller.js';
const router=express.Router();

router.post('/addkorisnik', addKorisnik);
router.get('/allkorisnici',getKorisnici);
router.get('/:id', getKorisnik)
router.put('/:id', editKorisnik)
router.delete('/:id', deleteKorisnik)


export default router;