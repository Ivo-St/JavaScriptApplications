var app = app || {};

(function () {
    function render(selector, data) {
        $.ajax({
            type: 'get',
            url: 'templates/templateBook.html',
            dataType: 'html',
            success: function (template) {
                var output = Mustache.render(template, data);
                $(selector).prepend(output);
            }
        }).then(function () {
            $('.del').click(function (args) {
                var event = new CustomEvent('deleted', {
                    'detail': args.currentTarget.parentNode
                });
                document.dispatchEvent(event);
            });

            $('.book').click(function (args) {
                var event = new CustomEvent('edit', {
                    detail: args.currentTarget
                });
                document.dispatchEvent(event);
            })
        });
    }

    app.allBooksView = {
        render: function (selector, data) {
            return render(selector, data);
        }
    }
}());
