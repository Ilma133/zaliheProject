
import { request } from 'express';
import Dobavljac from '../schema/dobavljacshema.js';


export const addDobavljac=async (request, response)=>{
    const dobavljac=request.body;

    const newDobavljac=new Dobavljac(dobavljac);

    try {
        await newDobavljac.save();
        response.status(201).json(newDobavljac);
    }
    catch(error){
        response.status(409).json({message:error.message});

    }
}

export const getDobavljaci=async (request, response)=>{
    try{
         const dobavljaci=await Dobavljac.find({});
         response.status(200).json(dobavljaci);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const getDobavljac=async (request, response)=>{
    try{
         //const dobavljac=await Dobavljac.find({_id:request.params.id});
         const dobavljac=await Dobavljac.findById(request.params.id);
         response.status(200).json(dobavljac);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const editDobavljac=async(request, response)=>{
    let dobavljac=request.body;
    const editDobavljac=new Dobavljac(dobavljac);
    try{
        await Dobavljac.updateOne({_id:request.params.id}, editDobavljac);
        response.status(201).json(editDobavljac);

    }catch(error){
        response.status(409).json({message:error.message});
    }
}

export const deleteDobavljac=async(request, response)=>{
    let dobavljac=request.body;
    const deleteDobavljac=new Dobavljac(dobavljac);
    try{
        await Dobavljac.deleteOne({_id:request.params.id});
        response.status(200).json({message:'Dobavljac uspjesno obrisan'});
    }catch(error){
        response.status(409).json({message:error.message});
    }
}

