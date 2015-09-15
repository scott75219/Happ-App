
function Map()
{
	$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=2122+P+St+NW+,+Washington,+DC&key=AIzaSyAdDocD5G6lwtZQR7UhKQaS2OQmq0mi0rw", function(data) {
    	var lat=data.results[0].geometry.location.lat;
    	var lng=data.results[0].geometry.location.lng;
    	var myLatLng = {lat: lat, lng: lng};

			var myLatlng = new google.maps.LatLng(lat, lng);
			var mapOptions = {
		    zoom: 17,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP 
			};
			var map = new google.maps.Map(document.getElementById("map"),
			    mapOptions);

			var marker = new google.maps.Marker({
		    position: myLatLng,
		    map: map,
		    title: 'Hello World!'
  			});	
	
	});

	document.getElementById("pic2").src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRdAAAAJsUEcq-6nn3uskXuH7pMthqkuSysD1wfG07P60TJu2j_d2nPEsSG0VJuDzPdKF-60JAzPfaLeak1Uy_0nIPfW-0TsMnLZRhksBAAnorMmvADBdy3ezpBd2cEebL6DRrdEhBY_P3XS7UWzFML_AnqC7WfGhSS7eyOHV6MxMLvHzL5yAnrRG8-fw&key=AIzaSyAdDocD5G6lwtZQR7UhKQaS2OQmq0mi0rw";

}



