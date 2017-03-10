import {GraphQLInt, GraphQLString, GraphQLObjectType, GraphQLEnumType} from "graphql";
import {GraphQLGenderType} from "./gender";

export const GraphQLTransactionStatusType = new GraphQLEnumType({
    name: 'TransactionStatus',
    description: 'Transaction status',
    values: {
        SUCCESS: { value: 'success' },
        IN_PROGRESS: { value: 'in_progress' },
        ERROR: { value: 'error' }
    }
});

export const GraphQLTransactionType = new GraphQLObjectType({
    name: 'Transaction',
    fields: {
        id: { type: GraphQLInt },
        date: { type: GraphQLString },
        operation_type: { type: GraphQLString },
        payment_system: { type: GraphQLString },
        transaction_status: { type: GraphQLTransactionStatusType },
        comment: { type: GraphQLString }
    }
});
