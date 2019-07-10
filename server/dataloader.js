const DataLoader = require('dataloader');
const books = require('./source/books.js');
const authors = require('./source/author.js');
const _ = require('underscore');

function getAuthorByID(authorIDs){
    console.log("CalledgetAuthorByID");
    let authorArr = authors.filter(author=>{
        if(_.contains(authorIDs,author.id)){
            return author;
        }
    });
    return new Promise(res=>{
        return res(_.chain(authorArr).indexBy("id").map(auth=>auth).value());
    });
}

function getBooksByAuthorID(authorIDs){
    console.log("CalledgetBooksByAuthorID");
    let booksArr = books.filter(book=>{
        if(_.contains(authorIDs,book.authorID)){
            return book;
        }
    });

    return new Promise(res=>{        
        let resp = [];
        authorIDs.forEach((authorID,key)=>{
            resp[key] = [];
            booksArr.forEach(book=>{
                if(book.authorID === authorID){
                    resp[key].push(book);
                }
            });
        });        
        return res(resp);
    });
}
module.exports.dataLoad = function dataLoad(){
    return new DataLoader(getAuthorByID);
};

module.exports.loadAuthor = function loadAuthor(){
    return new DataLoader(getBooksByAuthorID);
};