const getTheTitles = function(books) {
    let bookTitles = []
    for (let i = 0; i < books.length; i++){
        let getBookTitle = books[i].title
        let finalBooks = bookTitles.push(getBookTitle)
    }
    return bookTitles

};

// Do not edit below this line
module.exports = getTheTitles;
