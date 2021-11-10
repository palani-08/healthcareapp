const {Sequelize, Model,DataTypes}= require('sequelize');
const sequelize = new Sequelize("postgres","postgres","password",{
  "host":"localhost",
  "dialect":"postgres"
})
class stories extends Model {
    
    static associate(models) {

    }
  };
  stories.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    author: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING
  }, 
  {
    sequelize,
    modelName: 'stories',
    schema:'healthcare'
});

//posting the data to db

module.exports =  {
    poststories: async (a,b,c,d,e,f,g)=>{
        console.log(a,b,c,d,e,f,g)
    
await stories.create({
    date:`${a}`,
    title:`${b}`,
    image:`${c}`,
    content:`${d}`,
    author: `${e}`,
    isActive: true,
    createdBy:`${f}`,
    updatedBy:`${g}`,
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
   schema:'healthcare'
    })
    },

 //get the stories to admin

    getstories: async ()=>{
 storiesTable = await stories.findAll({
    where: {
      isActive: true
    }
},
    {
   schema:'healthcare'
    }
 );
    return storiesTable;
},
//update stories
updateStories: async (a,b,c,d,e,f,g)=>{
 await stories.update({
    date:`${a}`,
    title:`${b}`,
    image:`${c}`,
    content:`${d}`,
    author: `${e}`,
    updatedBy:`${f}`
},
{
    where:{
        id:`${g}`
    }
},
{
schema:'healthcare'
}
);
return;
},

deleteStories: async (a)=>{
    await stories.update({
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