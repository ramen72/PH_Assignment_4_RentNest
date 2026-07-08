import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";
import { IRegisterUserPayload } from "./property.interface";

const createProperty = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const payload = req.body;
    // const user = await authService.registerUserIntoDB(
    //   payload as IRegisterUserPayload,
    // );
    // sendResponse(res, {
    //   success: true,
    //   statusCode: httpStatus.CREATED,
    //   message: "User registered Successfully.",
    //   data: {
    //     user,
    //   },
    // });
  },
);

const getAllProperties = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const payload = req.body;
    // const user = await authService.registerUserIntoDB(
    //   payload as IRegisterUserPayload,
    // );
    // sendResponse(res, {
    //   success: true,
    //   statusCode: httpStatus.CREATED,
    //   message: "User registered Successfully.",
    //   data: {
    //     user,
    //   },
    // });
  },
);

const updateProperties = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const payload = req.body;
    // const user = await authService.registerUserIntoDB(
    //   payload as IRegisterUserPayload,
    // );
    // sendResponse(res, {
    //   success: true,
    //   statusCode: httpStatus.CREATED,
    //   message: "User registered Successfully.",
    //   data: {
    //     user,
    //   },
    // });
  },
);

const deleteProperties = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // const payload = req.body;
    // const user = await authService.registerUserIntoDB(
    //   payload as IRegisterUserPayload,
    // );
    // sendResponse(res, {
    //   success: true,
    //   statusCode: httpStatus.CREATED,
    //   message: "User registered Successfully.",
    //   data: {
    //     user,
    //   },
    // });
  },
);

export const propertyController = {
  createProperty,
  getAllProperties,
  updateProperties,
  deleteProperties,
};
