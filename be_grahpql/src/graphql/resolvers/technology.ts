import { IResolvers } from '@graphql-tools/utils';
import { Db, ObjectId } from 'mongodb';

// Resolver de Technology: maneja consultas y mutaciones de tecnologías en MongoDB
const technologyResolver: IResolvers = {
    Query: {
        // Obtiene todas las tecnologías desde MongoDB
        getTechnologies: async (parent, args, context: Db) => {
            try {
                return await context.collection('technologies').find().toArray() ?? [];
            } catch (error) {
                console.log(error);
            }
        }
    },
    Mutation: {
        // Crea una nueva tecnología en MongoDB
        createTechnology: async (parent, args, context: Db) => {
            try {
                await context.collection('technologies').insertOne(args.technology);
                return "Technology created successfully";
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        // Actualiza una tecnología existente por su ID
        updateTechnology: async (parent, args, context: Db) => {
            try {
                const techColl = await context.collection('technologies').findOne({ _id: new ObjectId(args._id) });
                if (!techColl) throw new Error("Technology not found");

                await context.collection('technologies').updateOne(
                    { _id: new ObjectId(args._id) },
                    { $set: args.technology }
                );
                return "Technology updated successfully";
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
    }
}

export default technologyResolver;
