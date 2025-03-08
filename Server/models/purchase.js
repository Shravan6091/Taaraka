
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import the Sequelize instance

class Purchase extends Model {}

Purchase.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  purchased_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Purchase',
});

module.exports = Purchase;
