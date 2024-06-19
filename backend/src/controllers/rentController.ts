import { RentModel, createRent, getRents } from "../db/rentsdb";
import express from "express";

export const getAllRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Rents = await getRents();

    return res.status(200).json(Rents);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

const debugMongoose = async()=> {
  // let newRec: Record<string, any> = {
  //   location: "Auckland",
  //   suburb: "Mt Eden",
  //   rentprice: 3333,
  //   bedrooms: 2,
  //   bathrooms: 1,
  //   propertytype: "House",
  //   carparks: 1,
  // };
  //createRent(newRec);
  await RentModel.deleteMany({ rentprice: 2222 });

  let  allRents = await RentModel.find();
  console.log(allRents);


}

export const getFilteredRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {

   debugMongoose();

    const location = req.query.location?.toString().trim();
    const suburb = req.query.suburb?.toString().trim();
    const rentmin = Number(req.query.rentmin);
    const rentmax = Number(req.query.rentmax);
    const bedrooms = Number(req.query.bedrooms);
    const propertytype = req.query.propertytype?.toString().trim();

    let filter: Record<string, any> = {};



    if (location) filter.location = { $regex: new RegExp(`^${location}$`, 'i') };
    if (suburb) filter.suburb = suburb;
    if (bedrooms) filter.bedrooms = bedrooms;
    if (propertytype) filter.propertytype = propertytype;
    if (rentmin) filter.rentprice = { $gte: rentmin };
    if (rentmax) filter.rentprice = { ...filter.rentprice, $lte: rentmax };

    let filteredRents = await RentModel.find(filter);

    if (rentmin && rentmax) {
      filteredRents = filteredRents.filter(
        (rent) => rent.rentprice >= rentmin && rent.rentprice <= rentmax
      );
    }
    // if (filteredRents.length === 0) {
    //   return res
    //     .status(404)
    //     .json({ message: "No rents found matching the provided criteria" });
     // If no rents match the filter, get all rents
     if (filteredRents.length === 0) {
      filteredRents = await RentModel.find();
      console.log(filteredRents);
    }
    return res.status(200).json(filteredRents);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

