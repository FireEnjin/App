import { DatabaseService } from "@fireenjin/sdk";
// import setCache from "../../helpers/setCache";
// import isAdmin from "../../helpers/auth/isAdmin";
import { User } from "../..//definitions";

export default async function findUser(
  db: DatabaseService,
  id: string
  // useCache = false
): Promise<User> {
  // if (useCache && state?.users?.[id]) return state.users[id];
  const data = await db.find("users", id);
  // if (isAdmin()) data.account = await db.find("accounts", id);
  // state.users = { ...(state?.users || {}), [id]: data };
  // await setCache("floodteam:users", state.users);
  if (!data) return null;

  return { ...data, id };
}
