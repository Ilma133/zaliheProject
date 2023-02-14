import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const korisnikShema = mongoose.Schema({
  KorisnickoIme: String,
  Sifra: String,
  Uloga: String,
  ZaposlenikID: {
    type: Number,
    ref: "zaposlenik",
  },
});

autoIncrement.initialize(mongoose.connection);
korisnikShema.plugin(autoIncrement.plugin, "korisnik");

const korisnik = mongoose.model("korisnik", korisnikShema);

export default korisnik;