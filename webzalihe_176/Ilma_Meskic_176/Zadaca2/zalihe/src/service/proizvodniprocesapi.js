import axios from 'axios';


const URL='http://localhost:8000/proizvodniprocesi';

export const addProizvodniProces=async (data)=>{
    try{
        return await axios.post(`${URL}/addproizvodniproces`,data);

    }
    catch(error){
        console.log('Greskica',error)
    }

}

export const getProizvodniProcesi=async()=>{
    try{
        return await axios.get(`${URL}/allproizvodniprocesi`);
    }catch(error){
        console.log('Error while calling getProizvodniProcesi API', error);
    }
    
}

export const getProizvodniProces=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getProzivodniProces API', error);
    }

}

export const editProizvodniProces=async(proizvodniproces, id)=>{
    try{

        return await axios.put(`${URL}/${id}`, proizvodniproces);
    }catch(error){
        console.log('Error while calling editProizvodniProces API', error);
    }
}

export const deleteProizvodniProces=async(id)=>{
    try{

        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteProizvodniProces API', error);
    }
}