import { DatabaseService } from "@fireenjin/sdk";
import { User, UserInput } from "../../definitions";

export default async function editUser(
  db: DatabaseService,
  id: string,
  data: UserInput
) {
  const output: Partial<User> = data;
  return db.update("users", id, output);
}
