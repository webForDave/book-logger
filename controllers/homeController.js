let books = [
    {
        title: "1946",
        author: "David Akinola"
    }
];

exports.homeProcessor = (req, res) => {
    res.render("index");
}

exports.getAllBooks = (req, res) => {
    res.render("books", {allBooks: books});
}

exports.createNewBook = (req, res) => {
    res.render("newBook");
}

exports.newBookSuccess = (req, res) => {
    res.render("bookAdded");
}

exports.bookDetail = (req, res) => {
    let specificBook = req.params.bookTitle;

    books.forEach(book => {
        if (book.title == specificBook) {
            res.render("specificBook")
        } else {
            res.send("book not found")
        }
    })    
}