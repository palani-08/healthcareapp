
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class faqs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  faqs.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'faqs',
    schema:'healthcare'
  });
  return faqs;
};