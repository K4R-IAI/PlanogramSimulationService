const express = require('express')
const fs =  require('fs');
const app = express();
var fileupload = require('express-fileupload') ;
const port = 3567;
const host = '0.0.0.0';
app.use(fileupload());

app.get('/runJava', (req, res) => 
{
    let jarFile     = './simulator.jar'
    let runCommand  = '/usr/bin/java -jar ' + jarFile 
    var exec = require('child_process').exec
    child = exec(runCommand, function (error, stdout, stderr) 
    {
        if(error !== null) 
        {
            console.log('exec error: ' + error);
        } 
        else 
        {
            console.log('stdout: ' + stdout);
        }
    })
    createfile();
    res.send("jar java executed !")
});

app.post("/setshelves",function(req,res,next)
{
    writefile(req,res);
    runjar(req,res);
})

app.get("/getproducts",function(req,res,next)
{
   sendfile(req,res);
})


var writefile = function(req,res)
{

   const file = req.files.shelvesMapping;
   file.mv("./files/json/"+file.name,function(err,result){if(err) throw err;})
}

var runjar= function(req,res)
{
    let jarFile     = './simulator.jar'
    let runCommand  = '/usr/bin/java -jar ' + jarFile 
    var exec = require('child_process').exec
    child = exec(runCommand, function (error, stdout, stderr) 
    {
        if(error !== null) 
        {
            console.log('exec error: ' + error);
        } 
        else 
        {
            console.log('stdout: ' + stdout);
        }
    })
    res.send("Shelves configured in the Simulator, so, product simulation can be requested !")
}

var sendfile= function(req,res)
{
    let filee = fs.readFileSync('./files/json/products.json');   
    let jsonfile = JSON.parse(filee);
    res.send(jsonfile)
}




app.listen(port);
console.log(`Running on http://${host}:${port}`);


