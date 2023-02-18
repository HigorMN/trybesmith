<h1 align="center">TrybeSmith API</h1>

Neste projeto, foi desenvolvida uma API em Typescript para uma loja de itens medievais. Foram criadas todas as camadas da aplicação, incluindo Models, Service e Controllers, permitindo que sejam realizadas as operações básicas de um banco de dados, como Criação, Leitura, Atualização e Exclusão (CRUD).

Para isso, foram criados endpoints específicos que irão se comunicar com um banco de dados MySQL, permitindo que sejam realizadas as operações mencionadas acima. Assim, a API permite o gerenciamento completo da loja de itens medievais, desde a criação de novos produtos até a exclusão de itens que não estão mais disponíveis

<h2>Stack utilizada</h2>

Back-end: `Node`, `Express`, `Typescript`, `JWT`, `MySQL2`, `Docker`

<h2>🐋 Rodando no Docker</h2>

Para executar o serviço Node, utilize o comando `docker-compose up -d`

Esse serviço ira inicializar um container chamado `trybers_and_dragons`. A partir daqui você pode rodar o container `trybers_and_dragons` via CLI ou abri-lo no VS Code. Use o comando `docker exec -it trybers_and_dragons bash`.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano. Instale as dependências "Caso existam" com `npm install`

⚠️ **Atenção** ⚠️ Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima.

⚠️ **Atenção** ⚠️ O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container.

⚠️ **Atenção** ⚠️ Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador.

⚠️ **Atenção** ⚠️ Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro:

```typescript
The Compose file './docker-compose.yml' is invalid because:
Unsupported config option for services.db: 'platform'
Unsupported config option for services.node: 'platform'
```

<details>
  <summary><strong>🤷🏽‍♀️ Foram encontradas 2 possíveis soluções para este problema:</strong></summary><br />

- Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos.

- Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte.
</details>

<h1 align="center">Documentação da API</h1>

**Login na aplicação**

```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `username` | `string` | **Obrigatório no body**. User cadastrado no banco de dados |
| `password` | `string` | **Obrigatório no body**. Password cadastrado no banco de dados |

**Criar um user**

```http
  POST /users
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `username`      | `string` | **Obrigatório no body**. User para cadastrar |
| `vocation`      | `string` | **Obrigatório no body**. Vocation para cadastrar |
| `level`      | `number` | **Obrigatório no body**. Level para cadastrar |
| `password`      | `string` | **Obrigatório no body**. Password para cadastrar |

**Criar pedidos da loja**

```http
  POST /orders
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório no Header**. Key Recebida no login ou na hora de criar um usuario |
| `productsIds`      | `Array<Number>` | **Obrigatório no body**. ProductsIds existentes no banco de dados |

**Criar produtos na loja**

```http
  POST /products
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `Authorization`      | `string` | **Obrigatório no Header**. Key Recebida no login ou na hora de criar um usuario |
| `name`      | `string` | **Obrigatório no body**. Nome do produto |
| `amount`      | `number` | **Obrigatório no body**. Quantidade do produto |

**Pegar produtos da loja**

```http
  GET /products
```

**Pegar orders da loja**

```http
  GET /orders
```

Qualquer duvida entre em contato comigo:

E-mail: higor.maranhao2000@gmail.com

Linkedin: https://www.linkedin.com/in/higor-maranhao/
