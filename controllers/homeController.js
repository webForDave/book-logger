let books = [
    {
        title: "1964",
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