export default function pick(sourceObject: any, keys: string[]) {
  const newObject: any = {};
  for (const key of keys) {
    if (!sourceObject?.[key]) continue;
    newObject[key] = sourceObject[key];
  }

  return newObject;
}
