﻿window.addEventListener("load", start, false);

function start() {
    document.getElementById("preset1").addEventListener("click", preset1Activete, false); //Preset1
    //document.getElementById("preset2").addEventListener("click", preset2Activete, false);
    document.getElementById("preset3").addEventListener("click", preset3Activete, false);
    var timeoutHolder, deeptimeoutholder;
    var gift = document.getElementsByClassName("gift")[0];

    function preset1Activete() {
        var containerDots = document.getElementsByClassName("hum-line")[0];
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
  
    function preset3Activete()
    {
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
                

        clearTimeout(deeptimeoutholder);
        clearTimeout(timeoutHolder);

        timeoutHolder = setTimeout(function () {
            containerDots.appendChild(manContainer2);

            manContainer2.className = "manBox preset3-man2_vespas-animate";

            manContainer3.appendChild(pointer2);
            pointer2.className = "pointer";
        //    deeptimeoutholder = setTimeout(function () {
        //        manContainer3.style.bottom = "60px";
        //        manContainer3.style.opacity = 0;
        //        gift.style.top = "-60px";
        //        gift.style.opacity = 0;
        //    }, 4000)

        }, 12500);

    }

}