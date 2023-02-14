import { request } from 'express';
import ProizvodniProces from '../schema/proizvodniprocesshema.js';


export const addProizvodniProces=async (request, response)=>{
    const proizvodniproces=request.body;

    const newProizvodniProces=new ProizvodniProces(proizvodniproces);

    try {
        await newProizvodniProces.save();
        response.status(201).json(newProizvodniProces);
    }
    catch(error){
        response.status(409).json({message:error.message});

    }
}

export const getProizvodniProcesi=async (request, response)=>{
    try{
         const proizvodniprocesi=await ProizvodniProces.find({});
         response.status(200).json(proizvodniprocesi);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const getProizvodniProces=async (request, response)=>{
    try{
         //const dobavljac=await Dobavljac.find({_id:request.params.id});
         const proizvodniproces=await ProizvodniProces.findById(request.params.id);
         response.status(200).json(proizvodniproces);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const editProizvodniProces=async(request, response)=>{
    let proizvodniproces=request.body;
    const editProizvodniProces=new ProizvodniProces(proizvodniproces);
    try{
        await ProizvodniProces.updateOne({_id:request.params.id}, editProizvodniProces);
        response.status(201).json(editProizvodniProces);

    }catch(error){
        response.status(409).json({message:error.message});
    }
}

export const deleteProzivodniProces=async(request, response)=>{
    let proizvodniproces=request.body;
    const deleteProizvodniProces=new ProizvodniProces(proizvodniproces);
    try{
        await ProizvodniProces.deleteOne({_id:request.params.id});
        response.status(200).json({message:'Proizvodni proces uspjesno obrisan'});
    }catch(error){
        response.status(409).json({message:error.message});
    }
}

