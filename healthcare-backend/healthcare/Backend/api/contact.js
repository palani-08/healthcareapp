const express = require('express');
const cors = require('cors');
const router = express.Router();
const contactCrud = require ('../forcrud/contact')
router.use(express.json()); 
router.use(cors());

router.post('/post', async (req,res)=>{
    data = {
        email : req.body.email,
        phone : req.body.phone,
        location: req.body.location,
        isActive: req.body.isActive,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    }
    await contactCrud.postcontact(data.email,data.phone,data.location,data.isActive,data.createdBy,data.updatedBy)
    console.log(data);
     await res.json({message: "Your contact has been posted successfully", status:1})
})

//to get the contact to the table 

 router.get('/get', async(req,res)=>{

    data = await contactCrud.getcontact()
    await res.json(data);
    console.log(data);
     console.log('contact sent')
 });

// //to change the contact by Admin  

router.put('/update', async(req,res)=>{
    data = {
        email : req.body.email,
        phone : req.body.phone,
        location: req.body.location,
        updatedBy: req.body.updatedBy,
        id: req.body.id
    }
    await contactCrud.updatecontact(data.email,data.phone,data.location,data.updatedBy,data.id)
    console.log(data,'contact updated');
    res.json({message:"contact Updated", status:1})
})

//to delete contact
router.put('/delete',async(req,res)=>{
data={
    id:req.body.id
}
await contactCrud.deletecontact(data.id)
console.log(data);
res.json({message:"Contact Deleted",status:1});

})
module.exports = router;