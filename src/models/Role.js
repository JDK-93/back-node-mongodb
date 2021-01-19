// Este esquema es para roles... Como crear una tabla solo para roles de usuario.
import { Schema, model } from "mongoose";
export const ROLES = ["user", "admin", "moderator"]
const roleSchema = new Schema(
  {
    name: String
  },
  {
    versionKey: false,
  }
);

export default model("Role", roleSchema);
