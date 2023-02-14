import express from 'express';
import { addSirovina, editSirovina, getSirovina, getSirovine, deleteSirovina } from "../controller/sirovinacontroller.js";


const router=express.Router();

router.post('/addsirovina', addSirovina);
router.get('/allsirovine',getSirovine);
router.get('/:id', getSirovina)
router.put('/:id', editSirovina)
router.delete('/:id', deleteSirovina)


export default router;