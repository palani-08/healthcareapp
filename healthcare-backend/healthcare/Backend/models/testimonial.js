
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testimonials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  testimonials.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    story: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'testimonials',
    schema:'healthcare'
  });
  return testimonials;
};