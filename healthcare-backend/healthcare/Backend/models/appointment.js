
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  appointments.init({
    patientName: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.STRING,
    doctorName: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    department: DataTypes.STRING,
    status:DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'appointments',
    schema:'healthcare'
  });
  return appointments;
};