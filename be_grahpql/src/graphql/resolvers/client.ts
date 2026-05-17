import { IResolvers } from '@graphql-tools/utils';
import { Db, ObjectId } from 'mongodb';

// Resolver de Client: maneja consultas y mutaciones de clientes freelance en MongoDB
const clientResolver: IResolvers = {
    Query: {
        // Obtiene todos los clientes desde MongoDB
        getClients: async (parent, args, context: Db) => {
            try {
                return await context.collection('clients').find().toArray() ?? [];
            } catch (error) {
                console.log(error);
            }
        },
        // Obtiene un cliente por su ID
        getClientById: async (parent, args, context: Db) => {
            try {
                return await context.collection('clients').findOne({ _id: new ObjectId(args._id) });
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        // Crea un nuevo cliente verificando que no exista previamente
        createClient: async (parent, args, context: Db) => {
            try {
                // Verificar si el cliente ya existe por email
                const existingClient = await context.collection('clients').findOne({ email: args.client.email });
                if (existingClient) throw new Error("Client already exists");

                await context.collection('clients').insertOne({
                    ...args.client,
                    createdAt: new Date().toISOString()
                });
                return "Client created successfully";
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        // Actualiza los datos de un cliente existente por su ID
        updateClient: async (parent, args, context: Db) => {
            try {
                const clientColl = await context.collection('clients').findOne({ _id: new ObjectId(args._id) });
                if (!clientColl) throw new Error("Client not found");

                await context.collection('clients').updateOne(
                    { _id: new ObjectId(args._id) },
                    { $set: args.client }
                );
                return "Client updated successfully";
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    },
    Client: {
        // Resuelve las tecnologías asociadas a un cliente desde MongoDB
        async technologies(parent, args, context: Db) {
            try {
                if (!parent.technologies) return [];
                const techList = parent.technologies.map(async (id: String) => {
                    return await context.collection('technologies').findOne({ _id: new ObjectId(id.toString()) });
                });
                return techList;
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default clientResolver;
