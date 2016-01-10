var users;
var usersArray; 
var userSessions;
var userID;


//User Info
var userName = $('userName');
var userImage = $('userImage');

//User Stats
var totalReads = $('totalReads');
var totalTime = $('totalTime');
var readingCompletion = $('readingCompletion');
var topSource = $('topSource');
var topGenre = $('topGenre');

//User Sessions
// var itemName = $('');
// var lengthRead = $('');
// var percentRead = $('');

$(document).ready(function(){
    loadUser();
    loadUserSessions();
    setUser();
    setUserInfo();
    postUserSessions();
});

function setUser(){
    userID = "recbdvi9JDvVY5ntC";
    
    for(var i = 0; i<users.length;i++){
        if(users.records[i]["id"] == userID){
            user = users.records[i];
        }
    }
}


function setUserInfo(){
    $(userName).text = user["fields"]["Name"];
}

function postUserSessions(){
    var startHTML = ("<<div class=/"feed-item/">")
			.concat("<div class="share">")
				.concat("<span class=/"twitter fa fa-twitter/"></span>")
				.concat("<span class=/"facebook fa fa-facebook/"></span>")
				.concat("<span class=/"wordpress fa fa-wordpress/"></span>")
			.concat("</div>")
			.concat("<a class=/"url/" href=/"/">")
				.concat("<h2 class=/"title/">Item Name</h2>")
				.concat("<a href="#" class=/"source/">The New York Times</a>")
			.concat("</a>")
			.concat("<div class="time-percent">")
				.concat("<span class=/"time fa fa-clock-o/">1m 20s</span>")
				.concat("<span class=/"percent fa fa-pie-chart/">70% Read</span>")
			.concat("</div>")
		.concat("</div>";")
    
}

function loadUser() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            users = xhttp.responseText;
            users = JSON.parse(users);
        }
    };
    xhttp.open("GET", "https://api.airtable.com/v0/appmOYXlT9Xpr8VLG/Users?api_key=keyNb38YSpAFdx34A", false);
    xhttp.send();
}

function loadUserSessions(){
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            userSessions = xhttp.responseText;
            userSessions = JSON.parse(userSessions);
        }
    };
    xhttp.open("GET", "https://api.airtable.com/v0/appmOYXlT9Xpr8VLG/Sessions?api_key=keyNb38YSpAFdx34A", false);
    xhttp.send();
}