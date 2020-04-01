$(document).ready(function(){ //переключалка між табами About, Actor, Abilities
    let tabsItem = $('.header-tab-item');

    tabsItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tab-item-active').toggleClass('tab-item-active');
        $(this).toggleClass('tab-item-active');
    });
    
    $('.header-burger').click(function(event){
        $('.header-burger, .header-menu').toggleClass('active');
        $('.main').toggleClass('lock');
    })
});