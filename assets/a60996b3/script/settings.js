$(document).ready(function () {

    $('.more').click(function () {
        $(this).prev('.hide').slideToggle();
        $('.show_more_info').toggle();
        return false;
    });

    //�������
    if ($(".colorbox").length > 0) {
        $(".colorbox").colorbox({rel: 'colorbox'});
    }

    //slider
    if ($('.slideCollage').length > 0) {
        $('.slideCollage').slideCollage();
    }


    $('.xhr-feedback').live('click', function () {
        $.post('map/page/feedback', {feedback: 1}, function (data) {
            if (data.success == 1) {
                $('.xhr-response').html(data.html);
                $('.xhr-form-overlay').show();
                $('.xhr-form-wrap').show();
                $('select').styler();
            }
            ;
        }, "json");
    });
    $('.xhr-order').live('click', function () {
        $.post('orders/orders/form', {flag: 'order_form'}, function (data) {
            if (data.success == 1) {
                $('.xhr-response').html(data.html);
                $('.xhr-form-overlay').show();
                $('.xhr-form-wrap').show();
            }
        }, "json");
    });
    $('.xhr-form-close').live('click', function () {
        $('.xhr-response').html('');
    });

    $('select').styler();

    /*$(window).on("load", function () {

        if (location.href == "http://www.stonelight.kiev.ua/") {

            $('div.' + $(this).attr("rel")).fadeIn(500);
            $("body").append("<div id='overlay'></div>");
            $('#overlay').show();

        }
        return false;
    });

    $("#overlay").live("click", function () {
        $(this).fadeOut(100);
    });
});*///end ready
//script for popups


//real time and date
$(function () {
    var now = new Date();

    var nowGetHours = now.getHours(), nowGetMinutes = now.getMinutes(),
            currentTime = (nowGetHours.toString().length === 1 ? '0' + nowGetHours : nowGetHours) + ':'
            + (nowGetMinutes.toString().length === 1 ? '0' + nowGetMinutes : nowGetMinutes);

    var nowGetMonth = '' + (now.getMonth() + 1), nowGetDate = '' + now.getDate(), nowGetFullYear = now.getFullYear(),
            currentDate = (nowGetDate.toString().length === 1 ? '0' + nowGetDate : nowGetDate) + '.'
            + (nowGetMonth.toString().length === 1 ? '0' + nowGetMonth : nowGetMonth) + '.'
            + nowGetFullYear;

    var interval = setInterval(function () {
        $('#date-part').html(currentTime);
        $('#time-part').html(currentDate);
    }, 1000);

});