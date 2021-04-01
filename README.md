<h1 align="center">BossaBox Challenge VUTTR</h1>

<p><strong>Tecnologias: </strong></p>
<p>Typescript</p>
<p>Node JS</p>
<p>Express</p>
<p>Typeorm</p>
<p>JSONWebToken</p>
<p>SQLite</p>

<h3>Como utilizar a aplicação</h3>
<p>Para poder iniciar a aplicação será necessário instalar as dependências e rodar o servidor com os comandos</p>

```
$yarn install
$yarn typeorm migration:run
$yarn dev
````

<h3>Recursos da Aplicação</h3>
<p>A aplicação roda por padrão em http://localhost:3000, caso queira alterar o caminho é só entrar na pasta src, no arquivo server.ts e alterar a constante port para o valor desjado</p>
<h2>Rotas da Aplicação</h2>
<table>
    <tr>
        <th>Rota</th>
        <th>Método</th>
        <th>Resultado</th>
    </tr>
    <tr>
        <td>/users</td>
        <td>post</td>
        <td>Serve para cadastrar um novo usuário</td>
    </tr>
</table>
