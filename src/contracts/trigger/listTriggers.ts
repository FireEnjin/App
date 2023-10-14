import { DatabaseService } from "@fireenjin/sdk";
import Fuse from "fuse.js";
import { ListQueryInput } from "../../definitions";

export default async function listTriggers(
  db: DatabaseService,
  {
    tags,
    limit,
    orderBy,
    orderDirection,
    next,
    query,
    ids,
  }: ListQueryInput & { ids?: string[] }
) {
  const where: any[] = [];
  if (ids?.length)
    where.push({
      key: "id",
      conditional: "in",
      value: ids,
    });
  if (tags?.length)
    where.push({
      key: "tags",
      conditional: "array-contains-any",
      value: tags,
    });
  const startAfter = next?.length && (await db.getDocument("triggers", next));
  console.log(startAfter);
  let triggers = await db.list(
    "triggers",
    where,
    `${orderBy || "createdAt"}:${orderDirection || "desc"}`,
    limit,
    startAfter && {
      startAfter: startAfter?.data?.()?.createdAt,
    }
  );
  if (query?.length) {
    const fuse = new Fuse(triggers, {
      keys: ["name"],
    });
    triggers = await fuse.search(query).map((result) => result?.item);
  }
  if (!triggers) return null;

  return triggers;
}
