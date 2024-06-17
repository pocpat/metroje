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
  let newRec: Record<string, any> = {
    location: "Auckland",
    suburb: "Mt Eden",
    rentprice: 11111,
    bedrooms: 2,
    bathrooms: 1,
    propertytype: "House",
    carparks: 1,
  };
  createRent(newRec);


  let  allRents = await RentModel.find();
  console.log(allRents);


}

export const getFilteredRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {

    debugMongoose();

    const location = req.query.location;
    const suburb = req.query.suburb;
    const rentmin = Number(req.query.rentmin);
    const rentmax = Number(req.query.rentmax);
    const bedrooms = Number(req.query.bedrooms);
    const propertytype = req.query.propertytype;

    let filter: Record<string, any> = {};


    if (location) filter.location = location;
    if (suburb) filter.suburb = suburb;
    if (bedrooms) filter.bedrooms = bedrooms;
    if (propertytype) filter.propertytype = propertytype;

    let filteredRents = await RentModel.find(filter);

    if (rentmin && rentmax) {
      filteredRents = filteredRents.filter(
        (rent) => rent.rentprice >= rentmin && rent.rentprice <= rentmax
      );
    }
    if (filteredRents.length === 0) {
      return res
        .status(404)
        .json({ message: "No rents found matching the provided criteria" });
    }
    return res.status(200).json(filteredRents);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
