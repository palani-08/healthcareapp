const express = require('express');
const cors = require('cors');
const router = express.Router();
const storiesCrud = require ('../forcrud/stories')
router.use(express.json()); 
router.use(cors());

router.post('/post', async (req,res)=>{
    data = {
        date : req.body.date,
        title : req.body.title,
        image:req.body.image,
        content:req.body.content,
        author:req.body.author,
        createdBy:req.body.createdBy,
        updatedBy:req.body.updatedBy
    }
    await storiesCrud.poststories(data.date,data.title,data.image,data.content,data.author,data.createdBy,data.updatedBy)
    console.log(data);
     await res.json({message:"Your story has been posted successfully", status:1})
})

//to get the stories tot the table 

 router.get('/get', async(req,res)=>{

    data = await storiesCrud.getstories()
    await res.json(data);
    console.log(data);
     console.log('stories sent')
 });

// //to change the stories by Admin  

router.put('/update', async(req,res)=>{
    data = {
        date : req.body.date,
        title : req.body.title,
        image:req.body.image,
        content:req.body.content,
        author:req.body.author,
        updatedBy:req.body.updatedBy,
        id:req.body.id
    }
    await storiesCrud.updateStories(data.date,data.title,data.image,data.content,data.author,data.updatedBy,data.id)
    console.log(data,'stories updated');
    res.json({message:"Stories Updated", status:1})
})

//to delete story
router.put('/delete',async(req,res)=>{
data={
    id:req.body.id
}
await storiesCrud.deleteStories(data.id)
console.log(data);
res.json({message: "Story Deleted",status:1});

})
module.exports = router;