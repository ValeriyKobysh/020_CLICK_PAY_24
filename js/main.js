(function (ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this)
            return null;
        if (this.matches(selector))
            return this;
        if (!this.parentElement) {
            return null;
        }
        else
            return this.parentElement.closest(selector);
    };
}(Element.prototype));
(function ($) {
    $.fn.closeDialog = function (dialog, remClass, addClass) {
        if (dialog === void 0) { dialog = 'dialog'; }
        if (remClass === void 0) { remClass = 'dialog_open'; }
        if (addClass === void 0) { addClass = 'dialog_close'; }
        var _this = $(this), _dialog = _this.closest('.' + dialog), make = function () {
            if (_this.data(dialog + '-close') !== "undefined") {
                _dialog.removeClass(remClass)
                    .addClass(addClass);
            }
            ;
        };
        return this.each(make);
    };
    $.fn.openDialog = function (_id, remClass, addClass) {
        if (remClass === void 0) { remClass = 'dialog_close'; }
        if (addClass === void 0) { addClass = 'dialog_open'; }
        var _this = $(this), dialog;
        if (typeof (_this.data('dialog')) !== "undefined") {
            dialog = _this.data('dialog');
        }
        else {
            dialog = _id;
        }
        var callDialog = $("#" + dialog), content = callDialog.find('.dialog__content'), contentHeight = content.outerHeight(), make = function () {
            content.css("margin-top", -(contentHeight / 2));
            callDialog.removeClass(remClass).addClass(addClass);
        };
        return this.each(make);
    };
})(jQuery);
$(".header__mobile").click(function () {
    var _this = $(this), menu = $('.header__top-right');
    _this.toggleClass('active');
    menu.toggleClass('active');
});
var colorLine = (function () {
    var prevScrollPosition = null;
    var Up = function (object, linePosition, speed) {
        var maxValue = parseInt(object.css("stroke-dasharray")), value = maxValue - linePosition;
        if (speed > value)
            speed = value;
        (linePosition >= 0 && linePosition <= maxValue) ? object.css("stroke-dashoffset", maxValue - speed) : object.css("stroke-dashoffset", maxValue);
    };
    var Down = function (object, linePosition, speed) {
        var maxValue = parseInt(object.css("stroke-dasharray"));
        (linePosition >= 0) ? object.css("stroke-dashoffset", maxValue - speed) : object.css("stroke-dashoffset", 0);
    };
    return {
        InBlock: function (windowTopLine, blockPosition) {
            return (windowTopLine >= blockPosition);
        },
        Scroll: function (obj, linePosition, windowPosition, speed) {
            var scroll = null;
            (prevScrollPosition > windowPosition) ? scroll = 1 : scroll = -1;
            if (scroll == 1) {
                Up(obj, linePosition, speed);
            }
            else if (scroll == -1) {
                Down(obj, linePosition, speed);
            }
            prevScrollPosition = windowPosition;
        }
    };
})();
$(document).scroll(function () {
    var _window = $(window), block = $(".steps"), line = $(".steps__line_1"), line2 = $(".steps__line_3"), lineMax = parseInt(line.css("stroke-dasharray")), lineMax2 = parseInt(line2.css("stroke-dasharray")), linePosition = parseInt(line.css("stroke-dashoffset")), linePosition2 = parseInt(line2.css("stroke-dashoffset")), blockHeight = block.innerHeight(), blockPosition = block.offset().top, windowPosition = _window.scrollTop(), windowHeight = _window.outerHeight(), windowTopLine = windowPosition + windowHeight - 125, persent = (windowTopLine - blockPosition) / blockHeight, speed1 = lineMax * persent, speed2 = lineMax2 * persent;
    if (colorLine.InBlock(windowTopLine, blockPosition)) {
        if (persent > 0 && persent <= 1) {
            colorLine.Scroll(line2, linePosition2, windowPosition, speed2);
        }
    }
});
(function () {
    var numb = $('.stat__number');
    setInterval(function () { countTimer(numb, 0); }, 50);
    setInterval(function () { countTimer(numb, 1); }, 50);
    setInterval(function () { countTimer(numb, 2); }, 50);
    setInterval(function () { countTimer(numb, 3); }, 50);
    setInterval(function () { countTimer(numb, 4); }, 50);
})();
function countTimer(elements, item) {
    var arr = elements, element = arr[item], value = element.getAttribute('data-value'), step = parseInt(value / ((item + 1) * 10)), postion = element.getAttribute('data-position'), start = (parseInt(postion) == 0) ? step : parseInt(postion) + step;
    if ((value - start) < step) {
        start = value;
    }
    ;
    element.textContent = start.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    element.setAttribute('data-position', start);
    clearInterval(countTimer);
}
//# sourceMappingURL=main.js.map