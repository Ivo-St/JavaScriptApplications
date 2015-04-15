(function () {
    var appId = '7RgNzNRDdSvE4If0yBuT0ch5mbzNH47rF1OF0JkZ';
    var RESTKey = '12NMhJdL1SebEcelx3zFibEG35RKa5HDuCWsdLll';
    var url = 'https://api.parse.com/1/classes/Book';
    var books;

    $(document).ready(getBooks());
    $('#createElement').submit(createNewBook);
    $('#editElement').submit(submitEdittedBook);


    function resetList() {
        $('form').trigger('reset');
        $('#booksContainer').html("");
        getBooks();
    }

    function getBooks() {
        $.ajax({
            method: 'get',
            url: url,
            headers: {
                'X-Parse-Application-Id': appId,
                'X-Parse-REST-API-Key': RESTKey
            }
        }).success(loadBooks);

        function loadBooks(data) {
            books = [];
            for (var key in data['results']) {
                var book = {
                    title: data['results'][key]['title'],
                    author: data['results'][key]['author'],
                    isbn: data['results'][key]['isbn'],
                    objectId: data['results'][key]['objectId']
                };

                var text = data['results'][key]['title'] + ': ' + data['results'][key]['author'];
                if (data['results'][key]['isbn']) {
                    text += ' ISBN: ' + data['results'][key]['isbn'];
                }

                $('<div>').addClass('book')
                    .attr('id', books.length)
                    .text(text)
                    .appendTo($('#booksContainer'));

                books.push(book);
            }
            $('.book').click(editBook);
        }
    }


    function createNewBook() {
        var title = $('#title').val();
        var author = $('#author').val();
        var isbn = $('#isbn').val();
        if (!isbn) {
            isbn = undefined;
        }

        $.ajax({
            method: 'post',
            url: url,
            headers: {
                'X-Parse-Application-Id': appId,
                'X-Parse-REST-API-Key': RESTKey
            },
            data: JSON.stringify({
                title: title,
                author: author,
                isbn: isbn
            })
        }).success(function (data) {
            alert('Successfully Addet element with id: ' + data['objectId'] + ', on ' + data['createdAt']);
            resetList();
        });

        return false; //stops the page from reloading
    }

    function editBook(event) {
        var target = $(event['currentTarget']);
        var book = books[target.attr('id')];

        $('#editTitle').val(book.title);
        $('#editAuthor').val(book.author);
        $('#editIsbn').val(book.isbn);
        $('#id').val(book.objectId);
    }

    function submitEdittedBook() {
        var title = $('#editTitle').val();
        var author = $('#editAuthor').val();
        var isbn = $('#editIsbn').val();
        var id = $('#id').val();
        if (id === 'objectId') {
            alert('Please click on a book from the list above, to start editing.')
            return false;
        }
        if (!isbn) {
            isbn = undefined;
        }

        $.ajax({
            method: 'put',
            url: url + '/' + id,
            headers: {
                'X-Parse-Application-Id': appId,
                'X-Parse-REST-API-Key': RESTKey
            },
            data: JSON.stringify({
                title: title,
                author: author,
                isbn: isbn
            })
        }).success(function (data) {
            alert('Successfully Edited element with id: ' + id + ', on ' + data['updatedAt']);
            resetList();
        });

        return false; //stops the page from reloading
    }
}());
