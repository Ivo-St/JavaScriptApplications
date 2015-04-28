(function () {
    var array = [{
            "gender": "Male",
            "firstName": "Joe",
            "lastName": "Riley",
            "age": 22,
            "country": "Russia"
        },

        {
            "gender": "Female",
            "firstName": "Lois",
            "lastName": "Morgan",
            "age": 41,
            "country": "Bulgaria"
        },

        {
            "gender": "Male",
            "firstName": "Roy",
            "lastName": "Wood",
            "age": 33,
            "country": "Russia"
        },

        {
            "gender": "Female",
            "firstName": "Diana",
            "lastName": "Freeman",
            "age": 40,
            "country": "Argentina"
        },

        {
            "gender": "Female",
            "firstName": "Bonnie",
            "lastName": "Hunter",
            "age": 23,
            "country": "Bulgaria"
        },

        {
            "gender": "Male",
            "firstName": "Joe",
            "lastName": "Young",
            "age": 16,
            "country": "Bulgaria"
        },

        {
            "gender": "Female",
            "firstName": "Kathryn",
            "lastName": "Murray",
            "age": 22,
            "country": "Indonesia"
        },

        {
            "gender": "Male",
            "firstName": "Dennis",
            "lastName": "Woods",
            "age": 37,
            "country": "Bulgaria"
        },

        {
            "gender": "Male",
            "firstName": "Billy",
            "lastName": "Patterson",
            "age": 24,
            "country": "Bulgaria"
        },

        {
            "gender": "Male",
            "firstName": "Willie",
            "lastName": "Gray",
            "age": 42,
            "country": "China"
        },

        {
            "gender": "Male",
            "firstName": "Justin",
            "lastName": "Lawson",
            "age": 38,
            "country": "Bulgaria"
        },

        {
            "gender": "Male",
            "firstName": "Ryan",
            "lastName": "Foster",
            "age": 24,
            "country": "Indonesia"
        },

        {
            "gender": "Male",
            "firstName": "Eugene",
            "lastName": "Morris",
            "age": 37,
            "country": "Bulgaria"
        },

        {
            "gender": "Male",
            "firstName": "Eugene",
            "lastName": "Rivera",
            "age": 45,
            "country": "Philippines"
        },

        {
            "gender": "Female",
            "firstName": "Kathleen",
            "lastName": "Hunter",
            "age": 28,
            "country": "Bulgaria"
        }];

    function filterByAge() {
        var filtered = _.filter(array, function (element) {
            return element.age >= 18 && element.age <= 24;
        });

        return filtered;
    }

    function filterNameAlphabetically() {
        var filtered = _.filter(array, function (element) {
            return element.firstName < element.lastName;
        });

        return filtered;
    }

    function filterByCountry() {
        var filtered = _.filter(array, function (element) {
            return element.country === 'Bulgaria';
        });

        filtered = _.zip(_.pluck(filtered, 'firstName'), _.pluck(filtered, 'lastName'));

        return filtered;
    }

    function getLastFive() {
        var result = _.slice(array, array.length - 5);

        return result;
    }

    function getFirstNotFromBulgaria() {
        var filtered = _.filter(array, function (element) {
            return element.country !== 'Bulgaria' && element.gender === 'Male';
        });
        filtered = _.slice(filtered, 0, 3);

        return filtered;
    }

    function displayPeople(arr, task) {
        var data = {
            people: arr,
            task: task
        };
        $.ajax({
            url: 'templates/person.html',
            dataType: 'html',
            success: function (template) {
                var output = Mustache.render(template, data);
                $('#container').append(output);
            }
        });
    }

    displayPeople(filterByAge(), 'By age:');
    displayPeople(filterNameAlphabetically(), 'By "first name is alphabetically before their last name":');
    displayPeople(filterByCountry(), 'Only from Bulgaria');
    displayPeople(getLastFive(), 'Last five');
    displayPeople(getFirstNotFromBulgaria(), 'First 3 males not from Bulgaria:');

}());
