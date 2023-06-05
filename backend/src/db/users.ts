import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);

export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate(id, values);

//  ====================> get rent by id  <====================
// ============================================================
const RentSchema = new mongoose.Schema({
  location: { type: String, required: true },
  suburb: { type: String, required: true },
  rentprice: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  propertytype: { type: String, required: true },
});
export const RentModel = mongoose.model("Rent", RentSchema);
export const getRents = () => RentModel.find();
export const getREntByLocation = (location: string) =>
  RentModel.findOne({ location });
export const getRentById = (id: string) => RentModel.findById(id);
export const getRentBySuburb = (suburb: string) =>
  RentModel.findOne({ suburb });
export const getRentByPropertyType = (propertytype: string) =>
  RentModel.findOne({ propertytype });
export const getRentByRentmin = (rentmin: number) =>
  RentModel.findOne({ rentmin });

export const getRentByRentmax = (rentmax: number) =>
RentModel.find({ rentmax: { $lte: rentmax } });

export const getRentByBedrooms = (bedrooms: number) =>
  RentModel.findOne({ bedrooms });
export const createRent = (values: Record<string, any>) =>
  new RentModel(values).save().then((rent) => rent.toObject());
export const deleteRentById = (id: string) =>
  RentModel.findOneAndDelete({ _id: id });
export const updateRentById = (id: string, values: Record<string, any>) =>
  RentModel.findByIdAndUpdate(id, values);
 
