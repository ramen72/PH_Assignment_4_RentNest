import { prisma } from "../../lib/prisma";
import {
  ICreatePropertyPayload,
  IUpdatePropertyPayload,
} from "./property.interface";

const createPropertyIntoDB = async (
  payload: ICreatePropertyPayload,
  landlordId: string,
) => {
  const result = await prisma.property.create({
    data: {
      title: payload.title,
      description: payload.description,
      address: payload.address,
      city: payload.city,
      area: payload.area,
      rentPrice: payload.rentPrice,
      bedrooms: payload.bedrooms,
      bathrooms: payload.bathrooms,
      isAvailable: payload.isAvailable ?? true,

      landlordId,
      categoryId: payload.categoryId,
    },
  });

  return result;
};

const getAllProperties = async () => {
  return prisma.property.findMany({
    include: {
      landlord: true,
      category: true,
    },
  });
};

const getSingleProperty = async (id: string) => {
  return prisma.property.findUniqueOrThrow({
    where: { id },
    include: {
      landlord: true,
      category: true,
    },
  });
};

const updateProperty = async (id: string, payload: IUpdatePropertyPayload) => {
  const { categoryId, ...propertyData } = payload;

  // const data = {
  //   ...propertyData,
  //   ...(categoryId && {
  //     category: {
  //       connect: {
  //         id: categoryId,
  //       },
  //     },
  //   }),
  // };

  // return prisma.property.update({
  //   where: { id },
  //   data,
  // });
};

const deleteProperty = async (id: string) => {
  return prisma.property.delete({
    where: {
      id,
    },
  });
};

export const PropertyService = {
  createPropertyIntoDB,
  getAllProperties,
  getSingleProperty,
  updateProperty,
  deleteProperty,
};
