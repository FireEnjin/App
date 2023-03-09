import { isValid, parseISO } from "date-fns";

/**
 * Paginate a collection to page results
 */
export default async function paginate<T>(
  ref: any,
  options: {
    orderBy?: string;
    limit?: number;
    next?: string;
    back?: string;
    whereEqual?: { [key: string]: any };
    whereLessThan?: { [key: string]: any };
    whereLessThanOrEqual?: { [key: string]: any };
    whereGreaterThan?: { [key: string]: any };
    whereGreaterThanOrEqual?: { [key: string]: any };
    whereArrayContains?: { [key: string]: any };
    whereArrayContainsAny?: { [key: string]: any };
    whereIn?: { [key: string]: any };
    timestamps?: boolean;
  } = {}
): Promise<T[]> {
  let query = ref;
  const operatorMap = {
    whereEqual: "==",
    whereLessThan: "<",
    whereLessThanOrEqual: "<=",
    whereGreaterThan: ">",
    whereGreaterThanOrEqual: ">=",
    whereArrayContains: "array-contains",
    whereArrayContainsAny: "array-contains-any",
    whereIn: "in",
  };

  if (options.orderBy) {
    for (const order of options.orderBy ? options.orderBy.split(",") : []) {
      const [orderBy, direction] = order.split(":");
      query = query.orderBy(orderBy, direction ? direction : "asc");
    }
  } else if (options.timestamps) {
    query = query.orderBy("createdAt", "desc");
  }

  for (const where of [
    "whereEqual",
    "whereLessThan",
    "whereLessThanOrEqual",
    "whereGreaterThan",
    "whereGreaterThanOrEqual",
    "whereArrayContains",
    "whereArrayContainsAny",
    "whereIn",
  ]) {
    let optWhere: any = (options as any)[where];
    if (optWhere) {
      optWhere = typeof optWhere === "string" ? JSON.parse(optWhere) : optWhere;
      for (const whereKey of Object.keys(optWhere)) {
        query = query.where(
          whereKey,
          (operatorMap as any)[where],
          isValid(parseISO(optWhere[whereKey]))
            ? new Date(Date.parse(optWhere[whereKey]))
            : optWhere[whereKey]
        );
      }
    }
  }

  if (options.next || options.back) {
    const params = (options?.next || options?.back || "").split(",");
    let key = 0;
    for (const value of params as any) {
      params[key] = isValid(parseISO(value))
        ? new Date(Date.parse(value))
        : value;
      key = key + 1;
    }
    query = query[options.next ? "startAfter" : "endBefore"](...params);
  }
  if (options.limit) {
    query = query.limit(+options.limit);
  }

  const output = [];
  const res = await query.get();
  for (const doc of res.docs) {
    const entity = { ...doc.data(), id: doc.id };
    if (entity.createdAt && options.timestamps) {
      entity.createdAt = (entity.createdAt.toDate() as Date).toISOString();
    }
    if (entity.updatedAt && options.timestamps) {
      entity.updatedAt = (entity.updatedAt.toDate() as Date).toISOString();
    }
    output.push(entity);
  }

  return output;
}
