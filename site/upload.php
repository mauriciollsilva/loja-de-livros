<?php
// Define a pasta onde os arquivos serão armazenados
$target_dir = "uploads/";

// Define o nome do arquivo como o título do livro
$target_file = $target_dir . basename($_FILES["arquivo"]["name"]);
$titulo = $_POST["titulo"];
$autor = $_POST["autor"];

// Define as extensões de arquivo permitidas
$allowed_extensions = array("pdf", "epub", "mobi");

// Obtém a extensão do arquivo enviado
$extension = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

// Verifica se o arquivo é uma extensão permitida
if (!in_array($extension, $allowed_extensions)) {
    die("Erro: Apenas arquivos PDF, EPUB e MOBI são permitidos.");
  }
  
  // Verifica se o arquivo já existe no servidor
  if (file_exists($target_file)) {
    die("Erro: Este arquivo já existe.");
  }
  
  // Move o arquivo para a pasta de destino
if (move_uploaded_file($_FILES["arquivo"]["tmp_name"], $target_file)) {
    echo "O livro \"" . $titulo . "\" de " . $autor . " foi enviado com sucesso!";
  } else {
    echo "Erro ao enviar o arquivo.";
  }
  