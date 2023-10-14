import { DatabaseService } from "@fireenjin/sdk";
import { User, UserInput } from "../../definitions";

export default async function addUser(db: DatabaseService, data: UserInput) {
  const { data: user } = await db.call("addUser")({ data });
  return user as User;
}
