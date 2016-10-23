<?php
	$servername = "localhost";
	$username = "root";
	$password = "admin";
	$database = "js_db_2016";
	// Create connec t ion
  $conn = new mysq l i($servername, $username, $password);
  // Check connect n 
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  echo "Connected successfully";
?>