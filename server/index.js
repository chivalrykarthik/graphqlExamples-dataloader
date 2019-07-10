const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema.js');
const resolvers = require('./resolver.js');
const {dataLoad, loadAuthor} = require('./dataloader.js');

let server = new ApolloServer({
	typeDefs,
	resolvers,
	context:()=>({
		loader:{
			dataload:dataLoad(),
			loadAuthor:loadAuthor()
		}
	})
});

server.listen().then(({url})=>console.log(url));