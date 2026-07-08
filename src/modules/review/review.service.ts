import bcrypt from "bcryptjs";
import { prisma } from "../../lib/prisma";
import config from "../../config";
import httpStatus from "http-status";
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "../../utils/jwt";

const createReviewIntoDB = async () => {};
const getAllReviewsFromDB = async () => {};
const updateReviewsIntoDB = async () => {};
const deleteReviewsFromDB = async () => {};

export const reviewService = {
  createReviewIntoDB,
  getAllReviewsFromDB,
  updateReviewsIntoDB,
  deleteReviewsFromDB,
};
