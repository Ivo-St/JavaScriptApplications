var app = app || {};

(function () {
    var appId = '7RgNzNRDdSvE4If0yBuT0ch5mbzNH47rF1OF0JkZ';
    var RESTKey = '12NMhJdL1SebEcelx3zFibEG35RKa5HDuCWsdLll';
    var url = 'https://api.parse.com/1/classes/Book';

    var headers = app.headers.load(appId, RESTKey);
    var requester = app.requester.load();
    var model = app.booksDataModel.load('https://api.parse.com/1/classes/', requester, headers);
    var controller = app.booksController.load(model);

    $(document).ready(controller.loadStudents('#container'));
    $('#createElement').submit(function () {
        controller.addBook();
    });
    $('#editElement').submit(function () {
        controller.editBook();
        return false;
    });
    document.addEventListener('deleted', function (args) {
        controller.deleteBook(args);
    });
    document.addEventListener('edit', function (arguments) {
        controller.getBookDetails(arguments.detail);
    });
}());
