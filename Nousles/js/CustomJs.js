﻿var list_open = false;
var scrollTop = 0;
//var Mystyles = {

//    position: "fixed", 
//    width: "100%",
//    background: "rgba(0,0,0,0.9)",
//    zIndex: "9999999999",
//    top:"0"
   
//};

var noneStyle =
    {
        position: "static",
        width: "100%",
        background: "inherit",
        zIndex: "inherit",
        
    }

$(document).scroll(
            
            function()
            {
                scrollTop = $(document).scrollTop();
    		    
                if (scrollTop > 100) {

                    $("#Mymenu").attr('style', " position:fixed !important; width: 100% !important; background: rgba(0,0,0,0.9) !important; z-index: 999; top:0 !important");
                    $("#Mymenu .nav").css("margin", "8px auto 0px");
                }
                else
                { 
                    $("#Mymenu").attr("style", " ");
                    $("#Mymenu .nav").css("margin", "20px auto 0px");

                }

    		});



//1.Scrolling Parallax
//2.Service logic


// 1.Scrolling Parallax
// Using jquery.scrolling-parallax.js

$.scrollingParallax('img/bg4.jpg', {
    enableHorizontal: true,
    bgWidth: '100%',
    staticSpeed: 0.04,
});


//$(document).ready(function () {
//    $('body').each(function () {
//        var $bgobj = $(this); // создаем объект
//        $(window).scroll(function () {
//            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); // вычисляем коэффициент 
//            // Присваиваем значение background-position
//            var coords = '0' + yPos + 'px';
//            // Создаем эффект Parallax Scrolling
//            $bgobj.css({ backgroundPosition: coords });
//        });
//    });
//});

///////-------------------------------------------------------------------

$(".circle").click(function (event) {

    $(".opac").each(function () {

        $(this).css("display","none");

    }); 

    var mmm = this.firstElementChild;

    mmm.style.display = "block";

});
//function opacity1() {
//    var elem = document.getElementsByClassName("RXD-info-corner opac-1")[0];
//    if (elem.style.display == "none")
//    {
//        elem.style.display = "block";
//    }
//    else
//    {
//        elem.style.display = "none";
//    }

//}
//function opacity2() {
//    var elem = document.getElementsByClassName("RXD-info-corner opac-2")[0];
//    if (elem.style.display == "none") {
//        elem.style.display = "block";
//    } else { elem.style.display = "none"; }

//}
//function opacity3() {
//    var elem = document.getElementsByClassName("RXD-info-corner opac-3")[0];
//    if (elem.style.display == "none") {
//        elem.style.display = "block";
//    } else { elem.style.display = "none"; }


//}

//2.Service logic

window.addEventListener("load", start, false);

function start() {
    document.getElementById("hexa2").addEventListener("click", hex2Click, true);
    document.getElementById("hexa3").addEventListener("click", hex3Click, true);
    document.getElementById("hexa4").addEventListener("click", hex4Click, true);
    document.getElementById("hexa5").addEventListener("click", hex5Click, true);
    document.getElementById("hexa6").addEventListener("click", hex6Click, true);
    //Circle expand
    document.getElementById("cicle-group-info").addEventListener("click", CircleExpand, true);
    //Expande\Compression checkbox list
    document.getElementById("checkboxClick").addEventListener("focus", checkboxExpand, false);
    //document.getElementById("checkboxClick").addEventListener("blur", checkboxExpand, false);


    // Row

    document.getElementById("Myaddon").addEventListener("click", checkboxExpand, false);



    var flag = false;
    function CircleExpand(e) {
        var elem = e.target;

        var closeIcon = document.createElement("div");

        closeIcon.className = "closeIcon";

        if (elem.className !== "closeIcon") {
            if (elem.id !== "cicle-group-info" && elem.className !== "add" && elem.className !== "circle-content" && elem.className !== "circle-head") {
                if (elem.querySelector("#active-circle .closeIcon") == null) {
                    elem.id = "active-circle";
                    
                    setTimeout(function () {
                        elem.innerHTML = "<span class='circle-head'>Lorem ipsum dolor sit amet</span><p class='circle-content'>Donec dictum justo placerat, luctus lacus id, eleifend lectus. Vivamus a nunc turpis.</p><br/><span class='add'>Add to <br/>contact form<br/>✔</span>"
                        elem.appendChild(closeIcon);
                        elem.querySelector("#active-circle .closeIcon").style.opacity = 1;
                    }, 1100)
                    
                } 

             
            } else {
                if(elem.className == "add"){
                var selectedId = elem.parentElement.dataset.id;
                var ServiceElement = document.getElementById(selectedId);
                ServiceElement.setAttribute("checked", "checked");
                ServiceElement.checked = true;

                // Enter text into Select
                 
                Mytext = ServiceElement.nextSibling.innerHTML;

                MyValText += $("#checkboxClick").val();

                $("#checkboxClick").val(Mytext);


              

            }
        }
            
        } else {
            elem.parentElement.id = "";
            elem.parentElement.innerHTML = "Lorem ipsum dolor sit amet";
            

        }
    }

    function hex2Click(e) {
        var elements = document.getElementsByClassName("filter-brand");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                        elements[i].style.display = "block";
                    }
        }
        
    }
    function hex3Click(e) {
        var elements = document.getElementsByClassName("filter-webInter");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }
    function hex4Click(e) {
        var elements = document.getElementsByClassName("filter-manegment");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }
    function hex5Click(e) {
        var elements = document.getElementsByClassName("filter-marketing");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }
    function hex6Click(e) {
        var elements = document.getElementsByClassName("filter-contGener");
        if (elements[1].style.display == "block") {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.display = "block";
            }
        }
    }

    //Expande chexbox list(function)
    

    function checkboxExpand(event) {
        if (event.type == "focus") {
            document.getElementById("checkbox-holder").style.height = "137px";
            list_open = true;
        }

        else if (event.type == "blur") {
            if (event.target.value == "")
                document.getElementById("checkbox-holder").style.height = "0px";
        }

        else if (event.type == "click") {
            if (list_open) {

                document.getElementById("checkbox-holder").style.height = "0px";
                list_open = false;
            }
            else
            {
                document.getElementById("checkbox-holder").style.height = "137px";
                list_open = true;
            }


            }

        
    };
            function opacity1() {
            var elem = document.getElementsByClassName("RXD-info-corner opac-1")[0];
            if (elem.style.display == "none") {
                elem.style.display = "block";
            } else { elem.style.display = "none"; }
            
        }
        function opacity2() {
            var elem = document.getElementsByClassName("RXD-info-corner opac-2")[0];
            if (elem.style.display == "none") {
                elem.style.display = "block";
            } else { elem.style.display = "none"; }

        }
        function opacity3() {
            var elem = document.getElementsByClassName("RXD-info-corner opac-3")[0];
            if (elem.style.display == "none") {
                elem.style.display = "block";
            } else { elem.style.display = "none"; }


        }

};




//MENU SCROLLING
jQuery(document).ready(function () {
    jQuery(".scrolling").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);

        if (elementClick === "#case1" || elementClick === "#case2")
        {
            jQuery(this).parent().click();
        }

        return false;
    });
});


//mikshers
$(function () {
    $("#slider-vertical-left, #slider-vertical-right").slider({
        orientation: "vertical",
        range: "min",
        min: 0,
        max: 100,
        value: 60,
        slide: function (event, ui) {
            $("#amount").val(ui.value);
        }
    });

    $("#amount").val($("#slider-vertical").slider("value"));

    $("#slider-vertical-left, #slider-vertical-right").off();
    $(".ui-slider-range").off();
    $("ui-slider-handle").off();

});



$(document).ready(function () {

    $('#checkboxClick').keyup(function (e) {

        if (e.which == 38) {

            $("#checkbox-holder").css("height", "0");
            list_open = false;
            return;

        }
        
        $("#checkbox-holder").css("height", "137px");
        list_open = true;

        var value_input = $("#checkboxClick").val();

        sortSelect('#checkbox-holder table tr', value_input);

    });


    // event listener click


    $('#checkbox-holder input').change(
        function (event) {

            Mytext = this.nextSibling.innerHTML;
            $("#checkboxClick").val(Mytext);

        }

        );


});

var sortSelect = function (select, value) {
    
   var table = $("#checkbox-holder table tbody");
    var rezult = $();
    //var min_or_equal = [];
    //var other = [];
    var pattern = new RegExp("^" + value);

    select = $($(select).get().reverse());

    if (value != "") {

        select.each(function(index){    

            var lable = $(this).find("label");
            var text_lable = lable.text();


            if (pattern.test(text_lable)){
                
                table.prepend(this);

            }
        });

    }
          else
        {
               
        table.html(
            $(select).sort(function (x, y) {
                return $(x).find("label").text() < $(y).find("label").text() ? -1 : 1;
            }));


        // Enter text into Select

        $('#checkbox-holder input').change(
            function (event) {

                Mytext = this.nextSibling.innerHTML;
                $("#checkboxClick").val(Mytext);

            }

            );               
           
         

        }
     
             

};



