const {Sequelize, Model,DataTypes}= require('sequelize');
const sequelize = new Sequelize("postgres","postgres","password",{
  "host":"localhost",
  "dialect":"postgres"
})
class contacts extends Model {
    
    static associate(models) {

    }
  };
  contacts.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    email: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    location: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'contacts',
    schema:'healthcare'
});

//posting the data to db

module.exports =  {
    postcontact: async (a,b,c,d,e)=>{
        console.log(a,b,c,d,e)
    
await contacts.create({
    email:`${a}`,
    phone:`${b}`,
    location:`${c}`,
    isActive: true,
    createdBy:`${d}`,
    updatedBy:`${e}`,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
   schema:'healthcare'
    })
    },

 //get the contacts table to admin

    getcontact: async ()=>{
 contactTable = await contacts.findAll({
     
        where:{
            isActive: true
        },
     
 },
    {
   schema:'healthcare'
    }
 );
    return contactTable;
},

//update contact
updatecontact: async (a,b,c,d,e)=>{
 await contacts.update({
    email:`${a}`,
    phone:`${b}`,
    location:`${c}`,
    updatedBy:`${d}`
},
{
    where:{
        id:`${e}`
    }
},
{
schema:'healthcare'
}
);
return;
},

deletecontact: async (a)=>{
    await contacts.update({
     isActive: false
    },
       
   {
       where:{
           id:`${a}`
       }
   },
   {
   schema:'healthcare'
   }
   );
   return;
   }
  };