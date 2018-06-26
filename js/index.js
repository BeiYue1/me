
$(function () {
// 初始化内容
// 计算img的图片高度
    let _h = parseFloat($('.left img').css('width')) - 30  ;
    $(window).resize(function () {
        _h = parseFloat($('.left img').css('width')) - 30  ;
        $('header').css('height' , _h) ;
    }) ;
    $('header').css('height' , _h) ;
//  语言的百分比
    let divs = $('.ele div') ;
    let w = parseFloat(divs.css('width')) ;

    let data = [0.9,0.9,0.85,0.80,0.88,0.80,0.70];
    console.log(w*parseFloat(data[0])) ;
    for (let i = 0 ; i < divs.length ; i++){
        divs.eq(i).css('background' , '-webkit-linear-gradient(left, green '+ (w*data[i]) +'px,#eee '+ (w*data[i]+1) + 'px)') ;
    }
}) ;
