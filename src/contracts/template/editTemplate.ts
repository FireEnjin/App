import { DatabaseService } from "@fireenjin/sdk";
import { TemplateInput } from "../../definitions";

export default async function editTemplate(
  db: DatabaseService,
  id: string,
  data: TemplateInput
) {
  const { data: template } = await db.call("editTemplate")({ data, id });
  return template;
}
