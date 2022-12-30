
## Como rodar o projeto

#### O que você precisa ter instalado em sua máquina:
 🍃[ Node.js ]<br/>
 💻[ Git ]<br/>
 💿[ Postgre ]<br/>
 ⌨[ yarn (opcional) ]
 

<br/>

- Clone o projeto: 

```bash
git clone https://github.com/kauan777/livraria-backend.git
````

<br/>

- Crie o banco de dados no seu Postgresql

```mysql
  CREATE DATABASE db_books;
 ```

<br/>


 
- Adicione um arquivo .env na raiz do seu projeto com as informações abaixo

```.env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:PORT/db_books?schema=public"
````

 <br/>

- Troque as informações no arquivo .env pelas suas:
```js
// USER = Nome do usuário (normalmente é postgres)

// PASSWORD = Sua senha 
// Se sua senha tiver caractere especial, substitua conforme o site: https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding

// PORT = Porta que está rodando seu MySql (por padrão é 5432)
```

<br/>

- Instale as dependências

```bash
npm install
# ou
yarn 
```

<br/>

- Faça a migração

```bash
npm run migrate
# ou
yarn migrate
```


<br/>

- Comece a usar

```bash
npm run dev
# ou
yarn dev (webpack compiler)
yarn start:dev (hot heload compiler)
```





