<!DOCTYPE html>
<html lang="bg">
	<head>
		<meta charset='utf-8'>
	</head>
	<body>
		<?php
		$correct=true;
		if ($_POST) 
		{
			 $pattern  = "/^[\p{Cyrillic}\d\s\-]+$/u";
			$title = $_POST['title'];
		    
					if (!$title) {
						$correct=false;
						echo 'Името на предмета е задължително поле.</br>';
					} else{				
						$match = (bool) preg_match($pattern, $title);
						if(strlen($title) > 150) {
							$correct=false;						 
						echo 'Името на предмета има максимална дължина 150 символа.</br>';
						} elseif (!$match) {
							$correct=false;		
							echo 'Името на предмета трябва да е на кирилица.</br>';
						}else {
							$valid['title'] = $title;
						}
					}
				
					$lecturer=$_POST['lecturer'];
					if (!$lecturer) {
						 $correct=false;
						 echo 'Името на лектора е задължително поле.</br>';
					}
					else{
						$match = (bool) preg_match($pattern, $lecturer);
						if (strlen($lecturer) > 200) {
						 $correct=false;
						 echo 'Името на лектора има максимална дължина 200 символа.</br>';
						} 
						elseif(!$match){
							$correct=false;		
							echo 'Името на лектора трябва да е на кирилица.</br>';
						}
						else {
							$valid['lecturer'] = $lecturer;
						}
					}
					
					$description=$_POST['description'];
					if (!$description) {
						$correct=false;
						 echo 'Описанието е задължително поле.</br>';
					} 
					else{
						$match = (bool) preg_match($pattern, $description);
						if (strlen($description) < 10) {
							$correct=false;
							 echo 'Описанието има минимална дължина 10 символа.</br>';
						} 
						elseif(!$match){
							$correct=false;		
							echo 'Описанието на предмета трябва да е на кирилица.</br>';
						}
						else {
						$valid['description'] = $description;
						}
					}
			
					$group=$_POST['group'];
					if ($group!="ЯКН" && $group!="ОКН" && $group!="М" && $group!="ПМ") {
						$correct=false;
						 echo 'Невалидна група. Моля въведете подхосдяща група измежду ОКН, ЯКН, ПМ и М.</br>';
					}
					else {
					  $valid['group'] = $group;
					}
					
					$credits=$_POST['credits'];	
					if (!$credits ||((is_int($credits) ||ctype_digit($credits)) && (int)$credits > 0)) {
					$valid['credits'] = $credits;
					} else {
						$correct=false;
						 echo 'Невалиден брой кредити. Моля въведете цяло положително число.</br>';			 
					}
					
					if($correct==true)
					{
						echo  "Избираемата дисциплина е добавена успешно!</br>";
					}
		}
		?>
	</body>

</html>