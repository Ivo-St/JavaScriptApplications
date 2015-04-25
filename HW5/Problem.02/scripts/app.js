(function () {
    var data = {
        people: [
            {
                name: 'ivo',
                jobTitle: 'jobTitle1',
                website: 'www.example.com'
            },
            {
                name: 'Pesho',
                jobTitle: 'jobTitle2',
                website: 'www.example2.net'
            },
            {
                name: 'Georgi',
                jobTitle: 'jobTitle3',
                website: 'www.example3.bg'
            }]
    };
    $.ajax({
        url: 'templates/table.html',
        dataType: 'html',
        success: function (template) {
            var output = Mustache.render(template, data);
            $('#container').append(output);
        }
    });
}());
