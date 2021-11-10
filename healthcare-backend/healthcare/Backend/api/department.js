const express = require('express');
const cors = require('cors');
const router = express.Router();
const deptCrud = require('../forcrud/department')
router.use(express.json()); 
router.use(cors());

router.post('/post', async (req,res)=>{
    data = {
        name : req.body.name,
        image : req.body.image,
        description : req.body.description,
        createdBy : req.body.createdBy,
        updatedBy : req.body.updatedBy
    }
    await deptCrud.postDept(data.name,data.image,data.description,data.createdBy,data.updatedBy)
    console.log(data);
     await res.json({message:"Newly created Department has been added",status:1})
})

//to get Department table for Admin 
router.get('/get', async(req,res)=>{
    data = await deptCrud.getDept()
    await res.json(data);
    console.log(data)
    console.log('Data sent')
});

//to update a Department by Admin  
router.put('/update', async(req,res)=>{
    data = {
        name : req.body.name,
        image : req.body.image,
        description : req.body.description,
        updatedBy : req.body.updatedBy,
        id : req.body.id
    }
    await deptCrud.updateDept(data.name,data.image,data.description,data.updatedBy,data.id)
    await res.json({message:"Department Updated",status:1})
})

router.put('/delete', async(req,res)=>{
    data = {
        id: req.body.id
    }
    await deptCrud.deleteDept(data.id)
    await res.json({message:"Department Deleted",status:1})
})

module.exports = router;