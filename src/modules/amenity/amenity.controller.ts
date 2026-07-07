import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createAmenity = catchAsync(
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

const getAllAmenities = catchAsync(
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

const updateAmenities = catchAsync(
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

const deleteAmenities = catchAsync(
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

export const amenityController = {
  createAmenity,
  getAllAmenities,
  updateAmenities,
  deleteAmenities,
};
