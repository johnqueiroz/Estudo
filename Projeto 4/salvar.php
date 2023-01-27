<?php

$conexao = mysqli_connect("localhost", "root", "");
mysqli_select_db($conexao, "cervejaria");

$nome = $_POST["nome"];
$email = $_POST["email"];
$confEmail = $_POST["confEmail"];
$telefone = $_POST["telefone"];


echo($email);
echo($nome);
echo($telefone);

?>