(function () {
    $('#submitCountry').click(selectCountry);
    $('#submitChange').click(editElement);
    $('#getIds').click(function () {
        getIds('Town');
    });
    $('#getCountryIds').click(function () {
        getIds('Country');
    })
    $('#delete').click(deleteTown);
    $('#add').click(addTown);

    function selectCountry() {
        var countryName = $('#selectCountry').val();
        $('#selectCountry').val('');

        $.ajax({
            method: 'get',
            url: 'https://api.parse.com/1/classes/Town/?where={"country":{"$inQuery":{"where":{"name":"' +
                countryName +
                '"},"className":"Country"}}}',
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            }
        }).success(displayData);
    }

    function displayData(data) {
        $('#towns').html('').css('visibility', 'visible');
        for (var element in data['results']) {
            $('<div>').text(data['results'][element]['name'])
                .appendTo('#towns');
        }
    }

    function editElement() {
        var id = $('#objectId').val();
        $('#objectId').val('');
        var name = $('#newName').val();
        $('#newName').val('');

        $.ajax({
            method: 'put',
            url: 'https://api.parse.com/1/classes/Town/' + id,
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

    function getIds(className) {
        $.ajax({
            method: 'get',
            url: 'https://api.parse.com/1/classes/' + className + '/',
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            }
        }).success(function (data) {
            alert("Look in console.\nPlease don't delete all rows.");
            console.log(className + "s Ids:");
            for (var element in data['results']) {
                console.log(data['results'][element]['name'] + ': ' + data['results'][element]['objectId']);
            }
        });
    }

    function deleteTown() {
        var id = $('#deleteTown').val();
        $('#deleteTown').val('');

        $.ajax({
            method: 'delete',
            url: 'https://api.parse.com/1/classes/Town/' + id,
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            }
        }).success(function (data) {
            alert('Successfully deleted element with id: ' + id);
        });
    }

    function addTown() {
        var name = $('#addTown').val();
        $('#addTown').val('');
        var countryId = $('#country').val();
        $('#country').val('');

        $.ajax({
            method: 'post',
            url: 'https://api.parse.com/1/classes/Town/',
            headers: {
                'X-Parse-Application-Id': 'DIZZccoo6q5wziNASutTeNNfy1BoSoA3fPDGwO2X',
                'X-Parse-REST-API-Key': 'yS0vjvncCGgYkv1CqUJ1pZgB9FaFkQcrxEnDBD1M'
            },
            data: JSON.stringify({
                name: name,
                country: {
                    __type: 'Pointer',
                    className: 'Country',
                    objectId: countryId
                }
            })
        }).success(function (data) {
            alert('Successfully Addet element with id: ' + data['objectId']);
        });
    }
}());
