import { DatabaseService } from "@fireenjin/sdk";

export default async function findTemplate(db: DatabaseService, id: string) {
  return db.find("templates", id);
}
