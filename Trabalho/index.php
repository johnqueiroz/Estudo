<?php 
// inicia a sessao na pagina e é preciso ter em todas as outras para continuar na mesma sessao
  session_name("sessao1");
  session_start();

  ?>

  <!DOCTYPE html>
  <html lang="pt-br">

      <!-- Cabeçalho da página -->
  <head>

      <!-- link para o boostrap -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Controle de atividades</title>
  </head>
  <body>


  <div class="container">
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">

                    
                    <!-- Div com container para usar um certo tamanho da tela e dentro tem a navbar que é a parte azul da tela com os menus de contatos e sair -->
                    <a class="navbar-brand" href="index.html" style="color: aliceblue;" >Sistema de Controle de Atividades</a>

                   


                </nav>
              
                <div>
                        <img src="grupo_viamaquinas.jpg" alt="Grupo Via Máquinas" height="30%" width="100%">

                </div>
                <br>
                <br>
   <!-- Formulário para envio de informações de login com siape e senha -->
                <form class="formulario_entrada" name="form_entrada" action="entrada_sistema.php" method="POST">
                  <label class="sr-only" for="inlineFormInputCpf">CPF</label>
                  <input name="CPF_entrada" type="number" class="form-control mb-2 mr-sm-2" id="inlineFormInputCpf" placeholder="Ex: 3080572">
             
                  <label class="sr-only" for="inlineFormInputSenha">Senha</label>
                  <div class="input-group mb-2 mr-sm-2">
                   
                    <input name="senha_entrada" autocomplete="off" type="password" class="form-control" id="inlineFormInputSenha" placeholder="**********">
                  </div>
                
                 
                  <input type="submit" class="btn btn-primary mb-2" value="Entrar" id="botao_entrada">
               
                </form>
                
                  
                </a>
                <br>
                <br>
                <br>
                


                
        </div>






        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  </body>
  </html>