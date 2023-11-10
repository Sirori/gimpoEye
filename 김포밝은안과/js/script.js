 //1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2.슬라이드
$(function() {
    $(".visual .slide").slick({ 
        arrows: true, //화살표 사용안함
        dots: true, //닷츠
        dotsClass:'custom_paging',
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 8000, //재생시간
        pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus:false, //포커스시 슬라이드 멈춤 해제
        speed:2000, //얼마나 빠르게 전환되는지
        prevArrow: $('.prev'),
        nextArrow: $('.next')
        
    });
});

//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 

$(function() {
    $(".medical .inner .slide2").slick({ 
    slidesToShow:2,
    slidesToScroll:1,
    infinite:true,
    speed:2000,
    autoplay:true,
    autoplaySpeed:3000,
    });
});

$(function() {
    $(".notice .right .slide3").slick({ 
    slidesToShow:2,
    slidesToScroll:1,
    infinite:true,
    speed:2000,
    autoplay:true,
    autoplaySpeed:1000,
    arrows:false,
    dots:false
    });
});

