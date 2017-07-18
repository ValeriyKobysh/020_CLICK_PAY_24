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

        let Up = function(object: any, linePosition:number, speed: number){
            let maxValue: number = parseInt(object.css("stroke-dasharray")),
                value: number = maxValue - linePosition;

            if(speed > value) speed = value;

            (linePosition >= 0 && linePosition <= maxValue) ? object.css("stroke-dashoffset", maxValue - speed) : object.css("stroke-dashoffset", maxValue);

            };

        let Down =  function(object: any, linePosition:number, speed: number){
            let maxValue: number = parseInt(object.css("stroke-dasharray"));

            console.log("Line Position " + linePosition);
            console.log("Speed " + speed);
            // if(speed > linePosition) speed = linePosition;

                (linePosition >= 0) ? object.css("stroke-dashoffset", maxValue - speed) : object.css("stroke-dashoffset", 0);

            };

        return {

            InBlock: function(windowTopLine: number, blockPosition: number){
                return (windowTopLine >= blockPosition);
            },

            Scroll: function (obj: any, linePosition: number, windowPosition: number, speed: number) {

                let scroll: number = null;

                // Проверка вверх или низ был скролл. 1 = вниз, -1 = вверх
                (prevScrollPosition > windowPosition) ? scroll = 1 : scroll = -1;

                // Если скролл был вниз
                if(scroll == 1) {
                    Up(obj, linePosition, speed);
                }
                else if(scroll == -1){
                    Down(obj, linePosition, speed);
                }

                prevScrollPosition = windowPosition;

            }
        };
    })();


    $(document).scroll(function(){
        let _window = $(window),
            block = $(".steps"),
            line = $(".steps__line_1"),
            line2 = $(".steps__line_3"),
            lineMax: number = parseInt(line.css("stroke-dasharray")),
            lineMax2: number = parseInt(line2.css("stroke-dasharray")),
            linePosition: number = parseInt(line.css("stroke-dashoffset")),
            linePosition2: number = parseInt(line2.css("stroke-dashoffset")),
            blockHeight: number = block.innerHeight(),
            blockPosition: number = block.offset().top,
            windowPosition: number = _window.scrollTop(),
            windowHeight: number = _window.outerHeight(),
            windowTopLine: number = windowPosition + windowHeight - 125,
            persent: number = (windowTopLine - blockPosition) / blockHeight,
            speed1: number =  lineMax * persent,
            speed2: number =  lineMax2 * persent;


        if (colorLine.InBlock(windowTopLine, blockPosition)) {

            if(persent > 0 && persent <= 1){
                colorLine.Scroll(line2, linePosition2, windowPosition, speed2);
            }
        }
    });
