import Korisnik from "../schema/korisnikshema.js";

export const addKorisnik = async (request, response) => {
  const korisnik = request.body;
  console.log(korisnik);
  const newKorisnik = new Korisnik(korisnik);

  try {
    console.log(await newKorisnik.save());
    response.status(201).json(newKorisnik);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getKorisnici = async (request, response) => {
  try {
    const korisnici = await Korisnik.find({});
    response.status(200).json(korisnici);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getKorisnik = async (request, response) => {
  try {
    //const dobavljac=await Dobavljac.find({_id:request.params.id});
    const korisnik = await Korisnik.findById(request.params.id);
    response.status(200).json(korisnik);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editKorisnik = async (request, response) => {
  let korisnik = request.body;
  const editKorisnik = new Korisnik(korisnik);
  try {
    await Korisnik.updateOne({ _id: request.params.id }, editKorisnik);
    response.status(201).json(editKorisnik);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteKorisnik = async (request, response) => {
  let korisnik = request.body;
  const deleteKorisnik = new Korisnik(korisnik);
  try {
    await Korisnik.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "Korisnik uspjesno obrisan" });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
