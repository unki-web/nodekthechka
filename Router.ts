import { Elysia, t } from "elysia";
import { CourseController } from "./controllers/CourseController";

export class Router {
  static courses = new Elysia()
   
    .post(
      "/",
      ({ body }) => CourseController.create(body),
      {
        body: t.Object({
          title: t.String(),
          description: t.String(),
          duration: t.Number(),
          price: t.Optional(t.Number()),
        }),
      }
    )
   
    .get(
      "/:id",
      ({ params: { id } }) => CourseController.getById(Number(id)),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
    
    .get("/", () => CourseController.getAll())
   
    .delete(
      "/:id",
      ({ params: { id } }) => CourseController.delete(Number(id)),
      {
        params: t.Object({
          id: t.String(),
        }),
      }
    )
 
    .patch(
      "/:id",
      ({ params: { id }, body }) => CourseController.update(Number(id), body),
      {
        params: t.Object({
        id: t.String(),
        }),
        body: t.Object({
        title: t.Optional(t.String()),
        description: t.Optional(t.String()),
        duration: t.Optional(t.Number()),
        price: t.Optional(t.Union([t.Number(), t.Null()])),
        }),
    }
  );
}