const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("postgres", "postgres", "password", {
    "host": "localhost",
    "dialect": "postgres"
})
class appointments extends Model {
    static associate(models) {
    }
};
appointments.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    patientName: DataTypes.STRING,
    gender: DataTypes.STRING,
    email: DataTypes.STRING,
    date: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    doctorName: DataTypes.STRING,
    department: DataTypes.STRING,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
}, {
    sequelize,
    modelName: 'appointments',
    schema: 'healthcare'
});

module.exports = {
    postAppointment: async (a, b, c, d, e, f) => {
        console.log(a, b, c, d, e, f)
        await appointments.create({
            patientName: `${a}`,
            gender: `${b}`,
            email: `${c}`,
            date: `${d}`,
            doctorName: `${e}`,
            department: `${f}`,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                schema: 'healthcare'
            }
        );
    },
    //to get the appointments table for admin
    
    getAppointment: async () => {
        appointmentTable = await appointments.findAll({
            attributes: ['id','patientName', 'gender','email','date','doctorName','status','department']
        },
            {
                schema: 'healthcare'
            }
        );
        return appointmentTable;
    },
    updateStatus: async (a, b) => {
     await appointments.update({
            status: `${a}`
        },
            {   where: {
                id: `${b}`
            },
                schema: 'healthcare'
            }
        );
        return ;
    }
};
