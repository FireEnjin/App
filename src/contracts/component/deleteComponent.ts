import { DatabaseService } from "@fireenjin/sdk";

export default async function deleteComponent(
  db: DatabaseService,
  id: string
): Promise<any> {
  return (await db.update("components", id, {
    tags: ["deleted"],
    deletedAt: new Date(),
  })) as any;
}
