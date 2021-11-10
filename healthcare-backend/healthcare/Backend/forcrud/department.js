const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("postgres", "postgres", "password", {
    "host": "localhost",
    "dialect": "postgres"
})

 class departments extends Model {
    static associate(models) {
    }
};
departments.init({
    id : { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
}, {
    sequelize,
    modelName: 'departments',
    schema: 'healthcare'
});

module.exports = {
    departments,
    postDept: async (a, b, c, d,e) => {
        console.log(a, b, c, d,e)
        await departments.create({
            name: `${a}`,
            image: `${b}`,
            description : `${c}`,
            createdBy: `${d}`,
            updatedBy: `${e}`,
            isActive : true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                schema: 'healthcare'
            }
        );
    },
    //to get the departments table for admin
    getDept: async () => {
       deptTable = await departments.findAll(
            {   
                where: {
                isActive : true
            },
                schema: 'healthcare'
            }
        );
        return deptTable;
    },
    updateDept: async (a, b,c,d,e) => {
     await departments.update({
            name: `${a}`,
            image: `${b}`,
            description : `${c}`,
            updatedBy: `${d}`,
        },
            {   where: {
                id: `${e}`
            },
                schema: 'healthcare'
            }
        );
        return ;
    },
    deleteDept: async (a) => {
        await departments.update({
            isActive: false
        },
               {   where: {
                   id: `${a}`
               },
                   schema: 'healthcare'
               }
        );
           return ;
       }
};

