
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
      // departments.hasMany(model.doctors, {
      //   foreignKey:'dept_id',
      //  // as:'dept_id'
      // })
    }
  };
  departments.init({
    name: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'departments',
    schema:'healthcare'
  });
  return departments;
};