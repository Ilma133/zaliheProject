import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";


const procesShema= mongoose.Schema({
    Naziv:String,
    DatumPocetka:String,
    DatumZavrsetka:String,
    Cijena:String
})

autoIncrement.initialize(mongoose.connection);
procesShema.plugin(autoIncrement.plugin, 'proces');

const proces=mongoose.model('proces', procesShema);

export default proces;