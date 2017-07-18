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
    return {
        InBlock: function (windowTopLine, blockPosition) {
            return (windowTopLine >= blockPosition);
        },
        whereScroll: function (windowPosition) {
            var scroll = null, howToScroll = null;
            (prevScrollPosition > windowPosition) ? scroll = 1 : scroll = -1;
            howToScroll = (prevScrollPosition - windowPosition) * scroll;
            prevScrollPosition = windowPosition;
            return {
                scroll: scroll,
                howToScroll: howToScroll
            };
        },
        Up: function (object, linePosition) {
            if (linePosition <= 0) {
                object.css("stroke-dashoffset", linePosition + linePosition * 0.20);
                console.log(linePosition);
            }
            ;
        },
        Down: function (object, linePosition) {
            if (linePosition >= 0) {
                object.css("stroke-dashoffset", linePosition - linePosition * 0.20);
            }
            ;
        }
    };
})();
$(document).scroll(function () {
    var _window = $(window), block = $(".steps__line"), line = $(".steps__line_1"), linePosition = parseInt(line.css("stroke-dashoffset")), blockPadding = 125, blockPosition = block.offset().top, windowPosition = _window.scrollTop(), windowHeight = _window.outerHeight(), windowTopLine = windowPosition + windowHeight;
    if (colorLine.InBlock(windowTopLine, blockPosition) && colorLine.whereScroll(windowPosition).scroll == 1) {
        console.log("true");
        colorLine.Down(line, linePosition);
    }
    else if (colorLine.InBlock(windowTopLine, blockPosition) && colorLine.whereScroll(windowPosition).scroll == -1) {
        colorLine.Up(line, linePosition);
    }
});
//# sourceMappingURL=main.js.map