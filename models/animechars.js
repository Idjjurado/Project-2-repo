const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Animechars extends Model{}

Animechars.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    charname: {
      type: DataTypes.VARCHAR(40),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    recworkout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'rec_workout',
        key: 'id'
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'animechars',
  }
);

module.exports = Animechars;