

function getdata(){

    var input = $('#searchtext').empty().val()

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=rd6ZuFkNmQZZg8VfnK9VWXrr7KAPyINi&limit=25");

xhr.done(function(response) {
     console.log("success got data", response);
    
     var jiffs = response.data
    
     for (i in jiffs)
     {
     $('.inner').append("<img src='"+jiffs[i].images.original.url+"'>")
     }
    
    
    });

}    