# nwl-01_ecoleta_server
Projeto desenvolvido na Next Week Level pela RocketSeat.</br>

# :question: Por quê? 
Projeto desenvolvido em Typescrypt para controle das funções do sistema Ecoleta, como cadastro de pontos de coleta, cadastro de items e relacionamento entre ambos. </br>

# :camera: Screenshot
![Screenshot](https://github.com/diegodls/nwl-01_ecoleta_server/blob/assets/server_asset_git.png?raw=true)</br>

# :rocket: Iniciando
Para executar esses projeto, deveremos:

* Clonar o repositório com o comando `git clone` ([veja mais](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository)), ou fazer o download.
* Abra um prompt de comando (famoso cmd/terminal) na pasta raiz ou navegue até ela, e insira o comando `npx isntall` ou `npm install` ou `yarn install`, dependendo do gerenciador de pacotes que você usa, este comando serve para instalar os pacotes/módulos utilizado nesse projeto
* Após a instalação dos pacotes/módulos, você deverá iniciar as migrations com o comando `yarn kmigrate` e depois `yarn kseed`, para popular o banco de dados (foi utilizado o sqlite).
* Você deverá configurar o IP e a Porta do seu computador, vá até o arquivo `\src\config\Network_IP.ts` e adicione o IP do seu computador.
* Por padrão a porta utilizada foi a 3333, você pode trocar no arquivo `\src\server.tsx`
* Após a execução das migrations e da configuração do IP/Porta, você já pode iniciar o servidor com o comando `yarn start`.
* Agora você pode iniciar um dois outros projetos que fazer parte dessa stack, seja o aplicativo mobile ou o web abaixo.

# :nut_and_bolt: Aplicativos
Fazem parte deste projeto os seguintes aplicativos: </br>
[Mobile](https://github.com/diegodls/nwl-01_ecoleta_mobile) - Desenvolvido em React Native, utilizando Typescript. </br>
[Web](https://github.com/diegodls/nwl-01_ecoleta_web) - Desenvolvido em React, utilizando Typescript.

# :nut_and_bolt: Módulos
Neste projeto foram utilizado os seguintes módulos:</br>
[express](https://github.com/expressjs/express) - *Framework para a criação do sistema*</br>
[knex](http://knexjs.org/) - *Query builder*</br>
[sqlite3](https://github.com/sqlite/sqlite) - *Banco de dados*</br>
[multer](https://github.com/expressjs/multer) - *Uploading de arquivos*</br>
[celebrate](https://github.com/arb/celebrate) - *Validação dos campos dos dados(nome, email, etc...)*</br>

**E todas as dependências desses módulos que estão presentes em suas respectivas paginas.**

# :clap: Agradecimentos
Agradecimentos a todos os desenvolvedores dos módulos acima e a equipe RocketSeat.

# :rotating_light: Notas/Problemas
Me diga =)

# :warning: Licença
Você pode usar este aplicativos para estudos, e apenas para estudo, está proibido a sua publicação ou apropriação do código.
