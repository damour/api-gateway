import {GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLObjectType} from "graphql";
import {GraphQLUserType} from "./user";

// Maps id to User object
let fakeDatabase = {
    'a': {
        id: 1,
        username: 'alice',
    },
    'b': {
        id: 2,
        username: 'bob',
    },
};

export const AppGraphQLQueryType = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: {
            type: GraphQLString,
            resolve() {
                return 'Hello world!';
            }
        },
        viewer: { type: GraphQLUserType },
        user: {
            type: GraphQLUserType,
            args:  {
                id: { type : new GraphQLNonNull(GraphQLString) }
            },
            async resolve(root, {id}, {loaders}) {
                const data = await loaders.user.load(id);

                return data[id];
            }
        }
    }
});
