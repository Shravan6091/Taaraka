const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import the Sequelize instance

class Item extends Model {}

Item.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM('project', 'guide', 'bundle'),
    allowNull: false
  },
  locked: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  sequelize,
  modelName: 'Item',
});

module.exports = Item;
