import { DatabaseService } from "@fireenjin/sdk";

export default async function editComponent(
  db: DatabaseService,
  id: string,
  data: any
) {
  const editedDoc = { ...data };

  return db.update("components", id, editedDoc);
}
