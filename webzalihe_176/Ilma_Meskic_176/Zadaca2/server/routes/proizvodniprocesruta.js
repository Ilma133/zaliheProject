import express from 'express';
import { addProizvodniProces, deleteProzivodniProces, editProizvodniProces, getProizvodniProces, getProizvodniProcesi } from '../controller/proizvodniprocescontroller.js';


const router=express.Router();

router.post('/addproizvodniproces', addProizvodniProces);
router.get('/allproizvodniprocesi',getProizvodniProcesi);
router.get('/:id', getProizvodniProces)
router.put('/:id', editProizvodniProces)
router.delete('/:id', deleteProzivodniProces)


export default router;