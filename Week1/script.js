
let buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", function() {      
        console.log("you clicked me!");                                         // added an event listener 
});


//LEFT PART, LIST OF REPOSITORIES

function calLAPI(){
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
        request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'https://api.github.com/orgs/HackYourFuture/repos');
request.onreadystatechange = function() {
    if ((request.readyState===4) && (request.status===200)) {
        var items = JSON.parse(request.response);
        console.log(items);
        
        let infoHYF = document.getElementById("leftSide");
        infoHYF.innerHTML = "";
        
        let ulEl = document.createElement("ul");
        infoHYF.appendChild(ulEl);

            
        for(let key of items) {
            //console.log(key);
            let listEl = document.createElement("li");
            listEl.innerHTML = '<a href="' + key.url +'"target="_blank">'+ key.name  +'</a>';
            ulEl.appendChild(listEl);                 
        }
        
        //ADDED PARTS  //ADDED PARTS  //ADDED PARTS  //ADDED PARTS  //ADDED PARTS
        //BELOW BELOW  //BELOW BELOW  //BELOW BELOW  //BELOW BELOW  //BELOW BELOW
        //BELOW BELOW  //BELOW BELOW  //BELOW BELOW  //BELOW BELOW  //BELOW BELOW
        
        let numForks = [];
        let numIssues = [];
        let numWatchers = [];
        
        // Make array of number of Tasks above
        for(let key of items) {
            numForks.push(key.forks);
            numIssues.push(key.open_issues);
            numWatchers.push(key.watchers);
        }
        
        // find total number of tasks
        let totalForks = numForks.reduce( (a,b) => a+b);
        let totalIssues = numIssues.reduce( (a,b) => a+b);
        let totalWatchers = numWatchers.reduce( (a,b) => a+b);
        
        // find total number of noTasks
        let noForks = numForks.filter((a) => a == 0).length;
        let noIssues = numIssues.filter((a) => a == 0).length;
        let noWatchers = numWatchers.filter((a) => a == 0).length;
        
        
        let statsEl = document.createElement("p");
            statsEl.innerHTML = 'STATS <br>Total Forks : ' + totalForks + ' <br>Total Issues : ' + totalIssues +
                                '<br>Total Watchers : ' + totalWatchers + '<br>Number of no-Forked Repos : ' + noForks + 
                                '<br>Number of no-Watched Repos : ' + noIssues + '<br>Number of no-Issued Repos : ' + noWatchers ;
                                
        infoHYF.appendChild(statsEl);
        
        
        //ABOVE ABOVE  //ABOVE ABOVE  //ABOVE ABOVE  //ABOVE ABOVE  //ABOVE ABOVE
        //ABOVE ABOVE  //ABOVE ABOVE  //ABOVE ABOVE  //ABOVE ABOVE  //ABOVE ABOVE
        //ADDED PARTS  //ADDED PARTS  //ADDED PARTS  //ADDED PARTS  //ADDED PARTS
        
    }
}
request.send();  
}

buttonEl.addEventListener("click", calLAPI);                                 // calling the function by eventlistener 



// RIGHT PART, CONTRIBUTERS OF RESPECTED REPOSITORIES


let buttonEl2 = document.getElementById("button2");
let input = document.getElementById("input");

function calLAPI2(inputValue){
    let request;
    inputValue = input.value;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
            request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', 'https://api.github.com/repos/HackYourFuture/' + inputValue + '/contributors');
    request.onreadystatechange = function() {        
        if ((request.readyState===4) && (request.status===200)) {
            var items = JSON.parse(request.response);
            console.log(items);
             
            let infoHYF = document.getElementById("rightSide");
                        
            let contributers = "";
            
            for (i in items) {
                contributers += "#  "+ items[i].login + '<br>';            
            }
            
            infoHYF.innerHTML = '<strong>' + inputValue.toUpperCase() + ' CONTRIBUTORS </strong><br><br>' + contributers ;
            
            } else if((request.readyState!==4) && (request.status!==200)) {
                
                alert("SORRY, THERE IS NO SUCH REPOSITORY")
                let err = document.getElementById("rightSide");
                err.innerHTML ="SORRY, THERE IS NO SUCH REPOSITORY";
            }
    }
    request.send();  
}

buttonEl2.addEventListener("click", calLAPI2); 





