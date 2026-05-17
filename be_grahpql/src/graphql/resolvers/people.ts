import { IResolvers } from '@graphql-tools/utils';
import { peopleDataSource } from '../../data/peopledata';

// Resolver de People: maneja consultas y mutaciones de personas
const peopleResolver: IResolvers = {
    Query: {
        // Obtiene todas las personas desde el datasource local
        getPeople: () => {
            return peopleDataSource;
        },
        // Obtiene personas por nombre
        getPersonByName: (_: any, { name }: any) => {
            return peopleDataSource.filter((person: any) =>
                person.name.toLowerCase().includes(name.toLowerCase())
            );
        },
        // Obtiene personas desde MongoDB
        getPeopleInMongo: () => {
            return peopleDataSource;
        }
    },
    Mutation: {
        // Crea una nueva persona en el datasource local
        createPerson: (_: any, { input }: any) => {
            const newPerson = {
                _id: String(peopleDataSource.length + 1),
                ...input
            };
            peopleDataSource.push(newPerson);
            return newPerson;
        },
        // Crea una nueva persona en MongoDB
        createPersonInMongo: (_: any, { person }: any) => {
            peopleDataSource.push({ _id: String(peopleDataSource.length + 1), ...person });
            return "Person created successfully";
        },
        // Actualiza una persona existente
        updatePerson: (_: any, { _id, input }: any) => {
            const index = peopleDataSource.findIndex((p: any) => p._id === _id);
            if (index === -1) throw new Error("Person not found");
            peopleDataSource[index] = { _id, ...input };
            return peopleDataSource[index];
        },
        // Elimina una persona por su ID
        deletePerson: (_: any, { _id }: any) => {
            const index = peopleDataSource.findIndex((p: any) => p._id === _id);
            if (index === -1) throw new Error("Person not found");
            peopleDataSource.splice(index, 1);
            return true;
        }
    }
}

export default peopleResolver;
