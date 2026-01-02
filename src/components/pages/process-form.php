// Filename: server.php
<?php
// Set CORS headers for the React app running on localhost (adjust as needed for production)
header("Access-Control-Allow-Origin: *"); // Allows all origins
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Handle OPTIONS requests (preflight check)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the raw POST data (JSON string)
    $json_data = file_get_contents("php://input");
    // Decode the JSON data into a PHP associative array
    $data = json_decode($json_data, true);

    if ($data) {
        $name = htmlspecialchars($data['name']);
        $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
        $message = htmlspecialchars($data['message']);

        // Perform validation
        if (empty($name) || empty($email) || empty($message)) {
            http_response_code(400);
            echo json_encode(["message" => "Please complete all fields."]);
        } elseif (!$email) {
            http_response_code(400);
            echo json_encode(["message" => "Invalid email address."]);
        } else {
            // Process the data (e.g., save to a database, send an email, etc.)
            // In a real application, you would connect to MySQL here.
            // Example success:
            http_response_code(200);
            echo json_encode(["message" => "Thank you, $name! Your message has been received."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["message" => "Invalid input."]);
    }
} else {
    // Not a POST request, set a 403 (forbidden) response code
    http_response_code(403);
    echo json_encode(["message" => "There was a problem with your submission, please try again."]);
}
?>
