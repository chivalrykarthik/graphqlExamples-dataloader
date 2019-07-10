const books = require('./source/books.js');
const authors = require('./source/author.js');
const graphqlFields = require('graphql-fields');

module.exports = {
    Book:{
        author:(parent,args,conext,info)=>{
            //let processedInfo = graphqlFields(info);
            let {loader} = conext;
            let {dataload} = loader;
            return dataload.load(parent.authorID);            
        }
    },
    Author:{
        books:(parent,args,context,info)=>{
            //let processedInfo = graphqlFields(info);
            let {loader} = context;
            let {loadAuthor} = loader;
            return loadAuthor.load(parent.id);
        }
    },
    Query:{
        books:()=>books,
        authors:()=>authors
    }
};