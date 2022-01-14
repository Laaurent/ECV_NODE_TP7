'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post, {
        foreignKey: {
          name: 'authorId',
          type: DataTypes.UUID,
        }
      });
      User.hasMany(models.Comment, {
        foreignKey: {
          name: 'authorId',
          type: DataTypes.UUID,
        }
      });
      User.belongsTo(models.Role);
    }
  };
  User.init({
    id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       primaryKey: true,
    },
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    github_url: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
