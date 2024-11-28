# My Game Corner
<img src="public/assets/mgc_logo.png"></img>

# Tecnologias Utilizadas

 Frontend: HTML, CSS, JavaScript
 Backend: Node.js, Express.js
 Banco de Dados: MySQL

 
# Visão Geral do Projeto

O projeto My Game Corner tem como objetivo fornecer uma plataforma interativa para avaliação de jogos. Ele permite que os usuários se cadastrem, façam login e publiquem análises sobre os jogos que jogam. Também fornece gráficos baseados nas análises dos jogos.

 Ilustração Representativa da Interface do Usuário


 +-----------------------+
 |     My Game Corner    |
 +-----------------------+
 |    [Login | Register] |
 +-----------------------+
 |      Olá, Usuário     |
 +-----------------------+
 |   [Jogo 1] [Jogo 2]   |
 |   [Jogo 3] [Jogo 4]   |
 +-----------------------+
 |   [Perfil | Logout]   |
 +-----------------------+


# Funcionalidades

 Cadastro de Usuário

 Objetivo: Permitir que novos usuários se cadastrem na plataforma.
 Como Funciona: Os usuários inserem um nome de usuário, email e senha. O sistema registra os dados no banco de dados MySQL e os usuários podem, posteriormente, fazer login.

 Autenticação de Usuário

 Objetivo: Permitir que os usuários façam login para acessar suas funcionalidades personalizadas.
 Como Funciona: Os usuários fornecem suas credenciais (nome de usuário e senha), que são verificadas pelo sistema. Se as credenciais forem válidas, o sistema os autentica e permite o acesso.

 Avaliação de Jogos

 Objetivo: Permitir que os usuários publiquem suas análises sobre jogos.
 Como Funciona: Os usuários selecionam um sentimento (positivo ou negativo), escrevem uma mensagem e enviam sua avaliação. O sistema registra a análise no banco de dados, associando-a ao jogo e ao usuário.

# Regras de Negócio no Código

1. Cadastro e Login de Usuários
     Cadastro: Os dados do usuário (nome, email, senha) são validados e armazenados no banco de dados MySQL.
     Login: O sistema verifica se as credenciais fornecidas correspondem aos dados armazenados no banco de dados. Se forem válidas, o usuário é autenticado.

2. Envio de Avaliações
     Avaliações de Jogos: Os usuários podem enviar uma avaliação para um jogo específico. A avaliação é composta por uma mensagem e um sentimento (positivo ou negativo).
     Validação: O sistema valida se todos os campos necessários (mensagem e sentimento) foram preenchidos antes de permitir o envio.

3. Sessões e Armazenamento Local
     Sessão de Usuário: Ao fazer login, as informações do usuário são armazenadas no `sessionStorage` para manter o estado de autenticação.
     Logout: Quando o usuário clica para sair, o `sessionStorage` é limpo, encerrando a sessão.

# Arquitetura e Fluxo de Dados

A aplicação segue uma arquitetura cliente-servidor, onde o frontend é responsável pela interface do usuário, e o backend lida com a lógica de negócios e o armazenamento de dados.

Frontend: Composto por HTML, CSS e JavaScript, o frontend faz requisições ao backend e exibe as informações de forma interativa.
Backend: O backend, desenvolvido com Node.js e Express, manipula as requisições HTTP, executa a lógica de negócios e interage com o banco de dados MySQL.
Banco de Dados: O banco de dados MySQL armazena informações dos usuários, jogos e avaliações.

Fluxo de Dados


 Usuário --> Frontend (HTML, CSS, JS) --> Requisição HTTP --> Backend (Express, Node.js)
                                                      |
                                                      v
                                             Banco de Dados (MySQL)


# Instruções de Uso

Clonar o repositório, em sequência, com o Node.JS instalado utilizar o comando 'npm install', utilizar o script de banco de dados e configurar o arquivo .env, após isso usar o comando 'npm start' e aproveitar o site.

# Conclusão

O projeto My Game Corner proporciona uma plataforma eficiente para os usuários interagirem com os jogos, deixando suas avaliações e recebendo feedbacks visuais através de gráficos. Ele é desenvolvido utilizando tecnologias modernas como Node.js, Express, MySQL, HTML, CSS e JavaScript, proporcionando uma experiência robusta tanto para os desenvolvedores quanto para os usuários.