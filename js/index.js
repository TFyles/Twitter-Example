$(document).ready(function() {
	
	//need to initialise OAuth here
	OAuth.initialize('CgogcIklKsVJbhsTYS-CarzfAIg');
	alert(OAuth.getVersion());
	
	$('#searchButton').click(function(){
		search();
	})
});

function search() {
	console.log("working");
	//authorise
	OAuth.popup('twitter').done(function(result) {
		
		//authorisation successful 
		
		//need to get the search terms from the text box
		var search_terms = "...";

		//create an URL for the REST API call
		//The first bit of the url  - https://api.twitter.com - will automatically be included
		//so we just need the endpoint
		var url = "/1.1/search/tweets.json?q=" + "banana";
		
		//need to ensure that the URL is proberly encoded.
		url = encodeURI(url);
	
		
		result.get(url).done(
			
			function(data) {
		
		
				//its worked - do something with the resultant data
				alert(data);
		
			}).fail(function(err) {
  			
			//search broken
			
			});
    
	
		}).fail(
			
			function (err) {
      			//authorisation failed
		});


}





