var poll = poll || {};

(function () {
    var interval;

    function startTimer(minutes, seconds) {
        $('<div>').attr('id', 'timer')
            .prependTo($('body'));

        interval = window.setInterval(function () {
            $('#timer').text(minutes + ' : ' + seconds);
            if (seconds === 0) {
                if (minutes === 0) {
                    stopTimer();
                    var event = new Event("Finished");
                    document.dispatchEvent(event);
                }
                seconds = 60;
                minutes--;
            }
            seconds--;
        }, 1000);
    }

    function stopTimer() {
        window.clearInterval(interval);
        $('#timer').text('Finished');
    }

    poll.startTimer = startTimer;
    poll.stopTimer = stopTimer;
}());
