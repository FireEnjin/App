import { DatabaseService } from "@fireenjin/sdk";

export default async function addComponent(db: DatabaseService, data: any) {
  return db.add("components", {
    ...data,
    createdAt: new Date() as any,
  });
}
