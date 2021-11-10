const express = require('express');
const cors = require('cors');
const router = express.Router();
const testimonialsCrud = require ('../forcrud/testimonials')
router.use(express.json()); 
router.use(cors());

router.post('/post', async (req,res)=>{
    data = {
        image:req.body.image,
        name:req.body.name,
        description:req.body.description,
        story: req.body.story,
        createdBy:req.body.createdBy,
        updatedBy:req.body.updatedBy
    }
    await testimonialsCrud.postTestimonials(data.image,data.name,data.description,data.story,data.createdBy,data.updatedBy)
    console.log(data);
     await res.json({message:"Your testimonial has been posted successfully", status:1})
})

//to get the testimonials table for admin 

 router.get('/get', async(req,res)=>{

    data = await testimonialsCrud.getTestimonials()
    await res.json(data);
    console.log(data);
     console.log('testimonials sent')
 });

// //to change the status of appointment by Admin  

router.put('/update', async(req,res)=>{
    data = {
        image:req.body.image,
        name:req.body.name,
        description:req.body.description,
        story: req.body.story,
        updatedBy:req.body.updatedBy,
        id:req.body.id
    }
    await testimonialsCrud.updateTestimonials(data.image,data.name,data.description,data.story,data.updatedBy,data.id)
    console.log(data,'testimonials updated');
    res.json({message:"testimonials Updated",status:1})
})

//to delete testmonial
router.put('/delete',async(req,res)=>{
data={
    id:req.body.id
}
await testimonialsCrud.deleteTestimonials(data.id)
console.log(data);
res.json({message:"Testimonial Deleted",status:1});

})
module.exports = router;