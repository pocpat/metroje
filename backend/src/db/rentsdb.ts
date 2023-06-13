import mongoose from 'mongoose';

export const RentSchema = new mongoose.Schema({
  location: { type: String, required: false },
  suburb: { type: String, required: false },
   rentprice: { type: Number, required: false },
  bedrooms: { type: Number, required: false },
  bathrooms: { type: Number, required: false },
  propertytype: { type: String, required: false },
  // carparks: { type: Number, required: false },
});

export const RentModel = mongoose.model('Rent', RentSchema);

export const getRents = () => RentModel.find();

export const getRentByLocation = (location: String) =>
  RentModel.find({ location });

  export const getRentByPrice = (priceRange: { rentmin: number, rentmax: number }) =>
  RentModel.find({ rentprice: { $gte: priceRange.rentmin, $lte: priceRange.rentmax } });



export const getRentBySuburb = (suburb: String) => RentModel.find({ suburb });

export const getRentByBedrooms = (bedrooms: Number) =>
  RentModel.find({ bedrooms });

export const getRentByPropertyType = (propertytype: String) =>
  RentModel.find({ propertytype });

// export const getRentById = (id: string) => RentModel.findById(id);

export const createRent = (values: Record<string, any>) =>
  new RentModel(values).save().then((Rent) => Rent.toObject());
