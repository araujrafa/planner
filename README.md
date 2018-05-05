## Considerações finais

Foi utilizado como boilerplate do projeto o create-react-app do proprio facebook, ele trás diversas coisas prontas que facilita o trabalho, como jest para realizar testes unitarios e etc...
Para os testes unitarios foi utilizada a biblioteca Enzyme porque já vem com diversas função prontas para uso. Utilizei tambem uma lib jest-fetch-mock para o mock do fetch
E devido ao prazo acabei utilizando o bootstrap como css, porque senão não daria para fazer tudo o que desejei para o projeto.

## Estutura do projeto
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
   index.css
   index.js
   component/
    App/
    Button/
    Citys/
    Text/
    Weather/
     

## Scripts

Entre no diretorio e execute

### `npm start`

Ira rodar em desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para ver a pagina.

### `npm test`

Para rodar os testes.

### `npm run build`

Realizar o build

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).