const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize("postgres", "postgres", "password", {
    "host": "localhost",
    "dialect": "postgres"
})

const {departments} = require('../forcrud/department')

class doctors extends Model {
    static associate(departments) {
       // doctors.belongsTo(departments, { foreignKey: 'dept_id', foreignKeyConstraint:true })
    }
};
doctors.init({
    id : { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    dept_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        refernces : {
        model : 'department',
        key : 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
    name: DataTypes.STRING,
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

module.exports = {
    postDoc: async (a, b, c, d,e,f,g,h,i,j,k,l,m,n) => {
        console.log(a, b, c, d,e,f,g,h,i,j,k,l,m,n)
        await doctors.create({
            name: `${a}`,
            image: `${b}`,
            email : `${c}`,
            phoneNo: `${d}`,
            address: `${e}`,
            gender: `${f}`,
            qualification: `${g}`,
            experience: `${h}`,
            age: `${i}`,
            password:`${j}`,
            description: `${k}`,
            createdBy: `${l}`,
            updatedBy: `${m}`,
            dept_id:n,
            isActive : true,
            isAdmin: false,
            createdAt: new Date(),
            updatedAt: new Date()
        },
            {
                schema: 'healthcare'
            }
        );
    },
    //to get the doctors table for admin
    getDoc: async () => {
       docTable = await doctors.findAll(
            { 
            //     include:[{
            //     model: models.departments,
            //     required: true
            //  }],
                where: {
                isActive : true
            },
               schema: 'healthcare',
            },
            
        );
    let finalValueArray =[];
    for(i=0; i<docTable.length;i++){
         let eachDept = await departments.findAll({
            where:{
                id : docTable[i].dept_id
             },
             schema: 'healthcare',
        })
        let eachDocValue= {
            id: docTable[i].id,
            dept_id: docTable[i].dept_id,
            name : docTable[i].name,
            image: docTable[i].image,
            email : docTable[i].email,
            phoneNo:docTable[i].phoneNo,
            address: docTable[i].address,
            gender: docTable[i].gender,
            qualification:docTable[i].qualification,
            experience: docTable[i].experience,
            age:docTable[i].age,
            password:docTable[i].password,
            description: docTable[i].description,
            createdBy:docTable[i].createdBy,
            updatedBy: docTable[i].updatedBy,
            isAdmin: docTable[i].isAdmin, 
            departmentDetail : eachDept[0].name,
        } 

        finalValueArray.push(eachDocValue)
    }
        return finalValueArray;
    },
    updateDoc: async (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o) => {
     await doctors.update({
        name: `${a}`,
        image: `${b}`,
        email : `${c}`,
        phoneNo: `${d}`,
        address: `${e}`,
        gender: `${f}`,
        qualification: `${g}`,
        experience: `${h}`,
        age: `${i}`,
        password:`${j}`,
        description: `${k}`,
        updatedBy: `${l}`,
        dept_id:m,
        isAdmin:`${n}`,
        },
            {   where: {
                id: `${o}`
            },
                schema: 'healthcare'
            }
        );
        return ;
    },
    deleteDoc: async (a) => {
        await doctors.update({
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