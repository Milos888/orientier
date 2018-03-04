$(document).ready(function() {
//определение плагина
    $.fn.slideCollage = function(options) {
        var curr = 0;
        var total = 0;
//настройки по умолчанию
        var opt = $.extend({
            autoSpeed: 1000 //скорость автосмены картинок
        });
        this.each(function() {
            var slider = $(this);
            if (options) {
                $.extend(opt, options);
            }
            slider.find('.slideCollage_item').hide();
            curr = 0;
            slider.find('.slideCollage_item').eq(curr).show();
            var total = slider.find('.slideCollage_item').length;
            if (total > 1)
            {
                slider.append('<div class="slideCollage_nav"></div>');
                slider.find('.slideCollage_item').each(function(i) {
                    i += 1;
                    slider.find('.slideCollage_nav').append('<a href="#"></a>');
                });
                slider.find('.slideCollage_nav a').eq(curr).addClass('current');
                slider.find('.slideCollage_item').click(function() {
                    clearInterval(intervalID);
                });
                slider.find('.slideCollage_nav a').click(function(e) {
                    e.preventDefault();
                    slider.find('.slideCollage_nav a').removeClass('current');
                    if ($.browser.msie) {
                        slider.find('.slideCollage_item').hide();
                    }
                    else {
                        slider.find('.slideCollage_item').fadeOut();
                    }
                    curr = $(this).index();
//alert( curr)
                    if ($.browser.msie) {
                        slider.find('.slideCollage_item').eq(curr).show();
                    }
                    else {
                        slider.find('.slideCollage_item').eq(curr).fadeIn(600);
                    }
                    $(this).addClass('current');
                    clearInterval(intervalID);
                    intervalID = setInterval(next, 5000);
                });
                function next() {
                    curr++;
                    if (curr === total) {
                        curr = 0;
                    }
                    slider.find('.slideCollage_nav a').removeClass('current');
                    if ($.browser.msie) {
                        slider.find('.slideCollage_item').hide();
                    }
                    else {
                        slider.find('.slideCollage_item').fadeOut();
                    }
                    if ($.browser.msie) {
                        slider.find('.slideCollage_item').eq(curr).show();
                    }
                    else {
                        slider.find('.slideCollage_item').eq(curr).fadeIn(600);
                    }
                    slider.find('.slideCollage_nav a').eq(curr).addClass('current');
                }
                var intervalID = setInterval(next, 6000);
            }//end_if
        });
    }; //end slideCollage
}); //end ready 