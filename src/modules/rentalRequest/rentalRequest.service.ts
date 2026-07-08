import { RentalRequestStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma";
import {
  ICreateRentalRequestPayload,
  IUpdateRentalRequestPayload,
} from "./rentalRequest.interface";

const createRentalRequestIntoDB = async (
  payload: ICreateRentalRequestPayload,
  tenantId: string,
) => {
  const property = await prisma.property.findUniqueOrThrow({
    where: {
      id: payload.propertyId,
    },
    select: {
      landlordId: true,
    },
  });

  const result = await prisma.rentalRequest.create({
    data: {
      tenantId,
      landlordId: property.landlordId,
      propertyId: payload.propertyId,
      moveInDate: payload.moveInDate,
      rentalDuration: payload.rentalDuration,
      monthlyRent: payload.monthlyRent,
      message: payload.message,
    },
    include: {
      tenant: true,
      landlord: true,
      property: true,
    },
  });

  return result;
};

const getAllRentalRequestsFromDB = async () => {
  return prisma.rentalRequest.findMany({
    include: {
      tenant: true,
      landlord: true,
      property: true,
      payment: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};

const getSingleRentalRequestFromDB = async (id: string) => {
  return prisma.rentalRequest.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      tenant: true,
      landlord: true,
      property: true,
      payment: true,
    },
  });
};

const updateRentalRequestIntoDB = async (
  id: string,
  payload: IUpdateRentalRequestPayload,
) => {
  return prisma.rentalRequest.update({
    where: {
      id,
    },
    data: payload,
  });
};

const updateRentalRequestStatusIntoDB = async (
  id: string,
  status: RentalRequestStatus,
) => {
  return prisma.rentalRequest.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
};

const deleteRentalRequestFromDB = async (id: string) => {
  return prisma.rentalRequest.delete({
    where: {
      id,
    },
  });
};

export const rentalRequestService = {
  createRentalRequestIntoDB,
  getAllRentalRequestsFromDB,
  getSingleRentalRequestFromDB,
  updateRentalRequestIntoDB,
  updateRentalRequestStatusIntoDB,
  deleteRentalRequestFromDB,
};
