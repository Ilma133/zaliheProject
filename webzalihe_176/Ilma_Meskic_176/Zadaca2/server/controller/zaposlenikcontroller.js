
import Zaposlenik from '../schema/zaposlenikshema.js';

export const addZaposlenik=async (request, response)=>{
    const zaposlenik=request.body;

    const newZaposlenik=new Zaposlenik(zaposlenik);

    try {
        await newZaposlenik.save();
        response.status(201).json(newZaposlenik);
    }
    catch(error){
        response.status(409).json({message:error.message});

    }
}

export const getZaposlenici=async (request, response)=>{
    try{
         const zaposlenici=await Zaposlenik.find({});
         response.status(200).json(zaposlenici);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const getZaposlenik=async (request, response)=>{
    try{
         //const dobavljac=await Dobavljac.find({_id:request.params.id});
         const zaposlenik=await Zaposlenik.findById(request.params.id);
         response.status(200).json(zaposlenik);
    }catch(error){
        response.status(404).json({message:error.message});

    }

}

export const editZaposlenik=async(request, response)=>{
    let zaposlenik=request.body;
    const editZaposlenik=new Zaposlenik(zaposlenik);
    try{
        await Zaposlenik.updateOne({_id:request.params.id}, editZaposlenik);
        response.status(201).json(editZaposlenik);

    }catch(error){
        response.status(409).json({message:error.message});
    }
}

export const deleteZaposlenik=async(request, response)=>{
    let zaposlenik=request.body;
    const deleteZaposlenik=new Zaposlenik(zaposlenik);
    try{
        await Zaposlenik.deleteOne({_id:request.params.id});
        response.status(200).json({message:'Zaposlenik uspjesno obrisan'});
    }catch(error){
        response.status(409).json({message:error.message});
    }
}