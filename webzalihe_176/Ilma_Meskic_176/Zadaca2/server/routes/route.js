import express from 'express';
import { addDobavljac, getDobavljaci, getDobavljac, editDobavljac, deleteDobavljac } from '../controller/dobavljaccontroller.js'

const router=express.Router();

router.post('/adddobavljac', addDobavljac);
router.get('/alldobavljaci',getDobavljaci);
router.get('/:id', getDobavljac)
router.put('/:id', editDobavljac)
router.delete('/:id', deleteDobavljac)


export default router;