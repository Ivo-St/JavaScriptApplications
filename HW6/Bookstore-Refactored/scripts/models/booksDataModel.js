var app = app || {};

(function () {
    function BooksDataModel(baseUrl, requester, headers) {
        this._requester = requester;
        this._headers = headers;
        this._serviceUrl = baseUrl + 'Book';
    }

    BooksDataModel.prototype.getBooks = function () {
        var headers = this._headers.getHeaders();

        return this._requester.get(this._serviceUrl, headers);
    };

    BooksDataModel.prototype.addBook = function (book) {
        var headers = this._headers.getHeaders();

        return this._requester.post(this._serviceUrl, headers, book);
    };

    BooksDataModel.prototype.deleteBook = function (bookId) {
        var headers = this._headers.getHeaders();
        var url = this._serviceUrl + '/' + bookId;

        return this._requester.makeRequest('delete', headers, url);
    }

    BooksDataModel.prototype.editBook = function (id, data) {
        var headers = this._headers.getHeaders();
        var url = this._serviceUrl + '/' + id;

        return this._requester.put(url, headers, data);
    }

    app.booksDataModel = {
        load: function (baseUrl, requester, headers) {
            return new BooksDataModel(baseUrl, requester, headers);
        }
    }
}());
