import { DatabaseService } from "@fireenjin/sdk";

export default async function findTrigger(db: DatabaseService, id: string) {
  const data = await db.find("triggers", id);
  if (!data) return null;
  return { ...data, id };
}
