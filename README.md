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
<p>Para acessaar as rotas de tools o usuário necessita estar autenticado</p>
<h2>Rotas da Aplicação</h2>
<table>
    <tr>
        <th>Rota</th>
        <th>Método</th>
        <th>Resultado</th>
    </tr>
    <tr>
        <td>/users</td>
        <td>POST</td>
        <td>Serve para cadastrar um novo usuário</td>
    </tr>
    <tr>
        <td>/authenticate</td>
        <td>post</td>
        <td>Serve para fazer o login de um usuário</td>
    </tr>
    <tr>
        <td>/tools</td>
        <td>POST</td>
        <td>Serve para cadastrar uma nova ferramenta</td>
    </tr>
    <tr>
        <td>/tools</td>
        <td>GET</td>
        <td>Serve para buscar todas as tags no banco de dados</td>
    </tr>
    <tr>
        <td>/tools/tools?tag=tag_name</td>
        <td>GET</td>
        <td>Serve para buscar uma tag de acordo com o que foi passado na url</td>
    </tr>
    <tr>
        <td>/tools/:id</td>
        <td>DELETE</td>
        <td>Serve para deletar uma ferramenta de acordo com o id</td>
    </tr>
</table>
