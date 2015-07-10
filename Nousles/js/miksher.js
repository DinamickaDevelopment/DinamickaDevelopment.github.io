(function () {

    //    creation elements for animation

    var derictoryMans = document.querySelector('.mans'),
        newDivForAnimationTwoMan = document.createElement('div'),
        newDivForAnimationOneMan = document.createElement('div'),
        newElemMan = document.createElement('img'),
        newElemMan1 = document.createElement('img'),
        newElemMan2 = document.createElement('img'),
        newDivPointer = document.createElement('div'),
        newDivPointer1 = document.createElement('div'),
        newDivPointer2 = document.createElement('div');

//    function give attributes & styles

    var startOption = function () {
        newDivForAnimationTwoMan.className = "two-men";
        newDivForAnimationOneMan.className = "one-man";
        newElemMan.setAttribute('src', 'img/man2.png');
        newElemMan1.setAttribute('src', 'img/man2.png');
        newElemMan2.setAttribute('src', 'img/man2.png');
        newElemMan2.id = 'imgMan';
        newDivPointer.className = "pointer pointer-1 newPointer";
        newDivPointer1.className = "pointer pointer-2 newPointer";
        newDivPointer2.className = "pointer pointer-3 newPointer";

        newDivForAnimationTwoMan.style.cssText = "width: 134px; height: 100px; position: absolute; left: 60px; transition: all 1.2s; opacity: 0;";
        newDivForAnimationOneMan.style.cssText = "width: 31px; height: 100px; position: absolute; left: 95px; transition: opacity 1.2s, left 2.2s, top 2s; opacity: 0;";

        newDivPointer.style.cssText = 'left: 7px;'
        newDivPointer1.style.cssText = 'left: 76px;'
        newDivPointer2.style.cssText = 'left: 6px;'
        newElemMan1.style.cssText = 'left: 69px; position: absolute;'
        newElemMan2.style.cssText = 'position: relative; transition: all 1.2s;'
        var first = derictoryMans.firstChild;
        derictoryMans.insertBefore(newDivForAnimationTwoMan, first);
        first = derictoryMans.firstChild;
        derictoryMans.insertBefore(newDivForAnimationOneMan, first.nextElementSibling);

        newDivForAnimationTwoMan.appendChild(newElemMan);
        newDivForAnimationTwoMan.appendChild(newElemMan1);
        newDivForAnimationOneMan.appendChild(newElemMan2);
        newDivForAnimationTwoMan.appendChild(newDivPointer);
        newDivForAnimationTwoMan.appendChild(newDivPointer1);
        newDivForAnimationOneMan.appendChild(newDivPointer2);

        //    visible & unvisible elements

        var men = new Array;
        for (var i = 2; i < 8; i++) {
            men[i] = document.querySelector('.man' + i);
            men[i].style.visibility = 'hidden';
        }

        var pointer = document.querySelectorAll('.pointer');
        for (i = 0; i < pointer.length; i++) {
            pointer[i].style.visibility = 'hidden';
        }
    }

    //    events for buttons

    var buttons = document.querySelectorAll('.btn-num');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (this.innerHTML == 1) {
                setTimeout(animationForFirstButton, 1000);
                newPointer = document.querySelectorAll('.newPointer');
                for (i = 0; i < newPointer.length; i++) {
                    newPointer[i].style.visibility = 'visible';
                }
                newDivForAnimationTwoMan.style.opacity = '1';
            } else if (this.innerHTML == 2) {
                console.log("это кнопка 2");
            } else {
                console.log("это кнопка 3");
            }
        }
    }

    var delay = 1000 / 30,
        moveDiv,
        animationForFirstButton = function () {

            var rightForDiv = 70,
                rightForDivOneMan = 95,
                moveToMiddle = function () {
                    if (rightForDiv < 295) {
                        setTimeout(moveToMiddle, delay);
                        moveDiv = document.querySelector('.two-men');
                        moveDiv.style.left = +rightForDiv + 15 + 'px';
                        rightForDiv = moveDiv.style.left;
                        rightForDiv = rightForDiv.substring(0, rightForDiv.length - 2);
                    } else {
                        clearTimeout(moveToMiddle);
                    }
                }

            var backToStart = function () {
                if (rightForDiv > 70) {
                    setTimeout(backToStart, delay);
                    moveDiv = document.querySelector('.two-men');
                    moveDiv.style.left = +rightForDiv - 26 + 'px';
                    rightForDiv = moveDiv.style.left;
                    rightForDiv = rightForDiv.substring(0, rightForDiv.length - 2);
                } else {
                    clearTimeout(backToStart)
                }
            }

            var visibleOneMan = function () {
                newDivForAnimationOneMan.style.opacity = '1';
                clearTimeout(visibleOneMan);
            }

            var unVisibleTwoMen = function () {
                newDivForAnimationTwoMan.style.opacity = '0';
                clearTimeout(unVisibleTwoMen);
            }

            var manSleeping = function () {
                newElemMan.setAttribute('src', 'img/man3.png');
                newElemMan1.setAttribute('src', 'img/man3.png');
                clearTimeout(manSleeping);
            }

            var visibleTwoMen = function () {
                newDivForAnimationTwoMan.style.opacity = '1';
                clearTimeout(visibleTwoMen);
            }

            var moveToBasket = function () {
                if (rightForDivOneMan < 595) {
                    setTimeout(moveToBasket, delay);
                    moveDiv = document.querySelector('.one-man');
                    moveDiv.style.left = +rightForDivOneMan + 15 + 'px';
                    rightForDivOneMan = moveDiv.style.left;
                    rightForDivOneMan = rightForDivOneMan.substring(0, rightForDivOneMan.length - 2);
                } else {
                    clearTimeout(moveToBasket);
                }
            }
            var moveGiftImg = document.querySelector('.gift');
            var moveManImg = document.getElementById('imgMan');
            moveGiftImg.style.cssText = 'transition: all 1.2s';
            var toTopForGift = -11,
                toTop = 20,
                moveToTop = function () {
                    if (toTop >= -80 || toTopForGift >= -91) {
                        moveGiftImg = document.querySelector('.gift')
                        moveManImg = document.getElementById('imgMan');
                        moveGiftImg.style.top = toTopForGift - 20 + 'px';
                        moveManImg.style.top = toTop - 20 + 'px';
                        toTopForGift = moveGiftImg.style.top;
                        toTop = moveManImg.style.top;
                        toTopForGift = toTopForGift.substring(0, toTop.length - 2);
                        toTop = toTop.substring(0, toTop.length - 2);
                        setTimeout(moveToTop, 50);
                    } else {
                        moveManImg.style.opacity = "0";
                        moveGiftImg.style.opacity = "0";
                        clearTimeout(moveToTop);
                    }
                }

            var unvisibleAll = function () {
                newDivForAnimationTwoMan.style.opacity = '0';
                newDivForAnimationOneMan.style.opacity = '0';
            }

            moveToMiddle();
            setTimeout(backToStart, 2000);
            setTimeout(visibleOneMan, 3500);
            setTimeout(moveToMiddle, 4500);
            setTimeout(unVisibleTwoMen, 6500);
            setTimeout(manSleeping, 7500);
            setTimeout(visibleTwoMen, 8300);
            setTimeout(moveToBasket, 8800);
            setTimeout(moveToTop, 12800);
            setTimeout(unvisibleAll, 14500);
            setTimeout(startOption, 15500);

        }

//    back to start options
    startOption()

})()
