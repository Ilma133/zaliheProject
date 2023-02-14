import express from 'express';
import { addProces, deleteProces, editProces, getProces, getProcesi } from '../controller/procescontroller.js';



const router=express.Router();

router.post('/addproces', addProces);
router.get('/allprocesi',getProcesi);
router.get('/:id', getProces)
router.put('/:id', editProces)
router.delete('/:id', deleteProces)


export default router;