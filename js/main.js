$(window).on('load', function () {
    $preloader = $('.preloader'),
      $loader = $preloader.find('.prePreloader');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event){
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight/2;
    const halfWidth = cardItem.offsetWidth/2;
    cardItem.style.transform = 'rotateX('+-(event.offsetY - halfHeight)/5 +'deg) rotateY('+(event.offsetX - halfWidth)/5 + 'deg)'; 
}

function stopRotate(event){
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotateX(0) rotateY(0)';
}
$(document).ready(function(){
    $('.wrapper').addClass('active');

    var scene = document.getElementById('parallax');
    var parallaxInstance = new Parallax(scene);
});

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
