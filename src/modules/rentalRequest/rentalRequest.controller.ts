import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createRental = catchAsync(
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

const getAllRentals = catchAsync(
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

const updateRentals = catchAsync(
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

const deleteRentals = catchAsync(
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

export const rentalController = {
  createRental,
  getAllRentals,
  updateRentals,
  deleteRentals,
};
