import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const zaposlenikShema= mongoose.Schema({
    Ime:String,
    Prezime:String,
    BrojTelefona:String,
    Adresa:String,
    Email:String,
    DatumZaposlenja:String,
    DatumOtkaza:String
})

autoIncrement.initialize(mongoose.connection);
zaposlenikShema.plugin(autoIncrement.plugin, 'zaposlenik');

const zaposlenik=mongoose.model('zaposlenik', zaposlenikShema);

export default zaposlenik;