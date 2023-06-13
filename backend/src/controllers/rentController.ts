import { RentModel, getRents } from '../db/rentsdb';
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

// export const getFilteredRents = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const { location, suburb, propertytype } = req.query;
//     const rentmin = Number(req.query.rentmin);
//     const rentmax = Number(req.query.rentmax);
//     const bedrooms = Number(req.query.bedrooms);

//     let filter: Record<string, any> = {};

//     if (location) {
//       filter.location = location;
//     }
//     if (suburb) {
//       filter.suburb = suburb;
//     }
//     if (bedrooms) {
//       filter.bedrooms = bedrooms;
//     }
//     if (propertytype) {
//       filter.propertytype = propertytype;
//     }

//     let filteredRents = await RentModel.find(filter);

//     if (rentmin && rentmax) {
//       filteredRents = filteredRents.filter(
//         (rent) => rent.rentprice >= rentmin && rent.rentprice <= rentmax
//       );
//     }
//     if (filteredRents.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No rents found matching the provided criteria' });
//     }
//     return res.status(200).json(filteredRents);
//   } catch (error) {
//     return res.json({ message: ' line 56 : the res status is 400 . this message is from rentControllers.ts ' });
//   }
// };

export const getFilteredRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { 
      location, 
      suburb, 
      propertytype, 
      // rentmin, 
      // rentmax, 
      // bedrooms 
    } =
      req.query;

    let filter: Record<string, any> = {};

    if (location) {
      filter.location = location;
    }
    if (suburb) {
      filter.suburb = suburb;
    }
    // if (bedrooms) {
    //   filter.bedrooms = bedrooms;
    // }
    if (propertytype) {
      filter.propertytype = propertytype;
    }

    let filteredRents = await RentModel.find(filter);

    // if (rentmin && rentmax) {
    //   const minRent = parseInt(rentmin as string, 10);
    //   const maxRent = parseInt(rentmax as string, 10);

    //   filteredRents = filteredRents.filter(
    //     (rent) => rent.rentprice >= minRent && rent.rentprice <= maxRent
    //   );
    // }

    if (filteredRents.length === 0) {
      return res
        .status(404)
        .json({ message: 'No rents found matching the provided criteria' });
    }

    return res.status(200).json(filteredRents);
  } catch (error) {
    return res.json({
      message:
        'An error occurred while fetching filtered rents: ' +
        (error as Error).message,
    });
  }
};
