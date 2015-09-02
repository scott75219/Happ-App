function Get_detail(){
		jQuery.ajax({ 
						url:'php/Get_Detail.php',
						 type:'GET',	
						success: function(response){
							  var d = new Date();
							  var n = d.getDay();
							  var Today="";
							  var info = JSON.parse(response);
							  for (var i = 0; i < info.length; i++) { 
								  if (info[i][n]!="-"){
								  		Today+=info[i].Item+" at "+info[i][n]+"<br />"; 
								  }
							   }
							   var address=info[0].Street+",<br />"+info[0].City+", "+info[0].State+" "+info[0].Zipp+"<br />";
							   document.getElementById("name").innerHTML=info[0].Name;
							   document.getElementById("happyStuff").innerHTML=Today;
							   document.getElementById("address").innerHTML=address;

							   for (var i = 1; i <= 7; i++) {
							   		var HH=""; 
								   for (var j = 0; j < info.length; j++) { 
									  if (info[j][n]!="-"){
									  		HH+=info[j].Item+" at "+info[j][n]+"<br />"; 
									  }
								   }
								   	 document.getElementById(i).innerHTML=HH;
								}
							Map(parseFloat(info[0].Lat),parseFloat(info[0].Lng));
							Pic("pic2",info[0].Pic);

						},
						error: function (response, status, err) {
							console.log("Failure!");
							console.log(response.responseText);
						}
					});


}
function Map(Lat,Lng)
{
//	$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=2122+P+St+NW+,+Washington,+DC&key=AIzaSyAdDocD5G6lwtZQR7UhKQaS2OQmq0mi0rw", function(data) {
    	//var lat=data.results[0].geometry.location.lat;
    	//var lng=data.results[0].geometry.location.lng;
    	var myLatLng = {lat: Lat, lng: Lng};

			var myLatlng = new google.maps.LatLng(Lat, Lng);
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
	
//	});


}

function Pic(ID,Reference){

console.log(Reference);
		document.getElementById(ID).src="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+Reference+"&key=AIzaSyAdDocD5G6lwtZQR7UhKQaS2OQmq0mi0rw";

}


