var app = app || {};

(function () {
    function fillEditForm(objectId, author, title, isbn) {
        isbn = isbn || '';

        $('#editTitle').val(title);
        $('#editAuthor').val(author);
        $('#editIsbn').val(isbn);
        $('#id').val(objectId);
    }

    app.allBooksView.loadDetails = fillEditForm;
}());
