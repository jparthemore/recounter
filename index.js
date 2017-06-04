const express = require('express'); //#include express
const myFirstServer = express(); //creating an express application
const port = 8080; //setting up port

myFirstServer.use(express.static(__dirname+'/public')); //tells where to find files needed to launch the app

//tell server what to listen for
// myFirstServer.get('/recounter', function(requestToServer, serverResponse){});
myFirstServer.get('/recounter',(requestToServer,serverResponse)=>{
  //serverResponse.send('Hi there I work!');//do this first just to check it's up and running before having server return index.html file  -sends http response
  //serverResponse.send(requestToServer.originalUrl);//this returns: /recounter
  //serverResponse.send(requestToServer.hostname);//this returns : localhost
  serverResponse.sendFile('public/html/index.html',{root:__dirname});
});

//have server actually listen
myFirstServer.listen(port,()=>{
  console.log("I'm up and listening on port", port);
});
