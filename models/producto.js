const { DataTypes } = require('sequelize'); // Importa DataTypes desde sequelize
const sequelize = require('../db'); // Esto debe importar la instancia de Sequelize

const Producto = sequelize.define('producto', { // Ahora sequelize.define debería ser una función válida
  codProducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nomPro: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precioProducto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stockProducto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'producto',
  timestamps: false
});

module.exports = Producto;