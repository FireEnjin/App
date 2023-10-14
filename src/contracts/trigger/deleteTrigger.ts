import { DatabaseService } from "@fireenjin/sdk";
import { Trigger } from "../../definitions";

export default async function deleteTemplate(
  db: DatabaseService,
  id: string
): Promise<Trigger> {
  return (await db.update("triggers", id, {
    tags: ["deleted"],
    deletedAt: new Date(),
  })) as Trigger;
}
