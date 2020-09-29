<?php

if($_POST["submit"]) {
    $recipient="norbiii@icloud.com";
    $subject="Részeg Buszsofőr Support: $sender";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you for contacting the support. We will get back to you as soon as possible.</p>";
}

?>