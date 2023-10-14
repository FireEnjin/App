import { DatabaseService } from "@fireenjin/sdk";

export default async function editTrigger(
  db: DatabaseService,
  id: string,
  data: any,
) {
  const editedTrigger = { ...data };

  return db.update("triggers", id, editedTrigger);
}
