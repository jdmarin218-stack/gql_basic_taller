# gql_freelance

API GraphQL para gestión de proyectos freelance. Permite administrar clientes, tecnologías y usuarios con autenticación JWT, integración con MongoDB y consumo de APIs externas con Axios.

## Tecnologías utilizadas

- Node.js + TypeScript
- Apollo Server + Express
- GraphQL
- MongoDB
- JWT autenticación
- bcryptjs encriptación de contraseñas
- Axios consumo de API externa
- Docker + Docker Compose

## Requisitos previos

- Docker instalado
- Docker Compose instalado
- Git instalado

## Configuración

Clona el repositorio:

    git clone https://github.com/jdmarin218/gql_freelance.git
    cd gql_freelance/be_grahpql

Verifica el archivo .env:

    PORT=4000
    MONGO_URI=mongodb://admin:secret@mongodb:27017
    DB_NAME=invoicerdb
    JWT_SECRET=abc.123

## Ejecución

Levanta el proyecto con Docker Compose:

    docker compose up --build -d

La API estará disponible en:

    http://localhost:37111/graphql

Para detener el proyecto:

    docker compose down

## Estructura del proyecto

    be_grahpql/
    ├── src/
    │   ├── graphql/
    │   │   ├── schemas/
    │   │   └── resolvers/
    │   ├── mongo/
    │   └── config/
    ├── .Dockerfile
    ├── docker-compose.yaml
    └── package.json

## Funcionalidades

- Usuarios con contraseña encriptada con bcrypt
- Autenticación con token JWT
- CRUD de clientes freelance en MongoDB
- CRUD de tecnologías en MongoDB
- Consulta de posts desde API externa con Axios

## Autor

Julian Marin - github.com/jdmarin218