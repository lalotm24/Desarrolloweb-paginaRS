'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reflectiveStudio_DB extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reflectiveStudio_DB.init({
    email: DataTypes.STRING,
    fName: DataTypes.STRING,
    lName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reflectiveStudio_DB',
  });
  return reflectiveStudio_DB;
};