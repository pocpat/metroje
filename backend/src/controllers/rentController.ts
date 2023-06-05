import { deleteRentById, getRentById, getRents } from "../db/rentsdb";
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

export const updateRent = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { Rent } = req.body;

    if (!Rent) {
      return res.sendStatus(400);
    }

    const rent = await getRentById(id);

    Rent.location = rent;
    await rent.save();

    return res.status(200).json(Rent).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
