const express = require('express')
const fs =  require('fs');
const app = express();
var fileupload = require('express-fileupload') ;
const port = 3000;
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
            console.log('exec error: ' + error)
        } 
        else 
        {
            console.log('stdout: ' + stdout);
        }
    })
    createfile();
    res.send("jar java executed !")
});

app.post("/setshelf",function(req,res,next)
{
   const file = req.files.shelvesMapping;
   file.mv("./files/json/"+file.name,function(err,result)
	{if(err) throw err;	
	
   })

    let jarFile     = './simulator.jar'
    let runCommand  = '/usr/bin/java -jar ' + jarFile 
    var exec = require('child_process').exec
    child = exec(runCommand, function (error, stdout, stderr) 
    {
        if(error !== null) 
        {
            console.log('exec error: ' + error)
        } 
        else 
        {
            console.log('stdout: ' + stdout);
        }
    })

	
	let file = fs.readFileSync('./files/json/products.json'),    
        let jsonfile = JSON.parse(file);
        res.send(jsonfile)
 
})

var createfile = function()
{
fs.writeFileSync('./files/write.txt',"adding piped Data");
}




app.listen(port);
console.log(`Running on http://${host}:${port}`);


