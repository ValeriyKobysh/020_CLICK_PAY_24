(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
      };
}(Element.prototype));

//###Create function for popup###
    (function($){
        $.fn.closeDialog = function(dialog: string = 'dialog', remClass: string = 'dialog_open', addClass: string = 'dialog_close'){
            let _this = $(this),
                _dialog = _this.closest('.' + dialog),
                make = function(){
                    if(_this.data(dialog + '-close') !== "undefined"){
                        _dialog.removeClass(remClass)
                            .addClass(addClass);
                    };
                };
            return this.each(make);
        }

        $.fn.openDialog = function(_id: string, remClass: string = 'dialog_close', addClass: string = 'dialog_open'){
            let _this = $(this),
                dialog;
                if(typeof(_this.data('dialog')) !== "undefined")
                {
                    dialog = _this.data('dialog');
                }
                else{
                    dialog = _id;
                }
            let callDialog = $("#" + dialog),
                content = callDialog.find('.dialog__content'),
                contentHeight: number = content.outerHeight(),
                make = function(){
                    content.css("margin-top", - (contentHeight / 2))
                    callDialog.removeClass(remClass).addClass(addClass);
                };
            return this.each(make);
        }
    })(jQuery)