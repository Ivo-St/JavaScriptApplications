(function () {
    var jsonInput = "[{\"manufacturer\":\"BMW\",\"model\":\"E92 320i\",\"year\":2011,\"price\":50000,\"class\":\"Family\"}, {\
            \"manufacturer\":\"Porsche\",\"model\":\"Panamera\",\"year\":2012,\"price\":100000,\"class\":\"Sport\"}, {\
                \"manufacturer\":\"Peugeot\",\"model\":\"305\",\"year\":1978,\"price\":1000,\"class\":\"Family\"}]";

    jsonInput = JSON.parse(jsonInput);
    var keys = Object.keys(jsonInput[0]);
    var table = $('<table>');
    table.css('border', '1px solid');
    $('body').append(table);
    $(table).append('<tr>');
    keys.forEach(function (key) {
        var td = $('<td>');
        td.css('border', '1px solid');
        td.css('text-align', 'center');
        td.css('background', 'green');
        td.text(key);
        $('tr').append(td);

    });

    jsonInput.forEach(function (element) {
        var tr = $('<tr>');
        $('table').append(tr);
        keys.forEach(function (key) {
            var td = $('<td>');
            td.css('border', '1px solid');
            td.css('text-align', 'center');
            td.text(element[key]);
            $(tr).append(td);
        });
    });

    //fixme split the code in functions?
}());
