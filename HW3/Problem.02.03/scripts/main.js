(function () {
    $.ajax({
        method: 'get',
        url: 'https://api.parse.com/1/classes/Country/',
        headers: {
            'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
            'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
        }
    }).success(function (data) {
        for (var element in data['results']) {
            $('<div>').text(data['results'][element]['name'])
                .appendTo('#container');
        }
    });
    $('#add').click(addElement);
    $('#edit').click(editElement);
    $('#delete').click(deleteElement);
    $('#getIds').click(getIds);

    function addElement() {
        var name = $('#addCountry').val();
        $('#addCountry').val('');

        $.ajax({
            method: 'post',
            url: 'https://api.parse.com/1/classes/Country/',
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            },
            data: JSON.stringify({
                name: name
            })
        }).success(function (data) {
            alert('Object key is: ' + data['objectId']);
            console.log(data['objectId']);
        });
    }

    function editElement() {
        var id = $('#editCountry').val();
        $('#editCountry').val('');
        var name = $('#countryName').val();
        $('#countryName').val('');

        $.ajax({
            method: 'put',
            url: 'https://api.parse.com/1/classes/Country/' + id,
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            },
            data: JSON.stringify({
                name: name
            })
        }).success(function () {
            console.log("Successfully edited");
        });
    }

    function deleteElement() {
        var id = $('#deleteCountry').val();
        $('#deleteCountry').val('');

        $.ajax({
            method: 'delete',
            url: 'https://api.parse.com/1/classes/Country/' + id,
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            },
        }).success(function () {
            console.log("Successfully deleted");
        });
    }

    function getIds() {
        $('#selectCountry').val('');

        $.ajax({
            method: 'get',
            url: 'https://api.parse.com/1/classes/Country/',
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            }
        }).success(function (data) {
            alert("Look in console.\nPlease don't delete all rows.");
            for (var element in data['results']) {
                console.log(data['results'][element]['name'] + ': ' + data['results'][element]['objectId']);
            }
        });
    }
}());
