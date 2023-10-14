import { DatabaseService } from "@fireenjin/sdk";
import Fuse from "fuse.js";
import { ListQueryInput, User } from "../../definitions";

export default async function listUsers(
  db: DatabaseService,
  { tags, limit, next, query }: ListQueryInput
) {
  const where: any[] = [];
  if (tags?.length)
    where.push({
      key: "tags",
      conditional: "array-contains-any",
      value: tags,
    });
  const startAfter = next?.length && (await db.getDocument("users", next));
  const { firstName, lastName } = startAfter?.data?.() || {};
  let users = (await db.list(
    "users",
    where,
    "firstName:asc,lastName:asc",
    query ? null : limit,
    startAfter && {
      startAfter: [firstName, lastName],
    }
  )) as User[];
  if (query?.length) {
    const fuse = new Fuse(users, {
      keys: ["firstName", "lastName", "address.full", "email", "phone"],
    });
    users = await fuse.search(query, { limit }).map((result) => result?.item);
  }
  if (!users) return null;

  return users;
}
