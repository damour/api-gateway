import express from 'express';
import {AppGraphQLQueryType} from "./types/query";
import graphqlHTTP from 'express-graphql';
import {GraphQLSchema} from 'graphql';
import DataLoader from 'dataloader';
import fetch from 'node-fetch';

let PORT = 8080;

let app = express();

const schema = new GraphQLSchema({
    query: AppGraphQLQueryType
});

/*function getUsers() {
    console.log('http://strip.loc/api/admin/girls/');

    return fetch('http://strip.loc/api/admin/girls/')
        .then(res => res.json());
}*/

async function getUsers() {
    console.log('http://strip.loc/api/admin/girls/');

    let response = await fetch('http://strip.loc/api/admin/girls/');

    return response.json();
}

// http://www.eloquentwebapp.com/using-facebooks-dataloader-graphql/
const userLoader = new DataLoader(urls => Promise.all(urls.map(getUsers)));

const loaders = {
    user: userLoader
};

app.use('/graphql', graphqlHTTP(request => {
    const startTime = Date.now();

    return {
        schema: schema,
        graphiql: true,
        context: { loaders },
        extensions({document, variables, operationName, result}) {
            return {runTime: Date.now() - startTime};
        }
    }
}));

app.get('/health', function(req, res) {
    res.send('hello');
});

let server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
