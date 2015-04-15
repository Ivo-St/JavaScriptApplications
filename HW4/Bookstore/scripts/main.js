(function () {
    var appId = '7RgNzNRDdSvE4If0yBuT0ch5mbzNH47rF1OF0JkZ';
    var RESTKey = '12NMhJdL1SebEcelx3zFibEG35RKa5HDuCWsdLll';
    var url = 'https://api.parse.com/1/classes/Book';

    $(document).ready(getBooks());
    $('form').submit(createNewBook);

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
            for (var key in data['results']) {
                var text = data['results'][key]['title'] + ': ' + data['results'][key]['author'];
                if (data['results'][key]['isbn']) {
                    text += ' ISBN: ' + data['results'][key]['isbn'];
                }

                $('<div>').text(text)
                    .appendTo($('#booksContainer'));
            }
        }
    }

    function createNewBook() {
        var title = $('#title').val();
        var author = $('#author').val();
        var isbn = $('#isbn').val();

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
            $('form').trigger('reset');
            $('#booksContainer').html("");
            getBooks();
        });

        return false; //stops the page from reloading
    }
}());
