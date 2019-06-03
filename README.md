# Node.js
- Necessário instalar o Node.js para rodar a aplicação
- Instalar versão 6.X ou superior
- Não instalar versões ímpares pois não são LTS
- Para instalar o Node.js no linux (Ubuntu), usar o comando abaixo:
``` sh
$ sudo apt-get install -y nodejs
```
- Para instalar o Node.jjs no Windows, basta baixar o instalador diretamente na página: [https://nodejs.org/en/](https://nodejs.org/en/ "https://nodejs.org/en/")

# Visual Studio Code
- O Visual Studio Code é um editor gratuito e multiplataforma (Mac, Linux e Windows) que se integra muito bem com o TypeScript com zero esforço por parte do desenvolvedor. Você pode baixá-lo no endereço [https://code.visualstudio.com/download](https://code.visualstudio.com/download "https://code.visualstudio.com/download")

# TypeScript
- Para que possamos utilizar o *TypeScript* precisamos da plataforma Node.js instalada
- É através do gerenciador de pacotes do Node.js que instalamos o *TypeScript*
- Para utilizar o gerenciador de pacotes, precisamos ter o arquivo *package.json* na nossa aplicação
- Para criar o arquivo *package.json* mencionado acima, devemo acessar a pasta de nossa aplicação por linha de comando e executar o comando abaixo:
``` sh
$ npm init
```
- Depois de termos nosso arquivo *package.json* criado, solicitamos a instalação do *TypeScript* através do comando abaixo (a versão utilizada aqui foi a 2.3.2):
``` sh
$ npm install typescript@2.3.2 --save-dev
```
- Depois precisamos criar o arquivo *tsconfig.json*, o qual guardará as configurações do nosso compilador
- Para rodar o compilador, utilizamos o comando abaixo:
``` sh
$ npm run compile
```
- Para que o compilador seja executado sempre que salvarmos um arquivo, podemos utilizar o comando abaixo:
``` sh
$ npm start
```
- Para instalar o *TypeScript Declaration File* para o *jQuery* (este arquivo possui informações dos nomes de métodos e funções, inclusive tipos que podem ser utilizados pelo *TypeScript*), utilizamos o comando abaixo (a versão utilizada foi a 2.0.42): 
``` sh
$ npm install @types/jquery@2.0.42 --save-dev
```
- Repositório *git* que centraliza arquivos *tsd* para diversas bibliotecas: [https://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped "https://github.com/DefinitelyTyped/DefinitelyTyped")

# Instalar e rodar a API
1. Descompactar o arquivo *api.zip* numa pasta fora do projeto
2. Acessar a pasta (extraída) por linha de comando
3. Executar o comando abaixo:
 ```sh
$ npm start
```