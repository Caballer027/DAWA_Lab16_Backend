require('dotenv').config();
const { Sequelize } = require('sequelize'); // Importa Sequelize con S mayúscula

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Especifica el dialecto de la base de datos
    logging: false // Opcional: para no ver los logs de SQL en consola
  }
);

module.exports = sequelize; // Exporta la instancia de Sequelize