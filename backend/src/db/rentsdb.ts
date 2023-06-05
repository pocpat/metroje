import mongoose from "mongoose";

export const RentSchema = new mongoose.Schema({
  location: { type: String, required: false },
  suburb: { type: String, required: false },
  rentprice: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  propertytype: { type: String, required: true },
});

export const RentModel = mongoose.model("Rent", RentSchema);

export const getRents = () => RentModel.find();

export const getRentByLocation = (location: String) =>
  RentModel.find({ location }).limit(50);

export const getRentByPrice = (rentprice: Number) =>
  RentModel.find({ rentprice }).limit(50);

export const getRentBySuburb = (suburb: String) =>
  RentModel.find({ suburb }).limit(50);

export const getRentByBedrooms = (bedrooms: Number) =>
  RentModel.find({ bedrooms }).limit(50);

export const getRentByPropertyType = (propertytype: String) =>
  RentModel.find({ propertytype }).limit(50);

export const getRentById = (id: string) => RentModel.findById(id);

export const createRent = (values: Record<string, any>) =>
  new RentModel(values).save().then((Rent) => Rent.toObject());
