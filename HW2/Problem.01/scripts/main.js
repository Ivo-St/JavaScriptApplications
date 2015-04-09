(function () {
    if (!localStorage['name']) {
        console.log("i run");
        var input = $('<input>');
        input.attr('type', 'text');
        input.attr('id', 'input');
        $('body').append(input);
        $('<button>').attr('id', 'submit')
            .text("Submit")
            .click(function () {
                localStorage['name'] = input.val();
                localStorage['visits'] = 1;
                sessionStorage['visits'] = 1;
                input.val("");
                greet();
            })
            .appendTo($('body'));
    } else {
        localStorage['visits'] ++;
        if (sessionStorage['visits']) {
            sessionStorage['visits'] ++;
        } else {
            sessionStorage['visits'] = 1;
        }
        greet();
    }

    function greet() {
        $('<div>')
            .text('Hello ' + localStorage['name'] + '. You have visited us ' + localStorage['visits'] + ' times in total and ' + sessionStorage['visits'] + ' times this session.')
            .appendTo($('body'));
    }
}());
