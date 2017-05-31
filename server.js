var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json({limit:'5mb'}));


var iso_lookup={"Germany":"DE","China":"CN","France":"FR","Japan":"JP","Russia":"RU"};

app.get('/iso/country/:country_name',function(req,res){
      if(iso_lookup.hasOwnProperty(req.params.country_name)){
        res.status(200).send({"iso":iso_lookup[req.params.country_name]});
      }else{
        res.status(404).send('Record does not exist');
      }
});

app.post('/samplePost',function(req,res){
  console.log("Post Body "+JSON.stringify(req.body));
  res.status(201).send(JSON.stringify(req.body));
});


app.put('/samplePut',function(req,res){
  console.log("Put Body "+JSON.stringify(req.body));
  res.status(200).send(JSON.stringify(req.body));
});


app.delete('/sampleDelete/:id',function(req,res){
  console.log("Id "+JSON.stringify(req.params.id));
  res.status(200).send({"message":"resource deleted"});
});

var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Catch the action at http://localhost:"+port);
});