import axios from 'axios';

const URL='http://localhost:8000';

export const addDobavljac=async (data)=>{
    try{
        return await axios.post(`${URL}/adddobavljac`,data);

    }
    catch(error){
        console.log('Greskica',error)
    }

}

export const getDobavljaci=async()=>{
    try{
        return await axios.get(`${URL}/alldobavljaci`);
    }catch(error){
        console.log('Error while calling getDobavljaci API', error);
    }
    
}

export const getDobavljac=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getDobavljac API', error);
    }

}

export const editDobavljac=async(dobavljac, id)=>{
    try{

        return await axios.put(`${URL}/${id}`, dobavljac);
    }catch(error){
        console.log('Error while calling editDobavljac API', error);
    }
}

export const deleteDobavljac=async(id)=>{
    try{

        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteDobavljac API', error);
    }
}
