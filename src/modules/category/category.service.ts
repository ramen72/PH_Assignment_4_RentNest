import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import httpStatus from "http-status";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "../../utils/jwt";

const createCategoryIntoDB = async () => {};
const getAllCategoriesFromDB = async () => {};
const updateCategoriesIntoDB = async () => {};
const deleteCategoriesFromDB = async () => {};

export const categoryService = {
  createCategoryIntoDB,
  getAllCategoriesFromDB,
  updateCategoriesIntoDB,
  deleteCategoriesFromDB,
};
