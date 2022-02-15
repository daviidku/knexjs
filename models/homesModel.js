// Paso #1 traer la configuración del entorno de knex y detalles de conexión.
const knex = require("../config");

// Paso #2 Crear funciones para traer los datos de la base de datos.
const create = (bodyHome) => {
  return knex
    .insert(bodyHome)
    .returning([
      "home_id",
      "title",
      "description",
      "guests",
      "address",
      "is_available",
      "created_at",
    ])
    .into("homes");
};

// Paso #3 exportar mis funciones para que sean accesibles desde el controlador.
module.exports = {
  create,
};
