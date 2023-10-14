import { DatabaseService } from "@fireenjin/sdk";
import addTemplate from "./contracts/template/addTemplate";
import editTemplate from "./contracts/template/editTemplate";
import deleteTemplate from "./contracts/template/deleteTemplate";
import sendTemplateEmail from "./contracts/template/sendTemplateEmail";
import addTrigger from "./contracts/trigger/addTrigger";
import editTrigger from "./contracts/trigger/editTrigger";
import deleteTrigger from "./contracts/trigger/deleteTrigger";
import addComponent from "./contracts/component/addComponent";
import deleteComponent from "./contracts/component/deleteComponent";
import editComponent from "./contracts/component/editComponent";

export default function submitController(db: DatabaseService) {
  return async (endpoint, input: any) => {
    const data = input?.data || input?.params?.data;
    const id = input?.id || input?.params?.id;
    if (endpoint === "addTemplate") {
      return {
        addTemplate: await addTemplate(db, data),
      };
    } else if (endpoint === "editTemplate") {
      const template = await editTemplate(db, id, data);
      return {
        editTemplate: template,
      };
    } else if (endpoint === "deleteTemplate") {
      const template = await deleteTemplate(db, id);
      return {
        deleteTemplate: template,
      };
    } else if (endpoint === "addComponent") {
      return {
        addComponent: await addComponent(db, data),
      };
    } else if (endpoint === "editComponent") {
      return {
        editComponent: await editComponent(db, id, data),
      };
    } else if (endpoint === "deleteComponent") {
      return {
        deleteComponent: await deleteComponent(db, id),
      };
    } else if (endpoint === "sendTemplateEmail") {
      return {
        sendTemplateEmail: await sendTemplateEmail(db, data),
      };
    } else if (endpoint === "addTrigger") {
      return {
        addTrigger: await addTrigger(db, data),
      };
    } else if (endpoint === "editTrigger") {
      const template = await editTrigger(db, id, data);
      return {
        editTrigger: template,
      };
    } else if (endpoint === "deleteTrigger") {
      const template = await deleteTrigger(db, id);
      return {
        deleteTrigger: template,
      };
    }
  };
}
