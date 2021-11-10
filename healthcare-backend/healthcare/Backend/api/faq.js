const express = require('express');
const cors = require('cors');
const router = express.Router();
const faqCrud = require('../forcrud/faq')
router.use(express.json()); 
router.use(cors());

router.post('/post', async (req,res)=>{
    data = {
        question : req.body.question,
        answer : req.body.answer,
        createdBy : req.body.createdBy,
        updatedBy : req.body.updatedBy
    }
    await faqCrud.postFaq(data.question,data.answer,data.createdBy,data.updatedBy)
    console.log(data);
     await res.json({message:"Newly created FAQ has been added", status:1})
})

//to get FAQ table for Admin 
router.get('/get', async(req,res)=>{
    data = await faqCrud.getFaq()
    await res.json(data);
    console.log(data)
    console.log('Data sent')
});

//to update an FAQ by Admin  
router.put('/update', async(req,res)=>{
    data = {
        question : req.body.question,
        answer : req.body.answer,
        updatedBy : req.body.updatedBy,
        id : req.body.id
    }
    await faqCrud.updateFaq(data.question,data.answer,data.updatedBy,data.id)
    await res.json({message:"FAQS Updated", status:1})
})

router.put('/delete', async(req,res)=>{
    data = {
        id: req.body.id
    }
    console.log(req.body)
    await faqCrud.deleteFaq(data.id)
    res.json({message:"FAQ deleted", status:1})
})

module.exports = router;