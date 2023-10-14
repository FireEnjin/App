import { DatabaseService } from "@fireenjin/sdk";

export default async function findComponent(db: DatabaseService, id: string) {
  const data = await db.find("components", id);
  if (!data) return null;
  return { ...data, id };
}
