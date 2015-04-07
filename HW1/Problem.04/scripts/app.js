(function () {
    var imgId = 1;
    var WAITINTERVAL = 5000,
        FADEINTIME = 2000,
        TIMER = setInterval(nextSlide, WAITINTERVAL);

    $(document).ready(function () {
        $('#prev').click(handlePrev);
        $('#next').click(handleNext);
        nextSlide();
    });

    function setTimer() {
        window.clearInterval(TIMER);
        TIMER = setInterval(nextSlide, WAITINTERVAL);
    }

    function handlePrev() {
        setTimer();
        prevSlide();
    }

    function handleNext() {
        setTimer();
        nextSlide();
    }

    function nextSlide() {
        $('#slideContainer').children().hide();
        $('#img' + imgId).fadeIn(FADEINTIME);
        if (imgId === 2) {
            imgId = 1;
        } else {
            imgId++;
        }
    }

    function prevSlide() {
        $('#slideContainer').children().hide();
        $('#img' + imgId).fadeIn(FADEINTIME);
        if (imgId === 1) {
            imgId = 2;
        } else {
            imgId--;
        }
    }
}());
