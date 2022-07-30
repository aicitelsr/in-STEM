<h2 align="center">
  <p align="center"> inSteam  <p>
</h2>


<h4 align="center">
  <p align="center"> Projeto final da {reprograma}. <p align="center">  O inSteam possui a finalidade de propagar a capacitação e
  a inserção de mais mulheres nas áreas de STEAM.<p>
</h4>


## contexto | objetivo
A UNESCO E A ONU apresentaram dados que mostram que em áreas como ciência, o número de pesquisadoras é de 30%, além disso, é possível observar a persistência de barreiras e baixa representatividade em áreas como matemática, ciência, engenharia e tecnologia. Essas últimas palavras constituem nada menos que a palavra STEM em inglês. Estima-se que apenas uma mulher para cada quatro homens, consiga um emprego na área de STEM e isso se dá por causa de fatores sociais, ausência de informação e sexismo. Visando mudar esse cenário, é necessário projetos e iniciativas que visem promover uma maior diversificação nesses campos. Com isso em mente, o inSteam foi criado como uma API que se conecta à um banco de dados sendo possível a postagem de vagas e cursos relacionados.

### funcionamento:
 - Empresas e usuárias poderão se cadastrar e postar vagas de emprego e cursos.
 - Somente pessoas autenticadas e autorizadas poderão visualizar, criar, atualizar e excluir vagas
 - Somentes pessoas autenticadas e autorizadas poderão visualizar, criar, atualizar e excluir cursos

 ## ROTAS
#### CURSOS

 | MÉTODO | ROTA|         | 
 ---------|---------------|---------------------------|
|GET      | /cursos       | retorna todos os cursos   |
|GET      | /cursos/:id   | retorna curso pelo id
|GET      | /cursos/buscar
|GET      | /cursos/buscar/abertos| retorna cursos com inscrições abertas|
|GET      | /users        | retorna cadastrados       |
|POST     | /cursos       | cadastra um novo curso     |
|POST     | /login        | login
|POST     | /register     | cadastro             |
|PATCH    | /curso/:id    | altera um curso            |
|DELETE   |/curso/:id      | exclui um curso     |
|DELETE   |/user/:id       | exclui um cadastro  |


#### VAGAS

 | MÉTODO | ROTA|         | 
 ---------|---------------|---------------------------|
|GET      | /vagas        | retorna todas as vagas    |
|GET      | /vaga/:id     | retorna vaga pelo id      |
|GET      | /vaga/buscar/area| retorna vagas por área  |
|GET      | /vaga/buscar/disponibilidade| retorna vagas disponíveis |
|POST     | /vaga         | cadastra nova vaga       |
|PATCH    | /vaga/:id     | altera dados da vaga     |
|DELETE   | /vaga/:id     | exclui uma vaga          |

#### USERS

 | MÉTODO | ROTA|         | 
 ---------|---------------|---------------------------|
|POST     | /register     | cadastra novo user        |
|POST     | /login        | login                     |
|GET      | /users        | retorna users cadastrados |
|DELETE   | /user/:id     | excluir um user cadastrado|

## tecnologias utilizadas

- [x] Node.js
- [x] MongoDB Atlas
- [x] express
- [x] mongoose
- [x] dotenv
- [x] bcrypt
- [x] jsonwebtoken
- [x] cors
- [x] swagger
- [x] eslint
- [x] Jest
- [x] Heroku
- [x] Git

## Documentação

> A documentação pode ser acessada [aqui](https://in-stem.herokuapp.com/minha-rota-de-documentacao)





<p align="center">
Desenvolvido com   :heart:
</p>

