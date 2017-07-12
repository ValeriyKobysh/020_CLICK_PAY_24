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
$(document).click(function (e) {
    console.log(e.target);
});
//# sourceMappingURL=main.js.map