import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import httpStatus from "http-status";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "../../utils/jwt";

const createRentalIntoDB = async () => {};
const getAllRentalsFromDB = async () => {};
const updateRentalsIntoDB = async () => {};
const deleteRentalsFromDB = async () => {};

export const rentalService = {
  createRentalIntoDB,
  getAllRentalsFromDB,
  updateRentalsIntoDB,
  deleteRentalsFromDB,
};
