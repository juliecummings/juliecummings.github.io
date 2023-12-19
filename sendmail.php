<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        // Set up the sender email address (create from cpanel)
        $from="33983778+julieccummings@users.noreply.github.com"; 

        // Set up the recipient email address (your Gmail)
        $to = "cummings3874@gmail.com"; 

        // Set up the email subject
        $subject = "New Contact Form Submission";

        // Compose the email message
        $mailMessage = "Name: $name\n";
        $mailMessage .= "Email: $email\n\n";
        $mailMessage .= "Message:\n$message";

        // Set up headers
        $headers = "From: $from";

        // Send the email
        if (mail($to, $subject, $mailMessage, $headers)) {
            echo "success";
        } else {
            echo "Failed to send email. Please try again later.";
        }
    } else {
        // If not a POST request, redirect to the form page
        header("Location: index.html");
        exit();
    }
?>
