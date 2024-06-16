// import { RentModel, getRents } from '../db/rentsdb';
// import express from 'express';

// export const getAllRents = async (req: express.Request, res: express.Response) => {
//   try {
//     const Rents = await getRents();

//     return res.status(200).json(Rents);
//   } catch (error) {
//     return res.sendStatus(400);
//   }
// };

// const filterRents = async (req: express.Request) => {
//   const { location, suburb, propertytype } = req.query;
//   const rentmin = Number(req.query.rentmin);
//   const rentmax = Number(req.query.rentmax);
//   const bedrooms = Number(req.query.bedrooms);

//   let filter: Record<string, any> = {};

//   if (location) {
//     filter.location = location;
//   }
//   if (suburb) {
//     filter.suburb = suburb;
//   }
//   if (bedrooms) {
//     filter.bedrooms = bedrooms;
//   }
//   if (propertytype) {
//     filter.propertytype = propertytype;
//   }

//   let filteredRents = await RentModel.find(filter);

//   if (rentmin && rentmax) {
//     filteredRents = filteredRents.filter(
//       (rent) => rent.rentprice >= rentmin && rent.rentprice <= rentmax
//     );
//   }

//   return filteredRents;
// };

// export const getFilteredRents = async (req: express.Request, res: express.Response) => {
//   try {
//     const filteredRents = await filterRents(req);

//     if (filteredRents.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No rents found matching the provided criteria' });
//     }

//     return res.status(200).json(filteredRents);
//   } catch (error) {
//     return res.sendStatus(400);
//   }
// };




// import { RentModel, getRents } from '../db/rentsdb';
// import express from 'express';

// export const getAllRents = async (
//   req: express.Request,
//   res: express.Response
// ) => {
//   try {
//     const Rents = await getRents();

//     return res.status(200).json(Rents);
//   } catch (error) {
//     return res.sendStatus(400);
//   }
// };

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
//       console.log("now it is returning something in line 48" + filteredRents);
//     }
//     if (filteredRents.length === 0) {
//       return res
//         .status(404)
//         .json({ message: 'No rents found matching the provided criteria' });
//     }
//     return res.status(200).json(filteredRents);
//   } catch (error) {
//     return res.sendStatus(400);
//   }
// };


// controllers/rentsController.ts

import { RentModel, getRents } from '../db/rentsdb';
import express from 'express';
import { Request, Response } from 'express';

export const getAllRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const Rents = await getRents();

    return res.status(200).json(Rents);
  } catch (error) {
    return res.sendStatus(400);
  }
};

export const getRentsByQuery = async (req: Request, res: Response) => {
  const { location, suburb, rentmin, rentmax, bedrooms, propertytype } = req.query;

  try {
    const query: any = {};
    if (location) query.location = location;
    if (suburb) query.suburb = suburb;
    if (rentmin && rentmax) query.rentprice = { $gte: Number(rentmin), $lte: Number(rentmax) };
    if (bedrooms) query.bedrooms = Number(bedrooms);
    if (propertytype) query.propertytype = propertytype;

    const results = await RentModel.find(query).exec();
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
