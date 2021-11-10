
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('doctors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dept_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
        model : 'departments',
        key : 'id',
        as:'dept_id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      name: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      image: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNo: {
        type: Sequelize.BIGINT
      },
      address: {
        type: Sequelize.STRING
      },
      gender: {
        type: Sequelize.STRING
      },
      qualification: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.FLOAT
      },
      age: {
        type: Sequelize.FLOAT
      },
      isAdmin: {
        type: Sequelize.BOOLEAN
      },
      password: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdBy: {
        type: Sequelize.STRING
      },
      updatedBy: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, 
    {
      schema:'healthcare'
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('doctors');
  }
};