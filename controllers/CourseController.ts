import { CourseService } from "../CourseService";

export class CourseController {
    static async create({
      title,
      description,
      duration,
      price,
    }: {
      title: string;
      description: string;
      duration: number;
      price?: number;
    }) {
      return await CourseService.create({ title, description, duration, price });
  }

  static async getById(id: number) {
    const course = await CourseService.findById(id);
    if (!course) throw new Error("не найден");
    return course;
  }

  static async getAll() {
    return await CourseService.findAll();
  }

  static async delete(id: number) {
    await CourseService.delete(id);
    return { message: "курс удален" };
  }

  static async update(
    id: number,
    data: {
      title?: string;
      description?: string;
      duration?: number;
      price?: number | null;
    }
  ) {
    return await CourseService.update(id, data);
  }
}