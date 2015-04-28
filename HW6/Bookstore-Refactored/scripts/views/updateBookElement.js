var app = app || {};

(function () {
    function updateBook(id, data) {
        var element = $('#' + id);

        element.children('.author').text(data.author);
        element.children('.title').text(data.title);
        element.children('.isbn').text(data.isbn);
    }

    app.allBooksView.updateBook = updateBook;
}());
