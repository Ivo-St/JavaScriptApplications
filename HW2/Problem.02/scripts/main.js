var poll = poll || {};

(function () {
    function submit() {
        poll.stopTimer();
        saveAnswers()
        localStorage['submited'] = true;
    }

    function saveAnswers() {
        var arr = $('input:checked'),
            arr2 = [];
        for (var i = 0; i < arr.length; i++) {
            arr2[i] = $(arr[i]).attr('value');
        }
        localStorage['answers'] = arr2.join();
    }

    function refillAnswers() {
        var arr = localStorage['answers'];
        if (arr) {
            arr = arr.split(',');
            var length = arr.length;
            for (var i = 0; i < length; i++) {
                $('#q' + (i + 1) + 'a' + (arr[i])).attr('checked', '');
            }
        }
    }

    function showCorrectAnswers() {
        var correctAnswers = [1, 4, 2, 3];
        var answers = localStorage['answers'];
        answers = answers.split(',');
        var length = answers.length;
        $('input').attr('disabled', "");
        for (var i = 0; i < length; i++) {
            if (answers[i] !== correctAnswers[i]) {
                $('label[for=q' + (i + 1) + 'a' + (answers[i]) + ']').css('background', 'red');
            }
            $('label[for=q' + (i + 1) + 'a' + (correctAnswers[i]) + ']').css('background', 'green');
        }

    }

    function initPage() {
        $('label').css('background', 'white');
        if (!localStorage['submited']) {
            poll.startTimer(5, 0);
        } else {
            $('input').attr('disabled', "");
            //showCorrectAnswers();
        }
        refillAnswers();
    }

    function handleSubmit() {
        submit();
        showCorrectAnswers();
    }

    function restart() {
        $('#timer').remove();
        localStorage.clear();
        poll.stopTimer();
        $('input').removeAttr('disabled');
        initPage();
    }

    document.onload = initPage();
    document.addEventListener('Finished', handleSubmit);
    $(window).unload(saveAnswers);
    $('#submit').click(handleSubmit);
    $('#restart').click(restart);
}());
