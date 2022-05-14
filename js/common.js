$('.menu-header__icon').click(function(event) {
	$(this).toggleClass('active');
	$('.menu-header__menu').toggleClass('active');
	if($(this).hasClass('active')) {
		$('body').data('scroll',$(window).scrollTop());
	}
		$('body').toggleClass('lock');
	if(!$(this).hasClass('active')) {
		$('body,html').scrollTop(parseInt($('body').data('scroll')));
	}
});

$('.tab__navitem').on('click', function(){
	$('.tab__navitem.active').removeClass('active');
	$(this).addClass('active');
});

function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}
ibg();