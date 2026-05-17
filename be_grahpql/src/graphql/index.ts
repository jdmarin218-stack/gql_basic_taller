import {GraphQLSchema} from 'graphql';
import 'graphql-import-node';
import cartoonsSchema from './schemas/cartoons.graphql';
import peopleSchema from './schemas/people.graphql';
import clientSchema from './schemas/client.graphql';
import technologySchema from './schemas/technology.graphql';
import userSchema from './schemas/users.graphql';
import postsSchema from './schemas/posts.graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import mergeTypeDefs from 'graphql-tools-merge-typedefs';
import cartoonsResolver from './resolvers/cartoons';
import peopleResolver from './resolvers/people';
import clientResolver from './resolvers/client';
import technologyResolver from './resolvers/technology';
import userResolver from './resolvers/user';
import postResolver from './resolvers/posts';

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: mergeTypeDefs([
        cartoonsSchema,
        peopleSchema,
        clientSchema,
        technologySchema,
        userSchema,
        postsSchema
    ]),
    resolvers: [cartoonsResolver, peopleResolver, clientResolver, technologyResolver, userResolver, postResolver]
});
