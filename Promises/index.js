const promise=require('promise');
const request=require('request');

function getData(){
	var reqData={
	url:'https://api.github.com/users/seeyara',
	headers: {
            'User-Agent': 'request'
}
	};

	return new Promise(function(resolve, reject){
		request.get(reqData, function(err, resp, body){
			if(err){
				reject(err);
			}else {
				resolve(body);
			}
		})
	})
}

getData().then(function(result){
console.log(result);
}, function(err){
	console.log(err);
})