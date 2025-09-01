<?php
$maxFileSize = 6 * 1024 * 1024;
$allowed = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); exit('Method not allowed'); }
$name = substr(trim($_POST['name'] ?? ''),0,200);
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$provider = substr(trim($_POST['provider'] ?? ''),0,200);
$price = substr(trim($_POST['price'] ?? ''),0,50);
if (!$email) { echo "Invalid email"; exit; }
if (!isset($_FILES['billfile'])) { echo "No file uploaded"; exit; }
$file = $_FILES['billfile'];
if ($file['error'] !== 0) { echo "Upload error: ".$file['error']; exit; }
if ($file['size'] > $maxFileSize) { echo "File too large"; exit; }
$finfo = finfo_open(FILEINFO_MIME_TYPE);
$mime = finfo_file($finfo, $file['tmp_name']);
finfo_close($finfo);
if (!in_array($mime, $allowed)) { echo "File type not allowed"; exit; }
$to = "josh@islandwave.ca";
$subject = "Beat Your Bill Submission from $name";
$boundary = md5(time());
$headers = "From: $name <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: multipart/mixed; boundary=\"{$boundary}\"\r\n";
$message = "--{$boundary}\r\n";
$message .= "Content-Type: text/plain; charset=\"utf-8\"\r\n\r\n";
$message .= "Name: $name\r\nEmail: $email\r\nProvider: $provider\r\nPrice: $price\r\n\r\n";
$attachment = chunk_split(base64_encode(file_get_contents($file['tmp_name'])));
$message .= "--{$boundary}\r\n";
$message .= "Content-Type: {$mime}; name=\"{$file['name']}\"\r\n";
$message .= "Content-Transfer-Encoding: base64\r\n";
$message .= "Content-Disposition: attachment; filename=\"{$file['name']}\"\r\n\r\n";
$message .= $attachment . "\r\n";
$message .= "--{$boundary}--";
$success = mail($to, $subject, $message, $headers);
echo $success ? "Thanks! Your bill was sent. We'll contact you soon." : "Sorry, something went wrong sending the email.";
?>
