# Aplicação NextJS utilizada para testar autenticação de usuários utilizando a biblioteca NextAuth.js usando o GitHub como provider. - Projeto Next Auth Training

### É preciso ter a versão LTS do NodeJS instalado na máquina antes de todo o procedimento daqui descrito - ultima versão LTS até o momento da finalização deste projeto é (18.12.1)

- Acesse para fazer o download e a instalação do mesmo no endereço: https://nodejs.org/

### Instalação e Configuração do Projeto para rodar direto na tua máquina

- Baixe os arquivos e extraia a pasta "next-auth-training".

- No mesmo diretório "next-auth-training" abra o terminal/prompt de comandos e digite: npm install (Para instalar as dependências do projeto).

```
npm install
```

- Também no mesmo diretório "next-auth-training" crie um arquivo de variáveis de ambiente ".env.local" com as seguintes chaves/valor:

```
GITHUB_ID=IdDaAplicaçãoNoGithub
GITHUB_SECRET=ChavePrivadaDaSuaAplicaçãoRegistradaNoGithub
```

- Ou seja logue na sua conta no github e registre e autorize essa amostra de aplicação na sua máquina para utilizar a plataforma do GitHub como OAuth.

```
Profile -> Settings -> Developer Settings -> OAuth Apps -> New OAuth App
```

### Inicializando a Aplicação Next Auth Training

- No mesmo diretório "next-auth-training" abra o terminal/prompt de comandos e digite: npm start (Para inicializar a aplicação).

```
npm start
```
