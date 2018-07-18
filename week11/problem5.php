<html>
   <head>
      <title>Week 11 : Problem 5</title>
   </head>
   <body>
      <?php

       $x = $_POST['x'];
       $n = $_POST['n'];
       $num = 1;
       echo "<table><tr><th>N</th><th>X<sup>n</sup></th></tr>";
       for ($i=1; $i <= $n; $i++) { 
       	$num *= $x;
		echo "<tr><td>". number_format($i). "</td><td align=\"center\">" . number_format($num) . "</td></tr>";
       }
       echo "</table>";

      ?>
   </body>
</html>