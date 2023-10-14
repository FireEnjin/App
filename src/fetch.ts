import findUser from "./contracts/user/findUser";
import listUsers from "./contracts/user/listUsers";
import listTriggers from "./contracts/trigger/listTriggers";
import findTrigger from "./contracts/trigger/findTrigger";
import findTemplate from "./contracts/template/findTemplate";
import listTemplates from "./contracts/template/listTemplates";
import { DatabaseService } from "@fireenjin/sdk";

export default function fetchController(db: DatabaseService) {
  return async (endpoint, input: any) => {
    if (endpoint === "findUser") {
      return {
        user: await findUser(db, input.id),
      };
    } else if (endpoint === "listUsers") {
      return {
        users: await listUsers(db, input),
      };
    } else if (endpoint === "findTrigger") {
      return {
        trigger: await findTrigger(db, input.id),
      };
    } else if (endpoint === "listTriggers") {
      return {
        triggers: await listTriggers(db, input),
      };
    } else if (endpoint === "findTemplate") {
      return {
        template: await findTemplate(db, input.id),
      };
    } else if (endpoint === "listTemplates") {
      return {
        templates: await listTemplates(db, input),
      };
    }
  };
}
