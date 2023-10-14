import { DatabaseService } from "@fireenjin/sdk";
import Fuse from "fuse.js";
import { ListQueryInput } from "../..//definitions";

export default async function listTemplates(
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
  const startAfter = next?.length && (await db.getDocument("templates", next));
  let templates = await db.list(
    "templates",
    where,
    `${orderBy || "createdAt"}:${orderDirection || "desc"}`,
    limit,
    startAfter && {
      startAfter: startAfter?.data?.()?.createdAt,
    }
  );
  if (query?.length) {
    const fuse = new Fuse(templates, {
      keys: ["name"],
    });
    templates = await fuse.search(query).map((result) => result?.item);
  }
  if (!templates) return null;

  return templates;
}
