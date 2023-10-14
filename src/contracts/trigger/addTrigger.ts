import { DatabaseService } from "@fireenjin/sdk";

export default async function addTrigger(db: DatabaseService, data: any) {
  return db.add("triggers", {
    ...data,
    createdAt: new Date() as any,
  });
}
