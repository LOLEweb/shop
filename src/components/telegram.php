<?php

$name = $_POST['name']
$telega = $_POST['telegram']
$email = $_POST['email']
$vk = $_POST['vkontk']
$desc = $_POST['description']

$token = "6490335348:AAF5t2_kURsbuB1y6_pS0NmpJhIL7NyC5Uw";
$chat_id = "-1001703133993";

$arr = array(
    'Имя пользователя: ' => $name,
    'Contacts ',
    'Telegram: ' => $telega,
    'Email: ' => $email,
    'Vk: ' => $vk,
    'Описание к заказу: ' => $desc,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A"
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");


if ($sendToTelegram) {
    alert('Спасибо')
} else {
    echo "Error";
}
?>