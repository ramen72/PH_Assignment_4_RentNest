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

const getAllPropertiesFromDB = async () => {
  const result = await prisma.property.findMany({
    include: {
      landlord: {
        omit: {
          password: true,
        },
      },
      category: true,
      amenities: true,
    },
    orderBy: [{ createdAt: "desc" }, { title: "asc" }],
  });
  return result;
};

const getSinglePropertyFromBD = async (id: string) => {
  return prisma.property.findUniqueOrThrow({
    where: { id },
    include: {
      landlord: true,
      category: true,
    },
  });
};

const updatePropertyIntoDB = async (
  id: string,
  payload: IUpdatePropertyPayload,
) => {
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

const deletePropertyFromDB = async (id: string) => {
  return prisma.property.delete({
    where: {
      id,
    },
  });
};

export const propertyService = {
  createPropertyIntoDB,
  getAllPropertiesFromDB,
  getSinglePropertyFromBD,
  updatePropertyIntoDB,
  deletePropertyFromDB,
};
