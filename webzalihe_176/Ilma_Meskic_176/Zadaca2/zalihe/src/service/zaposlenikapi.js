
import axios from 'axios';

const URL='http://localhost:8000/zaposlenici';

export const addZaposlenik=async (data)=>{
    try{
        return await axios.post(`${URL}/addzaposlenik`,data);

    }
    catch(error){
        console.log('Greskica',error)
    }

}

export const getZaposlenici=async()=>{
    try{
        return await axios.get(`${URL}/allzaposlenici`);
    }catch(error){
        console.log('Error while calling getZaposlenici API', error);
    }
    
}

export const getZaposlenik=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getZaposlenik API', error);
    }

}

export const editZaposlenik=async(zaposlenik, id)=>{
    try{

        return await axios.put(`${URL}/${id}`, zaposlenik);
    }catch(error){
        console.log('Error while calling editZaposlenik API', error);
    }
}

export const deleteZaposlenik=async(id)=>{
    try{

        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteZaposlenik API', error);
    }
}