
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
      // doctors.belongsTo(model.departments, { foreignKey: 'dept_id', 
      // //as:'dept_id',
      // foreignKeyConstraint:true })
    }
  };
  doctors.init({
    name: DataTypes.STRING,
    dept_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'departments',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    isActive: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNo: DataTypes.BIGINT,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    qualification: DataTypes.STRING,
    experience: DataTypes.FLOAT,
    age: DataTypes.FLOAT,
    isAdmin: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    description: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'doctors',
    schema: 'healthcare'
  });
  return doctors;
};