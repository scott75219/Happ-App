<?php
$json = file_get_contents('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.90950429999999,-77.0476099&radius=10&types=food&key=AIzaSyC_AFZ-MY0n4Nu-Rpnud3UZk-3WDEkk7y0');
#$obj = json_encode($json);
echo $json;

?>