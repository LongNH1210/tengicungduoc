//declare express library
const express = require('express');
//declare router (định tuyến) = set path for web
const router = express.Router();

//khai báo homepage (localhost:3000)
router.get('/', (req, res) => {
  //C1: respond bằng console
  //console.log("This is HomePage");
  //C2: respond với "send"
  //res.send("<h1>This is homepage</h1>");
  //C3: respond với "render" : render ra 1 web page hoàn chỉnh
  let year = 2024;
  let university = "Greenwich";
  res.render('index', {year, university});
})
router.get('/demo', (req, res) => {
  res.render('admin/fpt', { hn: "Ha Noi", vn: "Viet Nam"});
})
router.get('/hanoi', (req, res) => {
  res.render('greenwich/hn')
})
router.get('/hochiminh', (req, res) => {
  res.render('greenwich/hcm')
})
router.get('/danang', (req, res) => {
  res.render('greenwich/dn')
})
router.get('/cantho', (req, res) => {
  res.render('greenwich/ct')
})
router.get('/test', (req, res) => {
  let a = 2; //int
  let b = 3.14; //double
  let c = 'm'; //character
  let d = true; //boolean
  let e = ["Football", "Swimming", "Badminton"];
  res.render('test',
  {
    Interger: a,
    Double: b,
    Character: c,
    Boolean: d,
    sports: e,
    cities: ["Ha Noi", "HCM", "Danang"]
  }
  );
})


//export module => bắt buộc
module.exports = router;

