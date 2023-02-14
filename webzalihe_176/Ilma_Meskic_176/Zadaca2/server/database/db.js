import mongoose from "mongoose";

const Connection= async (username, password)=>{
    const URL=`mongodb://${username}:${password}@ac-l3ax9id-shard-00-00.cgx35rn.mongodb.net:27017,ac-l3ax9id-shard-00-01.cgx35rn.mongodb.net:27017,ac-l3ax9id-shard-00-02.cgx35rn.mongodb.net:27017/?ssl=true&replicaSet=atlas-kzdxoj-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{

        await mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true});
        console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting with database', error);
    }

}

export default Connection;