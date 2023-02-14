import express from 'express';
import { addZaposlenik, deleteZaposlenik, editZaposlenik, getZaposlenici, getZaposlenik } from "../controller/zaposlenikcontroller.js";


const router=express.Router();

router.post('/addzaposlenik', addZaposlenik);
router.get('/allzaposlenici',getZaposlenici);
router.get('/:id', getZaposlenik)
router.put('/:id', editZaposlenik)
router.delete('/:id', deleteZaposlenik)


export default router;