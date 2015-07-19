window.addEventListener("load", start, false);
function start() {
    setTimeout(function () {
        document.getElementById("Stage__1").addEventListener("click", preset1Activete, false); //Preset1
        document.getElementById("Stage__2").addEventListener("click", preset2Activete, false); //Preset2
        document.getElementById("Stage__3").addEventListener("click", preset3Activete, false); //Preset2
    }, 2000);
    var timer;

    function Miksher(left, right) {
        $("#slider-vertical-left").slider({ value: left });
        $("#SliderLeft_value_text").html(left + "%<br>Reach");

        $("#slider-vertical-right").slider({ value: right });
        $("#SliderRight_value_text").html(right + "%<br>Reach")

    }


    function preset1Activete() {

        ////////////////////////////Add Style to this button///////////////////////////////

        var button = $(this);

        if (!button.hasClass("afterClick_btn-num")) {
            button.addClass("afterClick_btn-num");
        }

        $('#Stage__2').removeClass("afterClick_btn-num");
        $('#Stage__3').removeClass("afterClick_btn-num");

        clearTimeout(timer);

       timer = setTimeout(function () {

            Miksher(50, 50);

            button.removeClass("afterClick_btn-num");
        }, 19250);

        /////////////miksher/////////////////////////////////

        Miksher(90, 10);}


        /////////////////////////////////////////////////////////////////////////////////
    function preset2Activete() {


        ////////////////////////////Add Style to this button///////////////////////////////

        var button = $(this);

        if (!button.hasClass("afterClick_btn-num")) {
            button.addClass("afterClick_btn-num");
        }

        $('#Stage__1').removeClass("afterClick_btn-num");
        $('#Stage__3').removeClass("afterClick_btn-num");



        clearTimeout(timer);

        timer = setTimeout(function () {

            Miksher(50, 50);

            button.removeClass("afterClick_btn-num");
        }, 49250);

        /////////////miksher/////////////////////////////////

        Miksher(90, 90);}


            //////////////////////////////////////////////////////////////////////////////////
            function preset3Activete() {

                ////////////////////////////Add Style to this button///////////////////////////////

                var button = $(this);

                if (!button.hasClass("afterClick_btn-num")) {
                    button.addClass("afterClick_btn-num");
                }

                $('#Stage__1').removeClass("afterClick_btn-num");
                $('#Stage__2').removeClass("afterClick_btn-num");

                clearTimeout(timer);

                timer = setTimeout(function () {

                    Miksher(50, 50);

                    button.removeClass("afterClick_btn-num");
                }, 59214);

                /////////////miksher/////////////////////////////////

                Miksher(10, 90);

                //////////////////////////////////////////////////////////////////////////////////

            }

};