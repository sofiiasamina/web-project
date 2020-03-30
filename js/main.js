$(document).ready(function(){
    let tabsItem = $('.header-tab-item');

    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tab-item-active').toggleClass('tab-item-active');
        $(this).toggleClass('tab-item-active');
    });

});