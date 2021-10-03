<?php

$recepient = "piterpaper@yandex.ru";
$sitename = "T E R R A";

$name: = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \n Телефон: $phone \n Сообщение: $text";

$pagetitle = "Новая заявка с сайта \"$sitename"\"";

mail($recepient, $pagetitle, $message, "Content-type:text/plain; charset= \"utf-8\"\n From: "$recepient");
