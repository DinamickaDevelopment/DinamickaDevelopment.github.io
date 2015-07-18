window.addEventListener("load", start, false);

function start() {
    document.getElementById("preset1").addEventListener("click", preset1Activete, false); //Preset1
    document.getElementById("preset2").addEventListener("click", preset2Activete, false); //Preset2
    document.getElementById("preset3").addEventListener("click", preset3Activete, false); //Preset2
    var timeoutHolder, deeptimeoutholder, deepdeeptimeoutholder, deepdeepdeeptimeoutholde;
    var gift = document.getElementsByClassName("gift")[0];

    function Miksher(left, right)
    {
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
       
        $(".btn-num").each(function () {

            if ($(this).text() != "1")
            {

                $(this).removeClass("afterClick_btn-num");
            }
        });


        clearTimeout(timer);

        var timer = setTimeout(function ()
        {

            Miksher(50, 50);

            button.removeClass("afterClick_btn-num");
        }, 19250);
        
        /////////////miksher/////////////////////////////////

        Miksher(90, 10);

        //////////////////////////////////////////////////////////////////////////////////

        var containerDots = document.getElementsByClassName("hum-line")[0];
        gift.removeAttribute("style"); gift.className = "gift";
        //remove old scene
        for (var i = (containerDots.childNodes.length-1); i > -1; i--) {
            containerDots.removeChild(containerDots.childNodes[i]);
        }
        //create new animation elements
        var pointer1 = document.createElement("div"), pointer2 = document.createElement("div"), pointer3 = document.createElement("div")
        var manContainer1 = document.createElement("div"), manContainer2 = document.createElement("div"), manContainer3 = document.createElement("div");
        

        containerDots.appendChild(manContainer1);
        containerDots.appendChild(manContainer2);

        manContainer1.className = "manBox preset1-man1-animate";
        manContainer2.className = "manBox preset1-man2-animate"

        manContainer1.appendChild(pointer1);
        manContainer2.appendChild(pointer2);

        pointer2.className = "pointer";
        pointer1.className = "pointer";
        
        clearTimeout(deepdeepdeeptimeoutholde);
        clearTimeout(deepdeeptimeoutholder);
        clearTimeout(deeptimeoutholder);
        clearTimeout(timeoutHolder);

        timeoutHolder =  setTimeout(function () {
            containerDots.appendChild(manContainer3);
            manContainer3.className = "manBox preset1-man3-animate";
            manContainer3.appendChild(pointer3);
            pointer3.className = "pointer";
            deeptimeoutholder = setTimeout(function () {
                    manContainer3.style.bottom = "60px";
                    manContainer3.style.opacity = 0;
                    gift.style.top = "-60px";
                    gift.style.opacity = 0;
            },4000)

        }, 4500);
    }

    function preset2Activete() {


        ////////////////////////////Add Style to this button///////////////////////////////

        var button = $(this);

        if (!button.hasClass("afterClick_btn-num")) {
            button.addClass("afterClick_btn-num");
        }

        $(".btn-num").each(function () {

            if ($(this).text() != "2") {

                $(this).removeClass("afterClick_btn-num");
            }
        });



        clearTimeout(timer);

        var timer = setTimeout(function () {

            Miksher(50, 50);

            button.removeClass("afterClick_btn-num");
        }, 49250);

        /////////////miksher/////////////////////////////////

         Miksher(90, 90);


        //////////////////////////////////////////////////////////////////////////////////


        var containerDots = document.getElementsByClassName("hum-line")[0];
        gift.removeAttribute("style");
        //remove old scene
        for (var i = (containerDots.childNodes.length - 1) ; i > -1; i--) {
            containerDots.removeChild(containerDots.childNodes[i]);
        }
        //create new animation elements
        var pointer1 = document.createElement("div"), pointer2 = document.createElement("div"), pointer3 = document.createElement("div")
        var manContainer1 = document.createElement("div"), manContainer2 = document.createElement("div"), manContainer3 = document.createElement("div");
        
        containerDots.appendChild(manContainer1);

        manContainer1.className = "manBox preset2-vespa-animate";

        manContainer1.appendChild(pointer1);

        pointer1.className = "pointer";

        gift.className = "gift preset2-gift-animation"
        clearTimeout(deepdeepdeeptimeoutholde);
        clearTimeout(deepdeeptimeoutholder);
        clearTimeout(deeptimeoutholder);
        clearTimeout(timeoutHolder); 

        timeoutHolder = setTimeout(function () {
            containerDots.appendChild(manContainer2);
            manContainer2.className = "manBox preset2-runBeforeTalkMan-animate"
            manContainer2.appendChild(pointer2);
            pointer2.className = "pointer";
            gift.className = "gift preset2-gift-scene2-animation"
            deeptimeoutholder = setTimeout(function () {
                manContainer2.className = "manBox width-80 preset2-speechTalkMan-animation";
                deepdeeptimeoutholder = setTimeout(function () {
                    manContainer1.className = "manBox width-80 preset2-answerTalkman-animation"
                    gift.className = "gift preset2-gift-scene3-animate"
                },7000);
            }, 9010);
        },10600)

    }

    function preset3Activete() {

        ////////////////////////////Add Style to this button///////////////////////////////

        var button = $(this);

        if (!button.hasClass("afterClick_btn-num")) {
            button.addClass("afterClick_btn-num");
        }

        $(".btn-num").each(function () {

            if ($(this).text() != "3") {

                $(this).removeClass("afterClick_btn-num");
            }
        });

        clearTimeout(timer);

        var timer = setTimeout(function () {

            Miksher(50, 50);

            button.removeClass("afterClick_btn-num");
        }, 59214);

        /////////////miksher/////////////////////////////////

        Miksher(10, 90);

        //////////////////////////////////////////////////////////////////////////////////


        var containerDots = document.getElementsByClassName("hum-line")[0];
        //remove old scene
        for (var i = (containerDots.childNodes.length - 1) ; i > -1; i--) {
            containerDots.removeChild(containerDots.childNodes[i]);
        }
        //create new animation elements
        var pointer1 = document.createElement("div"), pointer2 = document.createElement("div"), pointer3 = document.createElement("div")
        var manContainer1 = document.createElement("div"), manContainer2 = document.createElement("div"), manContainer3 = document.createElement("div");
        var gift = document.getElementsByClassName("gift")[0];




        /*==============================================================        Two drivers + gift ==================================================================*/

        containerDots.appendChild(manContainer1);

        manContainer1.className = "manBox preset3-man_vespas-animate";

        pointer1.className = "pointer_vespars";

        manContainer1.appendChild(pointer1);

        // delete and insert element for anumation
        gift.classList.remove("gift_for_vespars");
        // -> triggering reflow /* The actual magic */
        // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
        gift.offsetWidth = gift.offsetWidth;

        // -> and re-adding the class
        gift.classList.add("gift_for_vespars");


        /*==============================================================  One driver + talking man ==================================================================*/

        clearTimeout(deepdeepdeeptimeoutholde);
        clearTimeout(deepdeeptimeoutholder);
        clearTimeout(deeptimeoutholder);
        clearTimeout(timeoutHolder);

        timeoutHolder = setTimeout(function () {
            containerDots.appendChild(manContainer2);

            manContainer2.className = "manBox preset3-man2_vespas-animate";

            manContainer2.appendChild(pointer2);
            pointer2.className = "pointer_vespars";
            //    deeptimeoutholder = setTimeout(function () {
            //        manContainer3.style.bottom = "60px";
            //        manContainer3.style.opacity = 0;
            //        gift.style.top = "-60px";
            //        gift.style.opacity = 0;
            //    }, 4000)

        }, 12500);

    }
        

}