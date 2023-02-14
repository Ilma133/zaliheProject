import express from "express";
const router = express.Router();
import Korisnik from "../schema/korisnikshema.js";
router.post("/register", async (req, res) => {
  const { KorisnickoIme, Sifra } = req.body;
  if (!KorisnickoIme || !Sifra) {
    res.json({ msg: "Missing one of the fields" });
  }
  const checkUsername = await Korisnik.findOne({ KorisnickoIme });
  if (checkUsername) {
    res.json({ msg: "User exists" });
  }
  try {
    const user = await Korisnik.create({
      KorisnickoIme,
      Sifra,
    });
    res.json({
      _id: Korisnik.id,
      KorisnickoIme: Korisnik.KorisnickoIme,
      Sifra: Korisnik.Sifra,
    });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/login", async (req, res) => {
  const { KorisnickoIme, Sifra } = req.body;
  if (!KorisnickoIme || !Sifra) {
    res.status(400).json({ msg: "Missing username or password" });
  }

  const korisnik = await Korisnik.findOne({ KorisnickoIme });
  if (!korisnik) return res.json({ message: "User does not exist" });
  if (korisnik.Sifra == Sifra) {
    res.json({
      status: "succesfull",
      id: Korisnik._id,
      KorisnickoIme: Korisnik.KorisnickoIme,
    });
  } else {
    res.json({ status: "unsuccesfull" });
  }
});

export default router;
