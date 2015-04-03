var switchColor = switchColor || {};

(function () {
    function changeColor(color, className) {
        $('.' + className).css('background-color', color);
    }

    (function () {
        $('#inputButton').click(function () {
            var color = $('#color').val();
            var className = $('#insertClass').val();
            changeColor(color, className);
        });
    }());
}());
