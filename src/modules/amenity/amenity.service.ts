import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import httpStatus from "http-status";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "../../utils/jwt";

const createAmenityIntoDB = async () => {};
const getAllAmenitiesFromDB = async () => {};
const updateAmenitiesIntoDB = async () => {};
const deleteAmenitiesFromDB = async () => {};

export const amenityService = {
  createAmenityIntoDB,
  getAllAmenitiesFromDB,
  updateAmenitiesIntoDB,
};
