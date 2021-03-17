        //윈도우에 스크롤 이벤트, 터치무브 이벤트 동시에 설정
        $(window).on("scroll touchmove", function(){
            //section 영역을 section 변수에 저장
            var section=$('section');
            //.image영역의 img 요소를  image변수에 저장
            var image=$('.image img');
            //윈도우의 scrollTop (기본적으로 0임) 값을 scrollTop 변수에 저장
            var scrollTop=$(window).scrollTop();
            
            //section개수만큼 반복
            section.each(function(){        
                //section 인덱스번호를 num변수에 저장
                var num=$(this).index();
                
                //만약 윈도우의 scrollTop이 현재 section의 top 보다 크고 
                //윈도우의 ScrollTop이 다음 section의 값보다 작으면
                if (scrollTop >= $(this).offset().top && scrollTop < $(this).next().offset().top ) 
                {
                    //이미지의 개수만큼 반복
                    image.each(function(){
                        //이미지의 인덱스번호가 section의 인덱스번호와 같으면
                       if($(this).index()==num){
                           //모든이미지에서 actiove클래스 제거
                           image.removeClass('active');
                           //현재 num값에 해당하는 이미지만 active클래스 추가
                           $(this).addClass('active');
                       } 
                    });
                };
            });    
        });

        $(function(){
        //swiper
            var swiper = new Swiper('.swiper1', {
              centeredSlides: true,
              effect:'slide',
              loop:true,
              autoplay: {
              delay: 4000,
              disableOnInteraction:false,
              },
              scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
              },
            });
            
        //swiper
            var swiper = new Swiper('.swiper2', {
              centeredSlides: true,
              effect:'slide',
              loop:true,
              autoplay: {
              delay: 4000,
              disableOnInteraction:false,
              },
              scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
              },
            });
            
            
        //팝업갤러리
            var gallery_num=0;
                $('.focus .container > div').hide();
                $('.design ul li').click(function(e){
                    e.preventDefault();
                    gallery_num=$(this).index();
                    $('.focus').fadeIn();
                    $('.focus .container >div').each(function(){
                        if(gallery_num == $(this).index()) {
                            $('.focus .container > div').hide();
                            $(this).fadeIn();
                        }
                    });
                });

                $('.popup_close').click(function(e){
                    e.preventDefault();
                    $('.focus').hide();
                });
            
            
        });

/*//주메뉴를 클릭하면 해당 section으로 이동
$('nav ul li a').click(function(){
   $('nav').hide();
    var menu_attr=$(this).attr('href');
    $('html,body').animate({
       scrollTop:$(menu_attr).offset().top 
    });
});*/