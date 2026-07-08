import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import httpStatus from "http-status";

const createCategory = catchAsync(
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

const getAllCategories = catchAsync(
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

const updateCategories = catchAsync(
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

const deleteCategories = catchAsync(
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

export const categoryController = {
  createCategory,
  getAllCategories,
  updateCategories,
  deleteCategories,
};
