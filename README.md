# Serviço de Notificações

## 🛠️ Tecnologias Utilizadas
-   [![NestJS](https://img.shields.io/badge/-NestJS-FE0902?logo=nestjs&logoColor=white)](https://nestjs.com/) - Framework que fornece uma arquitetura escalável para desenvolvimento de apps em servidores.
-   [![Prisma](https://img.shields.io/badge/-Prisma-1B222D?logo=prisma&logoColor=white)](https://www.prisma.io/) - ORM que facilita a interação com bancos de dados.
-   [![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org/index.html) - Banco de dados relacional de código aberto.
-   [![Apache Kafka](https://img.shields.io/badge/Apache%20Kafka-000?style=for-the-badge&logo=apachekafka)](https://kafka.apache.org/) - Plataforma de streaming distribuída que permite o processamento deeventos em tempo real de forma escalável e confiável.
-   [![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/) - Superset de JavaScript que adiciona tipagem estática à linguagem.

## 🚀 Funcionalidades

- Envio de notificações para usuários cadastrados no sistema.
- Gerenciamento de filas de notificações utilizando Apache Kafka.
- Utilização de Domain Driven Design para alinhar o código com o negócio.
- Utilização de In-Memory Database para os testes unitários.

### 🧪 Como usar?

Para utilizar o serviço de notificações, siga os seguintes passos:

1. Instale as dependências do projeto com o seguinte comando:

```bash
npm install
```

2. Configure as variáveis de ambiente no arquivo `.env`, conforme o exemplo abaixo:

```
DATABASE_URL="file:./dev.db"
KAFKA_CLIENT_ID="notifications"
KAFKA_BROKER=""
KAFKA_USERNAME=""
KAFKA_PASSWORD=""
```

3. Execute as migrations do banco de dados com o seguinte comando:

```bash
npx prisma migrate dev
```

4. Inicie o serviço com o seguinte comando:

```bash
npm run start:dev
```

5. Crie os seguintes tópicos no Kafka: 

- notifications.send-notification
- notifications.read-notification
- notifications.unread-notification
- notifications.cancel-notification

6. Utilize via HTTP ou por meio do Kafka, criando um outro service que será o producer.

### 🛠️ Testes

Para executar os testes do microservice, utilize o seguinte comando:

```bash
npm run test
```