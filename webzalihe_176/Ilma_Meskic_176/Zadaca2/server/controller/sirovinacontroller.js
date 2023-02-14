import Sirovina from "../schema/sirovinashema.js";

export const addSirovina = async (request, response) => {
  const sirovina = request.body;
  console.log(sirovina);
  const newSirovina = new Sirovina(sirovina);

  try {
    await newSirovina.save();
    response.status(201).json(newSirovina);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getSirovine = async (request, response) => {
  try {
    const sirovine = await Sirovina.find({});
    response.status(200).json(sirovine);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getSirovina = async (request, response) => {
  try {
    //const dobavljac=await Dobavljac.find({_id:request.params.id});
    const sirovina = await Sirovina.findById(request.params.id);
    response.status(200).json(sirovina);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editSirovina = async (request, response) => {
  let sirovina = request.body;
  const editSirovina = new Sirovina(sirovina);
  try {
    await Sirovina.updateOne({ _id: request.params.id }, editSirovina);
    response.status(201).json(editSirovina);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteSirovina = async (request, response) => {
  let sirovina = request.body;
  const deleteSirovina = new Sirovina(sirovina);
  try {
    await Sirovina.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: "Sirovina uspjesno obrisana" });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
