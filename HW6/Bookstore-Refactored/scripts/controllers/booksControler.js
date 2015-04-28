var app = app || {};

(function () {
    function BooksController(model) {
        this._model = model;
    }

    BooksController.prototype.loadStudents = function (selector) {
        this._model.getBooks()
            .then(function (booksData) {
                var outputData = {
                    books: booksData.results
                };
                app.allBooksView.render(selector, outputData);
            }, function (error) {
                console.log(error.responseText);
            });
    };

    BooksController.prototype.addBook = function () {
        var title = $('#title').val();
        var author = $('#author').val();
        var isbn = $('#isbn').val();
        if (!isbn) {
            isbn = undefined;
        }

        var book = {
            title: title,
            author: author,
            isbn: isbn
        };
        console.log(JSON.stringify(book));
        this._model.addBook(book);
    };

    BooksController.prototype.deleteBook = function (event) {
        var bookId = event.detail.getAttribute('id');
        this._model.deleteBook(bookId)
            .then(app.allBooksView.delete(event.detail));
    };

    BooksController.prototype.getBookDetails = function (arguments) {
        var bookId = arguments.getAttribute('id');
        var bookTitle = $(arguments).children('.title').text();
        var bookAuthor = $(arguments).children('.author').text();
        var bookIsbn = $(arguments).children('.isbn').text();

        app.allBooksView.loadDetails(bookId, bookAuthor, bookTitle, bookIsbn);
    };

    BooksController.prototype.editBook = function (arguments) {
        var title = $('#editTitle').val();
        var author = $('#editAuthor').val();
        var isbn = $('#editIsbn').val() || undefined;
        var id = $('#id').val();
        var book = {
            title: title,
            author: author,
            isbn: isbn
        };

        this._model.editBook(id, book)
            .then(function () {
                app.allBooksView.updateBook(id, book);
            });
    };

    app.booksController = {
        load: function (model) {
            return new BooksController(model);
        }
    };
}());
