<?php
	$servername = "localhost";
	$username = "root";
	$password = "admin";
	$database = "js_db_2016";

	$signupuser = $_POST['username'];
	$email = $_POST['email'];
	$pass = $_POST['pass'];

	//	echo $username . $email . $pass;
	// Create connec t ion
  $conn = new mysqli($servername, $username, $password, $database);
  // Check connect n 
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  //echo "Connected successfully";
  $sql = "INSERT INTO usersignup (username, email, password) VALUES ('$signupuser', '$email', '$pass')";

  if ($conn->query($sql) === TRUE) {
    echo "You Are successfully Sign Up !";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }

$conn->close();
	

	

?>