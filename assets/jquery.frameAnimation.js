//帧动画插件
(function($) {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
            window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }

    function setpostion($ele, idx, step) {
        $ele.css({
            'background-position': '0 -' + step * idx + 'px'
        });
    }

    function hoverplay($ele, len, step) {

        var index = 0, ani;
        function hoverin() {
            index++;
            if (index < len) {
                setpostion($ele, index, step);
                ani = requestAnimationFrame(hoverin);
            } else {
                cancelAnimationFrame(ani);
            }
        }

        function hoverout() {
            index--;
            if (index >= 0) {
                setpostion($ele, index, step);
                ani = requestAnimationFrame(hoverout);
            } else {
                cancelAnimationFrame(ani);
            }
        }
        $ele.hover(function() {
            cancelAnimationFrame(ani);
            ani = requestAnimationFrame(hoverin);
        }, function() {
            cancelAnimationFrame(ani);
            ani = requestAnimationFrame(hoverout);
        });
    }


    function autoplay($ele, len, step) {
        var index = 0, ani;

        function play() {
            index++;
            if (index < len) {
                setpostion($ele, index, step);
            } else {
                index = 0;
            }
            ani = requestAnimationFrame(play);

        }
        ani = requestAnimationFrame(play);
    }

    function init(target, options) {
        if (!options.range && !options.step) {
            alert("初始化动画失败，请配置背景高度和步长");
            return;
        }
        var len = options.range / options.step;
        if (options.trigger === "hover") {
            hoverplay($(target), len, options.step);
        } else if (options.trigger === "auto") {
            autoplay($(target), len, options.step);
        }
    }

    $.fn.frameAnimation = function(options) {
        options = $.extend({}, $.fn.frameAnimation.defaults, options);
        return this.each(function() {
            init(this, options);
        });
    };


    $.fn.frameAnimation.defaults = {
        range: 0,           //背景图片高度
        step: 0,            //一帧高度
        trigger: "hover"    //触发事件：hover、auto
    };


})(jQuery);



