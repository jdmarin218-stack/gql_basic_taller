# gql_basic

# GraphQL Lab - Taller Optativa ITM

Proyecto GraphQL con Node.js, TypeScript, Apollo Server, MongoDB y Docker.

## Tecnologias utilizadas
- GraphQL + Apollo Server Express
- Node.js + TypeScript
- MongoDB como base de datos
- Docker + Docker Compose
- JWT para autenticacion
- bcrypt para encriptar passwords
- Axios para consumir APIs externas

## Como ejecutar

1. Clonar el repositorio y cambiar al branch Lab9
2. Entrar a la carpeta be_grahpql
3. Ejecutar: docker compose up --build -d
4. Abrir en el navegador: http://localhost:37111/graphql

## Queries principales
- getCartoons: lista de cartoons en memoria
- getPeople: lista de personas en memoria
- getPosts: posts desde API externa con Axios
- getCurrentUser: usuario autenticado con JWT

## Mutations principales
- createUser: crear usuario en MongoDB
- authUser: autenticar y obtener JWT token