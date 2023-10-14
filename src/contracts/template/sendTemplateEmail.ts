import { DatabaseService } from "@fireenjin/sdk";

export default async function sendTemplateEmail(
  db: DatabaseService,
  data: any
) {
  const { data: alert } = await db.call("sendTemplateEmail")({ data });
  return alert;
}
