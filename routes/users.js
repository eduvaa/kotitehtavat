var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log("heiheihei")
});

router.get ('/toka',function(request,response)
{
  
  response.send("hei olen toka")
  console.log("toka täälläkin")

});

router.get ('/kolmas/:nimi',function(request,response)
{
  
  response.send("hei olen " +request.params.nimi);
  console.log(request.params.nimi);

});
router.get ('/nelja/:enimi/:snimi',function(request,response)
{
  
  response.send("hei olen " +request.params.enimi+" "+request.params.snimi);
  //console.log(request.params.nimi);

});

router.post('/',function(request,response)
{
  response.send(request.body);
})
module.exports = router;
