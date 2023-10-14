import { DatabaseService } from "@fireenjin/sdk";

export default async function deleteUser(db: DatabaseService, id: string) {
    return db.delete("users", id);
}