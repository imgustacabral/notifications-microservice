melhore esse readme coloque que utilizou o faker tambem

# Microservice de Notificações

Este é um microservice de notificações criado utilizando as seguintes tecnologias:

- [![NestJS](https://img.shields.io/badge/-NestJS-FE0902?logo=nestjs&logoColor=white)](https://nestjs.com/) - Framework que fornece uma arquitetura escalável para desenvolvimento de apps em servidores.
- [![Prisma](https://img.shields.io/badge/-Prisma-1B222D?logo=prisma&logoColor=white)](https://www.prisma.io/) - ORM que facilita a interação com bancos de dados.
- [![Redis](https://img.shields.io/badge/-Redis-DC382D?logo=redis&logoColor=white)](https://redis.io/) - Banco de dados NoSQL em memória utilizado para cache e gerenciamento de filas.
- [![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática à linguagem.
- Domain Driven Design - Metodologia de desenvolvimento de software que busca alinhar o código com o negócio.
- TDD (Test Driven Development) - Metodologia de desenvolvimento de software que consiste em escrever testes antes de escrever o código.

## 🚀 Funcionalidades

- Envio de notificações para usuários cadastrados no sistema.
- Gerenciamento de filas de notificações utilizando Redis.
- Utilização de Domain Driven Design para alinhar o código com o negócio.
- Utilização de TDD para garantir a qualidade do código.

### 🧪 Como usar?

Para utilizar o microservice de notificações, siga os seguintes passos:

1. Instale as dependências do projeto com o seguinte comando:

```bash
npm install
```

2. Configure as variáveis de ambiente no arquivo `.env`, conforme o exemplo abaixo:

```
DATABASE_URL="postgresql://user:password@localhost:5432/notificacoes"
REDIS_URL="redis://localhost:6379"
```

3. Execute as migrations do banco de dados com o seguinte comando:

```bash
npm run prisma:migrate
```

4. Inicie o serviço com o seguinte comando:

```bash
npm run start:dev
```

5. Envie uma requisição POST para a rota `/notifications` com o seguinte corpo:

```json
{
	"recipientId": "UUID",
	"content": "New Notification",
	"category": "Social"
}
```

### 🛠️ Testes

Para executar os testes do microservice, utilize o seguinte comando:

```bash
npm run test
```

Os testes foram escritos utilizando a biblioteca Jest e cobrem as principais funcionalidades do serviço. A metodologia de TDD foi utilizada para garantir a qualidade do código e a cobertura de testes.