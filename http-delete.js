var http=require('http');

var options = {
  protocol:'http:',  
  host: 'localhost',
  port:3000,
  path: '/sampleDelete/10',
  method:'DELETE'  
};

var callback = function(response) {
  var str = '';
  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {  	
    str += chunk;
  });

  //once the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    console.log(str);
  });
}

var request=http.request(options, callback);

request.on('error', function(err) {
        // handle errors with the request itself
        console.error('Error with the request:', err.message);        
});

request.end();