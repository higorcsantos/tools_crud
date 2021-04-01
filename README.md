<h1 align="center">BossaBox Challenge VUTTR</h1>

<h2>Sobre a aplicação: </h2>
<p>A aplicação tem como o intuito proporcionar ao usuário adicionar ferramentas para o seu uso, cada usuário possui sua identificação para o login, também podem ser criadas ferramentas, buscar ferramentas e deletar ferramentas. Foi utilizado o git para versionar a aplicação e ela foi escrita em typescript.</p>
<p><strong>Tecnologias: </strong></p>
<ul>
    <li>Typescript</li>
    <li>Node JS</li>
    <li>Express</li>
    <li>Typeorm</li>
    <li>JSONWebToken</li>
    <li>SQLite</li>
</ul>

<h2>Como utilizar a aplicação</h2>
<p>Para poder iniciar a aplicação será necessário instalar as dependências e rodar o servidor com os comandos</p>

```
$yarn install
$yarn typeorm migration:run
$yarn dev
````

<h2>Recursos da Aplicação</h2>
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
