const {Client} = require('pg');
const {Models} = require('./models');
const connectionstring = 'postgres://postgres:ThiyagaraJ@13.233.140.230:5432/eform';
const client = new Client(connectionstring);
const Express = require('express');
const app = new Express();
var bodyParser = require('body-parser');
const employees_det = require('./models/employees_det');
const { response } = require('express');
var urlencode = bodyParser.json({extended:true})
client.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("connected")
})
app.post('/parse',urlencode,function(req,res){
return employees_det.create({
designation: req.body.position,
a_course: req.body.training,
b_ac_no: req.body.bank_ac_no,
b_group: req.body.blood_group,
bank_name: req.body.bank_name,
c_address: req.body.present_address,
c_no: req.body.contact_no,
dob: req.body.dob,
e_contact: req.body.e_contact,
emp_id: req.body.crayond_id,
emp_name: req.body.name,
exp_det: req.body.experience,
f_members: req.body.family_members,
f_name: req.body.father_name,
hsc: req.body.hsc,
l_known: req.body.language_known,
m_no: req.body.mobile_no,
mar_stat: req.body.maritial_status,
nominee: req.body.nominee,
p_address: req.body.permenant_address,
p_email: req.body.personal_email,
pg: req.body.pg,
s_s_l_c: req.body.sslc,
ug: req.body.ug,
ifsc_code: req.body.ifsc_code,
doj: req.body.doj,
c_person_1: req.body.contact_person_1,
c_person_2: req.body.contact_person_2,
id_mark: req.body.id_mark,
}).then(function(employees_det){
    if(employees_det){
        res.send(employees_det)
    }
    else{
        res.status(400).send('error inserting a record');
    }
})  
})
var server = app.listen(8000,function ()
{
    var host = server.address().address;
    var port = server.address().port;
})
