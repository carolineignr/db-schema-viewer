## Documentação aplicação

O objetivo desta aplicação é ajudar principalmente DBAs ou pessoas que precisem consumir dados para manter o funcionamento de uma aplicação, com uma interface que busca facilitar o entendimento das estruturas das bases que armazenam estes dados.
Conforme citados em diversos artigos e projetos (aqui posso citar algum), existe um desafio conhecido em combinar dados vindos de diferentes fontes, em grande parte porque estes dados estão dispostos nessas bases de formas diferentes, já que cada base foi pensada e populada por pessoas/organizações diferentes, cada uma com seus padrões. Para que sejam possível realizar esse consumo de dados de uma forma eficiente, é preciso conhecer como acessá-los e pensar em como tratá-los quando estiverem em uma API por exemplo. 
Fazer isso de forma manual é um problema porque cada base possui uma tabela, que por sua vez possui diversas colunas com suas particularidades. Buscar essas informações consome uma quantidade considerável de tempo que poderia ser usado no problema central da pessoa/organização que precisa dos dados. Pensar fazer isso em diversas bases de dados diferentes só aumenta a complexidade do processo e o tempo que será necessário para executá-lo.
Esse projeto busca facilitar o acesso a essas informações através de uma aplicação que acessa uma base de dados informada pelo usuário, coleta informações sobre a estrutura dessa base, e apresenta o retorno deste processo através de uma interface amigável e simples, repassando para o usuário informações que facilitam seu entendimento sobre essa estrutura. Para entender diferenças e similaridades entre fontes de dados heterogêneas, é possível adicionar mais de uma base simultaneamente e realizar então a comparação entre ambas.

#### Sobre o projeto

A API da aplicação foi desenvolvida com Node, Typescript e Express.js. Essa API está hospedada em um servidor gratuito do Heroku, e é ela que fará a comunicação com a base de dados, cujas informações devem ser informadas pelo usuário durante o acesso à aplicação.

A interface foi feita como uma Single Page Application, onde a utilização de componentes em React.js, o que permite um acesso inicialmente mais rápido às telas da aplicação e uma renderização mais otimizada. 
Como uma das propostas era expor essas estruturas das bases, foi utilizado o framework Three.js, que permite a renderização de cenários e objetos 3D através do Canvas, juntamente com a biblioteca React Three Fiber, que possui diversas funcionalidades que facilitam o uso do framework. Essa proposta foi utilizada porque esses cenários em 3D gerados através do Canvas são bastante dinâmicos já que sua visualização simula um ambiente 3D, onde é possível aproximar ou afastar a visualização de uma parte desse cenário, ou até mesmo girar a visualização dem 360 graus dentro do cenário disposto na tela. Isso permite que diversos objetos representando partes da estrutura da base de dados sejam renderizados ao mesmo tempo de uma forma muito mais interativa e agradável. O código aqui também foi escrito em Typescript para facilitar futuras manutenções.

#### Como testar

Para tornar mais simples testes de uso da aplicação, foram adicionadas duas bases de dados em duas diferentes instâncias da ferramenta web ElephantSQL, que permite criar e realizar alterações em bases de dados diretamente do navegador. Todos os passos de instância do servidor e demais configurações são abstraídos, bastando apenas informar algumas preferências. Para fins de testes, o plano gratuito da aplicação atende muito bem. As bases criadas são similares para testar o propósito da análise de múltiplas bases heterogêneas. 

Para testar a aplicação, é possível então utilizar essas bases de dados e passar suas informações durante o uso do app.

A primeira base possui os seguintes dados de acesso:
Host: castor.db.elephantsql.com
Database name: hgllojip
User name: hgllojip
Senha: FzaCnomCMDcppxGH6Xl84XmWcG3Gahpk

A segunda base possui os seguintes dados de acesso:
Host: castor.db.elephantsql.com
Database name: sxpjoesf
User name: sxpjoesf
Senha: 6xeTVWEk7rmr65ScoKZ-nS2kfZm-xC5U

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

