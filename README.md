## Considerações finais

Foi utilizado como boilerplate do projeto o create-react-app do proprio facebook, ele trás diversas coisas prontas que facilita o trabalho, como jest para realizar testes unitarios e etc...
Para os testes unitarios foi utilizada a biblioteca Enzyme porque já vem com diversas função prontas para uso. Utilizei tambem uma lib jest-fetch-mock para o mock do fetch
E devido ao prazo acabei utilizando o bootstrap como css, porque senão não daria para fazer tudo o que desejei para o projeto.

## Estrutura do projeto
```
my-app/a
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
  ```  
## Observações
Tive alguns problemas de Cross Domain pois são servidores diferentes, utilizei esse [plugin](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) no chrome para solucionar o problema.


## Scripts
Entre no diretorio mobile_tech_assignment/ e execute

### `java -jar stubby4j-6.0.1.jar -d tech_assignment_mobile_stubs.yml`

Para executar a Api

### `npm start`

Na raiz do projeto
Ira rodar em desenvolvimento.<br>
Abra [http://localhost:3000](http://localhost:3000) para ver a pagina.

### `npm test`

Para rodar os testes.

### `npm run build`

Realizar o build

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
