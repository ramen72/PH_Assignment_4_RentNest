import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import { ILoginPayload, IRegisterUserPayload } from "./property.interface";
import config from "../../config";
import httpStatus from "http-status";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "../../utils/jwt";

const createPropertyIntoDB = async () => {};
const getAllPropertiesFromDB = async () => {};
const updatePropertiesIntoDB = async () => {};
const deletePropertiesFromDB = async () => {};

export const propertyService = {
  createPropertyIntoDB,
  getAllPropertiesFromDB,
  updatePropertiesIntoDB,
  deletePropertiesFromDB,
};
