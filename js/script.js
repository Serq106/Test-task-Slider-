$(document).ready(function () {
    function action() {
        for(var i = 0; i < 6; i++){
            $('.wrapper-child-img img:nth-child('+i+')').addClass('action')
        }
    }

    function get_select(){
        var lengt = $('.wrapper-child-img img').length;
        for(var i = 1; i <= lengt; i++){
            if($('.wrapper-child-img img:nth-child('+i+')').hasClass('selected')){
                return i;
            }
        }
    }

    $(document).on('click', '.next', function () {
        var item = get_select();
        var url_slider = $('.wrapper-child-img img:nth-child('+(item + 1)+')').attr('src');
        $('.wrapper-child-img img:nth-child('+(item + 1)+')').addClass('selected');
        var url = $('.wrapper-child-img img:nth-child('+item+')').attr('src');
        $('.wrapper-child-img img:nth-child('+item+')').remove();
        $('.wrapper-child-img img:last-child').after('<img class="child-img" src="'+url+'" />');
        action()
        $('.display-slider img').attr('src', url_slider);
    });

    $(document).on('click', '.prev', function () {
        var item = get_select();
        var url_slider = $('.wrapper-child-img img:last-child').attr('src');
        $('.wrapper-child-img img:nth-child('+(item )+')').before('<img class="child-img" src="'+url_slider+'" />');
        $('.wrapper-child-img img:nth-child('+(item )+')').addClass('selected');
        $('.wrapper-child-img img:nth-child('+(item + 1)+')').removeClass('selected');
        $('.wrapper-child-img img:last-child').remove();
        $('.wrapper-child-img img').removeClass('action');
        action();
        $('.display-slider img').attr('src', url_slider);
    });

    $(document).on('click', '.child-img', function () {
        var url_slider = $(this).attr('src');
        $('.display-slider img').attr('src', url_slider);
        $('.wrapper-child-img img').removeClass('selected');
        $(this).addClass('selected');

        var lengt = $('.wrapper-child-img img').length;
        var i = 1;
        while (i <= lengt){
            if($('.wrapper-child-img img:nth-child('+i+')').hasClass('selected') ==false){
                var url = $('.wrapper-child-img img:nth-child('+i+')').attr('src');
                $('.wrapper-child-img img:nth-child('+i+')').remove();
                $('.wrapper-child-img img:last-child').after('<img class="child-img" src="'+url+'" />');
                i--;
            } else if($('.wrapper-child-img img:nth-child('+i+')').hasClass('selected')){
                i = lengt;
            }

            i++;
        }

        action();
    })

    action();
});