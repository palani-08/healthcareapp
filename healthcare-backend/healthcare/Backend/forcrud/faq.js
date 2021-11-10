const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("postgres", "postgres", "password", {
    "host": "localhost",
    "dialect": "postgres"
})
class faqs extends Model {
    static associate(models) {
    }
};
faqs.init({
    id : { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
}, {
    sequelize,
    modelName: 'faqs',
    schema: 'healthcare'
});

module.exports = {
    postFaq: async (a, b, c, d) => {
        console.log(a, b, c, d)
        await faqs.create({
            question: `${a}`,
            answer: `${b}`,
            createdBy: `${c}`,
            updatedBy: `${d}`,
            isActive : true,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                schema: 'healthcare'
            }
        );
    },
    //to get the faqs table for admin
    getFaq: async () => {
        faqTable = await faqs.findAll({   
                where: {
                isActive : true
            },
                schema: 'healthcare'
        });
        return faqTable;
    },
    updateFaq: async (a,b,c,d) => {
     await faqs.update({
        question: `${a}`,
        answer: `${b}`,
        updatedBy: `${c}`,
        },
            {   where: {
                id: `${d}`
            },
                schema: 'healthcare'
            }
        );
        return ;
    },
    deleteFaq: async (a) => {
        await faqs.update({
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