<?php
	if(isset($_POST['submit'])){
		$num1 = $_POST['firstNumber'];
		$num2 = $_POST['secondNumber'];
?>
		<p>Your sum of 2 numbers is as follows <?php echo $firstNumber+$secondNumber?></p>
<?php
	}
	else{
		echo "Input field cannot be empty";
	}
?>
<!-- php code ends -->
<--------------------------------->
<!-- html code begins -->
<!DOCTYPE html>
<html>
<head>
	<title>Simple calculator to add 2 numbers</title>
</head>
<body>
	<form method="post" action="phpaddition.php">
        <!-- inputting the first number -->
		<input type="number" name="firstNumber" required>
        <!-- inputting the second number -->
		<input type="number" name="secondNumber" required>
        <!-- the submit button -->
		<input type="submit" name="submit" value="submit">
	</form>
</body>
</html>
