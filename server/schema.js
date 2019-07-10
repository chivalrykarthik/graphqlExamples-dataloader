const { gql } = require('apollo-server');

module.exports =  gql`
type Book{
    name:String,
    id:Int,
    authorID:Int,
    author:Author
}
type Author{
    name:String
    id:Int
    books:[Book]
}
type Query{
    books:[Book],
    authors:[Author]

}`;

