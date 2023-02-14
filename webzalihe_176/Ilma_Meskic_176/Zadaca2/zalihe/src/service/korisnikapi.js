import axios from 'axios';

const URL='http://localhost:8000/korisnici';

export const addKorisnik=async (data)=>{
    try{
        return await axios.post(`${URL}/addkorisnik`,data);

    }
    catch(error){
        console.log('Greskica',error)
    }

}

export const getKorisnici=async()=>{
    try{
        return await axios.get(`${URL}/allkorisnici`);
    }catch(error){
        console.log('Error while calling getKorisnici API', error);
    }
    
}

export const getKorisnik=async(id)=>{
    try{
        return await axios.get(`${URL}/${id}`)
    }catch(error){
        console.log('Error while calling getKorisnik API', error);
    }

}

export const editKorisnik=async(korisnik, id)=>{
    try{

        return await axios.put(`${URL}/${id}`, korisnik);
    }catch(error){
        console.log('Error while calling editKorisnik API', error);
    }
}

export const deleteKorisnik=async(id)=>{
    try{

        return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log('Error while calling deleteKorisnik API', error);
    }
}