// headBox_closeBtn.js

(function($){
    
    var headBox = $('#headBox');
    var menuBtn = headBox.find('.menu_btn');
    var gnb = headBox.find('.menu_area_wrap');
    
    menuBtn.on('click',['button'],function(e){
        e.preventDefault();
        
        // gnb.stop().fadeToggle();
        var gnbStatus = gnb.css('display');
        
        if(gnbStatus === 'none'){
            gnb.stop().fadeIn();
            menuBtn.addClass('on');
        }else{
            gnb.stop().fadeOut();
            menuBtn.removeClass('on');
        }
    });

   
    
})(jQuery);