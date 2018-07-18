<html>
<head>
	<title>Review Purchase</title>
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
</head>
    <body>
<div id="heading">
  <CENTER> <img id="logo" src="logo.png" alt="logo" width="725" height="242">
  <h1 class="review">Review Purchase</h1> </CENTER>
</div>

<div class="main">
	
<?php
 $firstName = $_POST['firstName'];
 $lastName  = $_POST['lastName'];
 $address   = $_POST['streetAddress'];
 $city   	= $_POST['city'];
 $state   	= $_POST['state'];
 $zip   	= $_POST['zip'];
 $phone   	= $_POST['phone'];
 $widget1	= $_POST['widget1'];
 $widget2	= $_POST['widget2'];
 $widget3	= $_POST['widget3'];
 $widget4	= $_POST['widget4'];
 $subtotal	= (($widget1 * 12) + ($widget2 * 48) + ($widget3 * 25) + ($widget4 * 95));
 $total  	= $subtotal * 1.075;


 echo " <CENTER> Thank you for your order for $firstName $lastName. Please review the following: <br>
 	<h4>Contact Information</h4>
 	$firstName $lastName<br>
 	 $address<br>
 	$city $state $zip<br>
 	telephone: $phone<br>";

 echo "<h4> Your Order Includes:</h4>
 <table><tr><th>Item</th><th>Quantity</th><th>Price for items</th></tr>
<tr><td>Multifunctional OTG Card Reader</td><td>$widget1</td><td> $" . $widget1 * 12 .".00</td></tr>
<tr><td>Mobile Phone Camera Lens Kit</td><td>$widget2</td><td> $" . $widget2*48 .".00</td></tr>
<tr><td>Creative 3D Magical Moon Lamp</td><td>$widget3</td><td> $" . $widget3*25 .".00</td></tr>
<tr><td>4 Modes Rainproof Mechanical Zoom Headlamp</td><td>$widget4</td><td> $" . $widget4*95 .".00</td></tr>
<tr><td> <b>Sub Total:</b></td><td></td><td>$" . $subtotal . ".00</td>
<tr><td> <b>Total:</b></td><td></td><td>$" . number_format((float)$total, 2, '.', '') . "</td>
 </table>";




?>
</body>
</html>