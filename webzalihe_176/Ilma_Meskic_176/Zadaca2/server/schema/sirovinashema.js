import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const sirovinaShema = mongoose.Schema({
  Naziv: String,
  Kolicina: String,
  MinKolicina: String,
  Cijena: String,
  JedinicaMjere: String,
  DaLiSeKoristi: String,
  DobavljacID: {
    type: Number,
    ref: "dobavljac",
  },
});

autoIncrement.initialize(mongoose.connection);
sirovinaShema.plugin(autoIncrement.plugin, "sirovina");

const sirovina = mongoose.model("sirovina", sirovinaShema);

export default sirovina;
