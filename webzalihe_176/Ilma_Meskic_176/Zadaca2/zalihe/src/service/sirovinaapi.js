

import axios from 'axios';

const URL='http://localhost:8000/sirovine';

export const addSirovina=async (data)=>{
    try{
        return await axios.post(`${URL}/addsirovina`,data);

    }
    catch(error){
        console.log('Greskica',error)
    }

}

export const getSirovine=async()=>{
    try{
        return await axios.get(`${URL}/allsirovine`);
    }catch(error){
        console.log('Error while calling getSirovine API', error);
    }
    
}

export const getSirovina=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getSirovina API', error);
    }

}

export const editSirovina=async(sirovina, id)=>{
    try{

        return await axios.put(`${URL}/${id}`, sirovina);
    }catch(error){
        console.log('Error while calling editSirovina API', error);
    }
}

export const deleteSirovina=async(id)=>{
    try{

        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteSirovina API', error);
    }
}