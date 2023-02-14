import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";


const proizvodniprocesShema= mongoose.Schema({
    Kolicina:String,
    SirovinaID: {
        type: Number,
        ref: "sirovina",
      },
})

autoIncrement.initialize(mongoose.connection);
proizvodniprocesShema.plugin(autoIncrement.plugin, 'proizvodniproces');

const proizvodniproces=mongoose.model('proizvodniproces', proizvodniprocesShema);

export default proizvodniproces;