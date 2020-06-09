/*
Webpack: Enpacotador de arquivos do Javascript.

webpack.config.js
    Arquivo de configuração.

Entry
    [Arquivo de entrada para a configuração atual do webpack] Ponto de partida para criar a arvóre de dependências (seja por "Single Entry" ou "Object Syntax" ou "Multi Page Application").

Output
    Indica o caminho e o arquivo de saida.

Loaders
    Processa outros tipos de arquivos e converte para módulos válidos que podem ser consumidos para a aplicação e incluidos na arvóre de dependência.

Mode
    Parâmetro onde pode-se identificar o ambiente em que sua aplicação está naquele momento (production, development, none)

npm init -y
    Cria o package.json

npm i
    Instala as dependências.

npm start
    Vai iniciar e gerar o arquivo dist (distribuição).

&&
    Para executar mais de um comando.

npm start && node dist/main.js
    Inicia e executa o arquivo main.js

assets
    Nome dado para a pasta que deve conter os arquivos estaticos.

Sempre que alterar as dependências, deve executar "npm i" para instalar.

mini-css-extract-plugin: dependência que extrai o css para um arquivo especifico.

cross-env: seta a variável de ambiente para os três sistemas operacionais (Windows, Linux e macOS).

webpack-dev-server: Servidor de desenvolvimento.






*/