import {GraphQLEnumType} from "graphql";

export const GraphQLGenderType = new GraphQLEnumType({
    name: 'Gender',
    description: 'User gender',
    values: {
        MALE: { value: 'male' },
        FEMALE: { value: 'female' }
    }
});
