import {GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLList} from "graphql";
import {GraphQLGenderType} from "./gender";
import {GraphQLTransactionType} from "./transaction";

export const GraphQLUserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLInt },
        username: { type: GraphQLString },
        firstname: { type: GraphQLString },
        lastname: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        skype: { type: GraphQLString },
        birthday: { type: GraphQLString },
        gender: { type: GraphQLGenderType },
        currencyCode: { type: GraphQLString },
        //
        balance: { type: GraphQLString },
        cashback: { type: GraphQLString },
        paymentsHistory: { type: new GraphQLList(GraphQLTransactionType) }
        //achivement: {}
    }
});
