import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";


const dobavljacShema= mongoose.Schema({
    Naziv:String,
    JIB:String,
    PDV:String,
    Telefon:String,
    KontaktOsoba:String,
    Email:String,
    DatumPocetka:String,
    DatumZavrsetka:String
})

autoIncrement.initialize(mongoose.connection);
dobavljacShema.plugin(autoIncrement.plugin, 'dobavljac');

const dobavljac=mongoose.model('dobavljac', dobavljacShema);

export default dobavljac;
