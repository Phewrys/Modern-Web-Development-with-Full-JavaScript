/*
node: Ambiente de execução do javascript do lado do servidor.

npm: Gerenciador de pacotes do node (responsável por baixar uma determinada biblioteca)

"npm i lodash"
    // Instala uma dependência de terceiros.
    // Obs: quando intala uma dependência, será criada uma pasta node_modules na mesma pasta em que está sendo digitado o comando.
    // i de instalar (vai instalar na pasta local).

"npm i -g nodemon"
    // -g de global (vai instalar na pasta global).
    
    CASO NÃO SEJA POSSÍVEL INSTALAR O NODEMOM
    1 - No Windows, abra o PowerShell.
    2 - Digite: "get-executionpolicy" (sem aspas, para verificar se está restricted)
    2.2 - Se estiver, digite: "Set-ExecutionPolicy -Scope CurrentUser" e passe como valor "unrestricted".

"npm init"
    // Para definir como será o arquivo package.json (você irá infomar os dados).

"npm init -y"
    // É definido automaticamente.

"npm i --save axios"
    // Instala a dependência e salva dentro do arquivo package.json

package.json
    // Serve para descrever o projeto e também tem a descrição de todas as dependências que o seu projeto precisa.

No package.json
    //  0.17.1 : Indica que apenas a versão atual pode ser utilizada.
    // ^0.17.1 : Indica que a versão pode ser atualizada, apenas o segundo terço.
    // ~0.17.1 : Indica que só pode ser atualizada aproximadamente, apenas o terceiro terço.

package-lock.json
    // Descreve de forma mais detalhada exatamente a versão que foi baixada.

Para recriar a pasta node_modules
    // Estando dentro da pasta que tenha o arquivo package.json.
    // e no Terminal estando dentro dessa pasta, digite: "npm i"
    // (por isso, não é preciso salvar essa node_modules no reporitório).

No package.json (Estando no Terminal dentro da pasta desse arquivo).
    // Nomes já pré-definidos, para executar basta "npm nomePreDefinido".
    // Nomes criados por você, para executar "npm run nomeCriado".

POSTMAN: Serve para fazer requisições (Get, Post, Put, Delet, ...).

"npm i --save express@4.16.2 -E"
    // --save para salvar a referência do express dentro do arquivo package.json
    // -E para indicar que vai instalar a versão exata.


"npm i node-schedule@1.3.0 -E"
    // Modulo para temporizador.




    */