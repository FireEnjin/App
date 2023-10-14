import { FireEnjinModel, Model } from "@fireenjin/orm";
import driver from "../helpers/firestoreDriver";

@Model()
export default class User extends FireEnjinModel<User>({
  driver,
  // hooks: {
  //   beforeWrite: async (data) => {
  //     console.log(data);
  //     return { fuck: "you" };
  //   },
  // },
}) {
  /**
   * The person's first name
   */
  firstName: string;
  /**
   * The person's last name
   */
  lastName?: string;
  /**
   * The photo for the person
   */
  photo?: string;
  /**
   * The user's primary email address
   */
  email?: string;
}
