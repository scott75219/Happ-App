 <?php
 $servername = "localhost";
 $username = "root";
 $password = "qQ123123";
 $dbname = "Happ";
 $conn = new mysqli($servername, $username, $password,$dbname);
if ($conn->connect_error) 
				{
					die("Connection failed: " . $conn->connect_error);
				}
 $query="SELECT * FROM Restaurants JOIN Location ON Restaurants.ID=Location.RID JOIN Specials ON Specials.RID=Restaurants.ID JOIN Items ON Items.ID=Specials.IID;";

$result = $conn->query($query);
$array=array();
while ($row = $result->fetch_assoc()) {
	array_push($array, $row);
}

$jsonstring = json_encode($array);
echo $jsonstring;
?>
