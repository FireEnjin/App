import { DatabaseService } from "@fireenjin/sdk";
import { TemplateInput } from "../../definitions";

export default async function addTemplate(
  db: DatabaseService,
  data: TemplateInput
) {
  const { data: template } = await db.call("addTemplate")({ data });
  return template;
}
