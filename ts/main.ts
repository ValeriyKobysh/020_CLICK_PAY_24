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

//### Mobile menu ###
    $(".header__mobile").click(function(){
        let _this = $(this),
            menu = $('.header__top-right');

        _this.toggleClass('active');
        menu.toggleClass('active');
    });

//### Animate line ###
    var colorLine = (function(){
        let prevScrollPosition: number = null;

        return {

            InBlock: function(windowTopLine: number, blockPosition: number){
                return (windowTopLine >= blockPosition);
            },
            
            whereScroll: function (windowPosition: number) {

                let scroll: number = null,
                    howToScroll: number = null;

                (prevScrollPosition > windowPosition) ? scroll = 1 : scroll = -1;
                howToScroll = (prevScrollPosition - windowPosition) * scroll; 

                prevScrollPosition = windowPosition;

                return {
                    scroll: scroll,
                    howToScroll: howToScroll
                };
            },

            Up: function(object: any, linePosition:number){
                if(linePosition <= 0){
                    object.css("stroke-dashoffset", linePosition + linePosition*0.20);
                    console.log(linePosition);
                };
            },

            Down: function(object: any, linePosition:number, ){
                if(linePosition >= 0){
                    object.css("stroke-dashoffset", linePosition - linePosition*0.20);
                };
            }

        };
    })();


    $(document).scroll(function(){
        let _window = $(window),
            block = $(".steps__line"),
            line = $(".steps__line_1"),
            linePosition: number = parseInt(line.css("stroke-dashoffset")),
            blockPadding: number = 125,
            blockPosition: number = block.offset().top,
            windowPosition: number = _window.scrollTop(),
            windowHeight: number = _window.outerHeight(),
            windowTopLine: number = windowPosition + windowHeight;

        if(colorLine.InBlock(windowTopLine, blockPosition) && colorLine.whereScroll(windowPosition).scroll == 1){
            console.log("true");
            colorLine.Down(line, linePosition);
        } 
        else if (colorLine.InBlock(windowTopLine, blockPosition) && colorLine.whereScroll(windowPosition).scroll == -1) {
            colorLine.Up(line, linePosition);
        }


    });
