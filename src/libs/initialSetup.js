import Role from "../models/Role";

// Esto es un archivo de configuración inicial.
// Si es la primera vez que ejecuto el programa, se ejecuta, sinó, no

export const createRoles = async () => {
  try {
    const conut = await Role.estimatedDocumentCount();
    if (conut > 0) return;

    const values = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "moderator" }).save(),
      new Role({ name: "admin" }).save(),
    ]);
  } catch (error) {
    console.log(error);
  }
};
