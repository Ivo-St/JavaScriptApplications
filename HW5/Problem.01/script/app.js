var app = app || {};
(function () {
    app.router = Sammy(function () {
        this.get('#/Bob', greetPerson);
        this.get('#/Sam', greetPerson);
        this.get('#/John', greetPerson);
        this.get('#/Dimiter', greetPerson);
    });

    function greetPerson(arg) {
        var selector = '#greet';
        var text = 'Hello, ';
        var name = arg.path.split('#/')[1];
        $(selector).html(text + name);
    }
    app.router.run('#/Bob');
}());
