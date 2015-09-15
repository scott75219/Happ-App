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

function Get_List()
{
var list="";
var x=0;
var d = new Date();
var n = d.getDay();
		jQuery.ajax({ 
						url:'php/Get_List.php',
						type:'GET',
						data:{date:n},	
						success: function(response){
							
							var Today="";
							var info = JSON.parse(response);
							id=info[0].ID;
							for (var i = 0; i < info.length; i++) 
							{ 
								  	if(id!=info[i].ID||i==info.length-1)
								  	{
								  		list+="<li>"+
										"<div><img class=\"rec\" id="+x+" src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+info[i-1].Pic+"&key=AIzaSyAdDocD5G6lwtZQR7UhKQaS2OQmq0mi0rw></img></div>"+
											"<div id= \"Text\" style=\"margin-left:20px;margin-top:5px\">"+
											"<div id ="+info[i-1].Name+"class=\"Title\">"+info[i-1].Name+"</div>"+
											"<div id =\"happyStuff\" class=\"description\" style=\"border-bottom:1px #E5E4E2 solid\">"+Today+"</div><br />"+
											"</div>"+
										"</li>";
										x++;
										id=info[i].ID;
									}
									Today+=info[i].Item+" at "+info[i][n]+"<br />";
	 							
							}
						
							document.getElementById("listview").innerHTML=list;
							

						},
						error: function (response, status, err) {
							console.log("Failure!");
							console.log(response.responseText);
						}
					});
	
}

function Pic(ID,Reference){

		pic="https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+Reference+"&key=AIzaSyAdDocD5G6lwtZQR7UhKQaS2OQmq0mi0rw";
		return pic;
		// jQuery.ajax({
         //       type: "POST",
         //       url: "php/Test_Image.php",
         //       success: function(result) {
          //          document.getElementById(ID).src=result;
           //         console.log(JSON.parse(result));
           //     }
          // });
}


