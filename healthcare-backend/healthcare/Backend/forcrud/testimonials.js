const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("postgres", "postgres", "password", {
    "host": "localhost",
    "dialect": "postgres"
})
class testimonials extends Model {

    static associate(models) {

    }
};
testimonials.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    image: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    story: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'testimonials',
        schema: 'healthcare'
    });

//posting the data to db

module.exports = {
    postTestimonials: async (a, b, c, d, e, f) => {
        console.log(a, b, c, d, e, f)
        await testimonials.create({

            image: `${a}`,
            name: `${b}`,
            description: `${c}`,
            story: `${d}`,
            isActive: true,
            createdBy: `${e}`,
            updatedBy: `${f}`,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                schema: 'healthcare'
            })
    },

    //get the testimonials table to admin

    getTestimonials: async () => {
        testimonialsTable = await testimonials.findAll({
            where: {
                isActive: true
            }
        },
            {
                schema: 'healthcare'
            }
        );
        return testimonialsTable;
    },
    //update stories
    updateTestimonials: async (a, b, c, d, e, f) => {
        await testimonials.update({

            image: `${a}`,
            name: `${b}`,
            description: `${c}`,
            story: `${d}`,
            updatedBy: `${e}`
        },
            {
                where: {
                    id: `${f}`
                }
            },
            {
                schema: 'healthcare'
            }
        );
        return;
    },

    deleteTestimonials: async (a) => {
        await testimonials.update({
            isActive: false
        },

            {
                where: {
                    id: `${a}`
                }
            },
            {
                schema: 'healthcare'
            }
        );
        return;
    }
};