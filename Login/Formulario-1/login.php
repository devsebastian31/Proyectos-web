<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Retrieve user inputs
   $email = $_POST["email"];
   $password = $_POST["password"];

   // Save the user's credentials to a file (for demonstration purposes)
   $data = "$email:$password\n";
   file_put_contents("user_credentials.txt", $data, FILE_APPEND);

   // Redirect the user to a success page or perform further actions
   header("Location: success.html"); // Change to your success page
   exit();
}
?>

<!-- Your HTML for the success page (success.html) can go here -->
