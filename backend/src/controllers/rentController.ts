import { RentModel, 
  getRents,
 getRentByPrice
} from '../db/rentsdb';
import express from 'express';


export const getAllRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Rents = await getRents();

    return res.status(200).json(Rents);
  } catch (error) {
    return res.json({
      message:
        ' line 13 : the res status is 400 . this message is from rentControllers.ts ',
    });
  }
};

export const getFilteredRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      location,
      suburb,
      propertytype,
      rentmin,
      rentmax,
      bedrooms
    } = req.query;

    let filter: Record<string, any> = {};

    if (location) {
      filter.location = location;
    }
    if (suburb) {
      filter.suburb = suburb;
    }
    if (bedrooms) {
      filter.bedrooms = bedrooms;
    }
    if (propertytype) {
      filter.propertytype = propertytype;
    }

    const filteredRents = await getRentByPrice({
      rentmin: Number(rentmin),
      rentmax: Number(rentmax)
    });

    return res.status(200).json(filteredRents);
  } catch (error) {
    return  res.status(400).json({
      message:
        'An error occurred while fetching filtered rents: ' + (error as Error).message,
    });
  }
};
