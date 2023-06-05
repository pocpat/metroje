import express from "express";
import { deleteUserById, getUserById, getUsers,
  getRents as getRentsFromDB, getRentById,getRentByPropertyType, getRentByRentmin,
  getRentByRentmax ,getRentByBedrooms, createRent as createRentInDB, deleteRentById,updateRentById, RentModel
} from "../db/users";

export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);
    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

//  ====================> get user by id  <====================
// ============================================================
export const getRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const rents = await getRentsFromDB();

    return res.status(200).json(rents);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteRent = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedRent = await deleteRentById(id);
    return res.json(deletedRent);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const createRent = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const rentData = req.body;
    const newRent = await createRentInDB(rentData);
    return res.status(201).json(newRent);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getRentsByRentMax = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    // Get the rentmax value from the request query and convert it to a number
    const rentmax = Number(req.query.rentmax);

    // Call the getRentByRentmax function from your database module to get rents with rentmax <= specified value
    const rents = await getRentByRentmax(rentmax);

    // Log the rents returned from the database
    console.log('rents:', rents);

    // Return the rents
    return res.status(200).json(rents);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

// ====================> GET request for multiple query parameters <====================
export const getFilteredRents = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    // Get the query parameters from the request query
    const location = req.query.location;
    const suburb = req.query.suburb;
    const rentmin = Number(req.query.rentmin);
    const rentmax = Number(req.query.rentmax);
    const bedrooms = Number(req.query.bedrooms);
    const propertytype = req.query.propertytype;

    // Build the filter object based on the provided query parameters
    const filter: Record<string, any> = {};
    if (location) filter.location = location;
    if (suburb) filter.suburb = suburb;
    if (bedrooms) filter.bedrooms = bedrooms;
    if (propertytype) filter.propertytype = propertytype;

    // Call the find function from your RentModel to get filtered rents
    const rents = await RentModel.find(filter);

    // Filter the rents by rentprice
    const filteredRents = rents.filter(rent => rent.rentprice >= rentmin && rent.rentprice <= rentmax);

    // Return the filtered rents
    return res.status(200).json(filteredRents);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

