<html>
   <head>
      <title>Week 11 : Problem 6</title>
   </head>
   <body>
      <?php

       $list = ($_POST['input6']);
       $update = explode(", ", $list);
       sort($update);
       $length=count($update);
       echo "<table>";
       for($i=0;$i<$length;$i++){
       	echo ("<tr><td>$update[$i]</td></tr>");
       }
       echo "</table>";

      ?>
   </body>
</html>