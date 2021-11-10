const express = require('express');
const appointment = require('./api/appointment');
const faq = require('./api/faq');
const department = require('./api/department');
const doctors = require('./api/doctors');
const stories = require('./api/stories');
const contacts = require('./api/contact');
const testimonials = require('./api/testimonials')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/api/appointment', appointment);
app.use('/api/faq',faq);
app.use('/api/department',department);
app.use('/api/doctors',doctors);
app.use('/api/stories', stories);
app.use('/api/contact', contacts);
app.use('/api/testimonials', testimonials);

app.listen(9000, ()=> console.log('listening on port 9000...'));
