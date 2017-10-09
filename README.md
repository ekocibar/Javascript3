# Javascript3

# Synopsis
JavaScript Week 7-9 Projects. 

# Code Example
function calLAPI(){
var request;
request.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos');
request.onreadystatechange = function() {
    if ((request.readyState===4) && (request.status===200)) {
        var items = JSON.parse(request.response);
        console.log(items);    
    }
}
request.send();  
}

# Motivation

To get basic knowledge on methods, calling APIs, using JSON


# Contributors

Enes Kocibar

# License

No licence
