import { DatabaseService } from "@fireenjin/sdk";
import { Template } from "../../definitions";

export default async function deleteTemplate(
  db: DatabaseService,
  id: string
): Promise<Template> {
  return (await db.update("templates", id, {
    tags: ["deleted"],
    deletedAt: new Date(),
  })) as Template;
}
