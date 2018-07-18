<html>
   <head>
      <title>Week 11 : Problem 4</title>
   </head>
   <body>
      <?php

       $usersInput = $_POST['input4'];
           $englishNumber = array('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve' , 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty');

       $spanishNumber = array('uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte');
       
       $result = false; 

      for($i = 0; $i < count($englishNumber); $i++){
       	if($usersInput == $englishNumber[$i]){
			echo ( '<p>The word "' . $englishNumber[$i] . '" in Spanish is "' . $spanishNumber[$i] . '".</p>');
       		$result = true;
       		}
        }

        if ($result == false){

			echo ('<p> The English cardinal "' . $usersInput . '" is not between "one" and "twenty". </p>'); 
        };


      ?>
   </body>
</html>