import mongoose from "mongoose";

export const RentSchema = new mongoose.Schema({
  location: { type: String, required: true },
  suburb: { type: String, required: true },
  rentprice: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  propertytype: { type: String, required: true },
});

export const RentModel = mongoose.model("Rent", RentSchema);

export const getRents = () => RentModel.find();
export const getRentByPrice = (price: string) => RentModel.findOne({ price });
export const getRentById = (id: string) => RentModel.findById(id);
export const createRent = (values: Record<string, any>) =>
  new RentModel(values).save().then((Rent) => Rent.toObject());
export const deleteRentById = (id: string) =>
  RentModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  RentModel.findByIdAndUpdate(id, values);
