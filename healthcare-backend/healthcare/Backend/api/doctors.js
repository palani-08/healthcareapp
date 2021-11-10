const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs')
const router = express.Router();
const docCrud = require('../forcrud/doctors');
const { param } = require('./department');
router.use(express.json()); 
router.use(cors());

async function validaData(params){
        if(params.name==undefined ||   params.name=="" ||  params.name=="undifined"){
            return false;
        }else if(params.email==undefined ||   params.email=="" ||  params.email=="undifined"){
            return false
        }
}
router.post('/post', async (req,res)=>{
    let validater = validaData(req.body)
    if(validater!=false){
        data = {
            name : req.body.name,
            image : req.body.image,
            email:req.body.email,
            phoneNo:req.body.phoneNo,
            address:req.body.address,
            gender:req.body.gender,
            qualification:req.body.qualification,
            experience:req.body.experience,
            age:req.body.age,
            password: req.body.password,
            description : req.body.description,
            createdBy : req.body.createdBy,
            updatedBy : req.body.updatedBy,
            dept_id: req.body.dept_id
        }
        await docCrud.postDoc(data.name,data.image,data.email,
            data.phoneNo,data.address,data.gender,
            data.qualification,data.experience,
            data.age,data.password,
            data.description,data.createdBy,
            data.updatedBy,data.dept_id)
            console.log(data);
          res.json({message:"Newly created Doctor has been added", status:1})
    }else{
        res.json({message:"Invalid data"})
    }
    
})

//to get Doctors table for Admin 
router.get('/get', async(req,res)=>{
    data = await docCrud.getDoc()
    res.json(data);
    console.log(data)
    console.log('Data sent')
});

//to update a Doctor by Admin  
router.put('/update', async(req,res)=>{
    data = {
        name : req.body.name,
        image : req.body.image,
        email:req.body.email,
        phoneNo:req.body.phoneNo,
        address:req.body.address,
        gender:req.body.gender,
        qualification:req.body.qualification,
        experience:req.body.experience,
        age:req.body.age,
        password: req.body.password,
        description : req.body.description,
        updatedBy : req.body.updatedBy,
        dept_id: req.body.dept_id,
        isAdmin : req.body.isAdmin,
        id : req.body.id
    }
    await docCrud.updateDoc(data.name,data.image,data.email,
        data.phoneNo,data.address,data.gender,
        data.qualification,data.experience,
        data.age,data.password,
        data.description,
        data.updatedBy,data.dept_id,
        data.isAdmin, data.id)
    res.json({message :"Doctor Data Updated",status:1})
})

router.put('/delete', async(req,res)=>{
    data = {
        id: req.body.id
    }
    await docCrud.deleteDoc(data.id)
    res.json({message:"Doctor has been deleted",status:1})
})

module.exports = router;