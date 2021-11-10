const express = require('express');
const cors = require('cors');
const router = express.Router();
const appointmentCrud = require('../forcrud/appointment')
const nodemailer = require('nodemailer');
const { getTestimonials } = require('../forcrud/testimonials');
router.use(express.json()); 
router.use(cors());




router.post('/post', async (req,res)=>{
    data = {
        patientName : req.body.patientName,
        gender : req.body.gender,
        email : req.body.email,
        date : req.body.date,
        doctorName : req.body.doctorName,
        department : req.body.department
    }
    await appointmentCrud.postAppointment(data.patientName,data.gender,data.email,data.date,data.doctorName,data.department)
    console.log(data);
     await res.json({message:"Your request has been recorded, you will recieve an e-mail regarding status of your request",status:1})

    })
     


//to get appointment table for Admin 
router.get('/get', async(req,res)=>{
   
    data = await appointmentCrud.getAppointment()
    await res.json(data);
    console.log(data)
    console.log('Data sent')
});

//to change the status of appointment by Admin  
router.put('/update', async(req,res)=>{
    data = {
        status : req.body.status,
        id : req.body.id,
        email: req.body.email,
        doctorName: req.body.doctorName,
        date: req.body.date
    }
    console.log("req body.loading")
    console.log(req.body)
    await appointmentCrud.updateStatus(data.status,data.id)
    res.json({message : 'Status updated for the accepted/rejected appointment',status:1})

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user:"moristanhospital@gmail.com",
            pass:"12345@12345"
        }
        });
 if(data.status == true) {
let mailoptions = {
    from:'moristanhospital@gmail.com',
    to: data.email,
    subject:'Your Appointment',
    text:`Your Appointment with ${data.doctorName} is Successful on ${data.date},Thankyou for choosing Moristan`
}
console.log(`Your Appointment with ${data.doctorName} is Successful on ${data.date},Thankyou for choosing Moristan`)
transporter.sendMail(mailoptions, (err, data)=>{
if(err){
    console.log('error occored',err)
}else{
    console.log(' Accepcted mail sent')
    transporter.close();
}

})
 }
 else if(data.status == false) {
    let mailoptions = {
        from:'moristanhospital@gmail.com',
        to: data.email,
        subject:'Your Appointment',
        text:` Unfortunately, Your Appointment with ${data.doctorName} has been canceled on ${data.date}, Please choose another date, Thankyou for choosing Moristan`
    }
    transporter.sendMail(mailoptions, (err, data)=>{
    if(err){
        console.log('error occored',err)
    }else{
        console.log(' Rejected mail sent')
        transporter.close();
    }
    
    })
 }
})

module.exports = router;