<?php
// Настройки для отправки на mail.ru
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Проверка метода запроса
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Метод не разрешен']);
    exit;
}

// Подключение PHPMailer
require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Получение данных из формы
$data = json_decode(file_get_contents('php://input'), true);

// Валидация данных
if (empty($data['phone'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Пожалуйста, введите номер телефона']);
    exit;
}

if (empty($data['agree'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Необходимо согласие на обработку персональных данных']);
    exit;
}

// Данные для отправки на mail.ru
// ВАЖНО: Замените эти данные на свои реальные
$smtp_host = 'smtp.mail.ru';
$smtp_port = 465;
$smtp_username = 'crystalluxe@mail.ru'; // Замените на ваш email
$smtp_password = 'your_password'; // Замените на ваш пароль приложения
$smtp_from_email = 'crystalluxe@mail.ru'; // Замените на ваш email
$smtp_from_name = 'Кристалл де Люкс';

// Email получателя (куда будут приходить заявки)
$to_email = 'crystalluxe@mail.ru'; // Email из контактов
$to_name = 'Администратор';

try {
    $mail = new PHPMailer(true);
    
    // Настройка SMTP
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    $mail->Port = $smtp_port;
    $mail->CharSet = 'UTF-8';
    
    // От кого
    $mail->setFrom($smtp_from_email, $smtp_from_name);
    
    // Кому
    $mail->addAddress($to_email, $to_name);
    
    // Тема письма
    $mail->Subject = 'Новая заявка на консультацию из футера';
    
    // Тело письма
    $mail->isHTML(true);
    $mail->Body = "
    <html>
    <head>
        <meta charset='UTF-8'>
    </head>
    <body style='font-family: Arial, sans-serif; line-height: 1.6; color: #333;'>
        <h2 style='color: #2563eb;'>Новая заявка на консультацию из футера</h2>
        <p><strong>Телефон:</strong> " . htmlspecialchars($data['phone']) . "</p>
        <p><strong>Дата и время:</strong> " . date('d.m.Y H:i:s') . "</p>
        <hr style='margin: 20px 0; border: none; border-top: 1px solid #ddd;'>
        <p style='color: #666; font-size: 12px;'>Это письмо отправлено автоматически с сайта Кристалл де Люкс</p>
    </body>
    </html>
    ";
    
    // Альтернативный текст (для клиентов без поддержки HTML)
    $mail->AltBody = "Новая заявка на консультацию из футера\n\nТелефон: " . $data['phone'] . "\nДата: " . date('d.m.Y H:i:s');
    
    // Отправка
    $mail->send();
    
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.'
    ]);
    
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Ошибка при отправке письма: ' . $mail->ErrorInfo
    ]);
}
?>

