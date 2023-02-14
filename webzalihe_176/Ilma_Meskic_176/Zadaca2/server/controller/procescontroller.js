import { request } from 'express';
import Proces from '../schema/processhema.js';


export const addProces=async (request, response)=>{
    const proces=request.body;

    const newProces=new Proces(proces);

    try {
        await newProces.save();
        response.status(201).json(newProces);
    }
    catch(error){
        response.status(409).json({message:error.message});

    }
}

export const getProcesi=async (request, response)=>{
    try{
         const procesi=await Proces.find({});
         response.status(200).json(procesi);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const getProces=async (request, response)=>{
    try{
         //const dobavljac=await Dobavljac.find({_id:request.params.id});
         const proces=await Proces.findById(request.params.id);
         response.status(200).json(proces);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const editProces=async(request, response)=>{
    let proces=request.body;
    const editProces=new Proces(proces);
    try{
        await Proces.updateOne({_id:request.params.id}, editProces);
        response.status(201).json(editProces);

    }catch(error){
        response.status(409).json({message:error.message});
    }
}

export const deleteProces=async(request, response)=>{
    let proces=request.body;
    const deleteProces=new Proces(proces);
    try{
        await Proces.deleteOne({_id:request.params.id});
        response.status(200).json({message:'Proces uspjesno obrisan'});
    }catch(error){
        response.status(409).json({message:error.message});
    }
}