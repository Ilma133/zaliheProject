import axios from 'axios';


const URL='http://localhost:8000/procesi';

export const addProces=async (data)=>{
    try{
        return await axios.post(`${URL}/addproces`,data);

    }
    catch(error){
        console.log('Greskica',error)
    }

}

export const getProcesi=async()=>{
    try{
        return await axios.get(`${URL}/allprocesi`);
    }catch(error){
        console.log('Error while calling getProcesi API', error);
    }
    
}

export const getProces=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getProces API', error);
    }

}

export const editProces=async(proces, id)=>{
    try{

        return await axios.put(`${URL}/${id}`, proces);
    }catch(error){
        console.log('Error while calling editProces API', error);
    }
}

export const deleteProces=async(id)=>{
    try{

        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteProces API', error);
    }
}