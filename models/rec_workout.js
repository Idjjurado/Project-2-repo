const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class rec_workout extends Model{}

rec_workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    animechar_id: {
      type: DataTypes.VARCHAR(30),
      references: {
        model: 'animechars',
        key: 'id',
      },
    },
    workoutname_id: {
      type: DataTypes.VARCHAR(30),
      references: {
        model: 'animechars',
        key: 'id',
      },
    },
    workoutschedule_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'goal_tracker',
        key: 'id'
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rec_workout',
  },
);

modeule.exports = rec_workout;