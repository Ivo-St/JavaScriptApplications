var app = app || {};

(function () {
    function deleteElement(selector) {
        $(selector).remove();
    }

    app.allBooksView.delete = deleteElement;
}());
