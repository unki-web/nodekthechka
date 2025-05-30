import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const CourseService = {
  async create(data: {
    title: string;
    description: string;
    duration: number;
    price?: number;
  }) {
    return await prisma.course.create({ data });
  },

  async findById(id: number) {
    return await prisma.course.findUnique({ where: { id } });
  },

  async findAll() {
    return await prisma.course.findMany();
  },

  async delete(id: number) {
    return await prisma.course.delete({ where: { id } });
  },

  async update(
    id: number,
    data: {
      title?: string;
      description?: string;
      duration?: number;
      price?: number | null;
      isActive?: boolean;
    }
  ) {
    return await prisma.course.update({
      where: { id },
      data,
    });
  },
};