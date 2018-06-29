/**
 * Created by zhaoyan on 2016/10/14.
 */
$(function(){

    $('.index-service ul li .hide').css('opacity','0');
    $('.index-hover').hover(function(){
        $(this).find('.hover-mask').hide();
        $(this).parent('li').find('.hide').css('opacity','1');
    },function(){
        $(this).find('.hover-mask').show();
        $(this).parent('li').find('.hide').css('opacity','0');
    });

    //首页轮播图
    var index= 0,
        $circle=$('.lunbo-img>.circle>li'),
        $banner=$('.lunbo-img .banner-list');
    var lunbo = function(){
        index++;
        if (index==$banner.length) {
            index = 0;
        }
        $banner.removeClass('active').eq(index).addClass('active');
        $circle.removeClass('active').eq(index).addClass('active');

    };
    $circle.each(function(i){
        $(this).data('index',i);
    });
    $circle.hover(function(){
        clearInterval(timerId);
        $circle.removeClass('active');
        $(this).addClass('active');
        var i = $(this).data('index');
        index=i;
        $banner.removeClass('active').eq(index).addClass('active');
    },function(){
        clearInterval(timerId);
        timerId = setInterval(lunbo,3000);
    });
    var timerId = setInterval(lunbo,3000);

    $('.to-left').click(function(){
        clearInterval(timerId);
        index--;
        if (index==-1) {
            index = $banner.length-1;
        }
        console.log(index);
        $banner.removeClass('active').eq(index).addClass('active');
        $circle.removeClass('active').eq(index).addClass('active');
        timerId = setInterval(lunbo,3000);
    });
    $('.to-right').click(function(){
        clearInterval(timerId);
       index++;
        if (index==$banner.length) {
            index = 0;
        }
        $banner.removeClass('active').eq(index).addClass('active');
        $circle.removeClass('active').eq(index).addClass('active');
        timerId = setInterval(lunbo,3000);
    });

    //国际保险
    $('.insur-list  .hide').css('opacity','0');
    $('.hover-place').hover(function(){
        $(this).find('.hover-before').hide();
        $(this).find('.hover-img').show();
        $(this).nextAll('.hide').css('opacity','1');
    },function(){
        $(this).find('.hover-before').show();
        $(this).find('.hover-img').hide();
        $(this).nextAll('.hide').css('opacity','0');
    });

    //出国医疗
    var $attlist=$('.attention-tit li');
    $attlist.click(function(){
        $attlist.removeClass('active');
        $(this).addClass('active');
        var num=$(this).attr('data-index');
        $('.medical-attention .attention-content li').removeClass('active').eq(num).addClass('active');
    });
    $('.service-list-title li').click(function(){
        $('.service-list-title li').removeClass('active');
        $(this).addClass('active');
        var num=$(this).attr('data-index');
        $('.content-sort').removeClass('active').eq(num).addClass('active');
    });
    $('.expert-info li').click(function(){
        $('.expert-info li').removeClass('active');
        $(this).addClass('active');
        var num=$(this).attr('data-index');
        $('.expert-info .expert-extro').removeClass('active').eq(num).addClass('active');

    });

    //最新资讯
    $('.page-list li').click(function(){
        $('.page-list li').removeClass('active');
        $(this).addClass('active');
        var num=$(this).attr('data-index');
        $('.medical-info-list ul').removeClass('active').eq(num).addClass('active');
    })
})
