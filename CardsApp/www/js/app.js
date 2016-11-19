
var app = {

	data: {},
	homeSlider : false,

	init: function(){
		$(window).resize(app.resize);
		app.resize();
		$('#CardDetail .act-flip').click(function(){$('#CardDetail .detail .market .flipper').toggleClass('turn')});

		$('#CardDetail .links a.lnk').click(function(){
			if($(this).hasClass('disabled')) return;
			window.open($(this).data('ref'), '_system', 'location=no');
		});

		app.homeSwiper();

	},

	homeSwiper: function(){

		app.homeSlider = new Swiper('#Home', {
			initialSlide: 1,
			parallax: true
	  });

		var detailSwip = new Swiper('#CardDetail', {
			onTouchEnd: function(swiper, event){
				if(swiper.touches.currentY - swiper.touches.startY < -60){
					app.openLinks();
				}else if(swiper.touches.currentY - swiper.touches.startY > 60){
					app.closeLinks();
				}
			}
		});
	},

	resize: function(){
		var h = $(window).height();
		var h3 = h/3;
		var w = $(window).width();
		var w3 = w/3;
		//$('.detail .top, .detail .bg, .detail .overlay').height(h*2/3);
		$('.detail .bottom').height(h3).css('bottom', -h3+'px').data('bottom-h', h3);
		$('.detail .top .avatar, .detail .top .slogan').css({
			height: (w3*2) + 'px',
			width: (w3*2) + 'px',
			left: (w/2 - (w3*2)/2) + 'px'
		});
	},

	openCard: function(id){
		var dt = db.cards[id];
		app.closeLinks();
		$('#CardDetail .top .bg img').attr('src', dt.bgImage);
		$('#CardDetail .top .avatar img').attr('src', dt.avatarImage);
		$('#CardDetail .top .slogan').html('<p>'+dt.slogan+'</p>');
		$('#CardDetail .top .firstname').text(dt.firstname);
		$('#CardDetail .top .lastname').text(dt.lastname);
		$('#CardDetail .top .description').html('<p>'+dt.description+'</p>');
		$('#CardDetail .links li').addClass('disabled');
		if(dt.links) for(l in dt.links){
			$('#CardDetail .links a.lnk-'+dt.links[l].type).data('ref', dt.links[l].link).parent().removeClass('disabled');
		}
		$('#CardDetail .detail .market .flipper').removeClass('turn');
		Chiara.multipage.open('#CardDetail', {effect:'fadeIn, slideRightBack', onEnd: function(){}});

	},

	openBrand: function(id){
		var dt = db.brands[id];
		app.closeLinks();
		$('#CardDetail .top .bg img').attr('src', dt.bgImage);
		$('#CardDetail .top .avatar img').attr('src', dt.avatarImage);
		$('#CardDetail .top .slogan').html('<p>'+dt.slogan+'</p>');
		$('#CardDetail .top .firstname').text(dt.firstname);
		$('#CardDetail .top .lastname').text(dt.lastname);
		$('#CardDetail .top .description').html('<p>'+dt.description+'</p>');
		$('#CardDetail .links li').addClass('disabled');
		if(dt.links) for(l in dt.links){
			$('#CardDetail .links a.lnk-'+dt.links[l].type).data('ref', dt.links[l].link).parent().removeClass('disabled');
		}
		$('#CardDetail .detail .market .flipper').removeClass('turn');
		Chiara.multipage.open('#CardDetail', {effect:'fadeIn, slideRightBack', onEnd: function(){}});
	},

	openLinks: function(){
		var h3 = $('#CardDetail .detail .bottom').data('bottom-h');
		$('#CardDetail .detail .bottom').css('bottom', '0');
		$('#CardDetail .detail .top .info').css('bottom', (h3+20)+'px');
		$('#CardDetail .detail .top .info .description').fadeOut();
	},
	
	closeLinks: function(){
		var h3 = $('#CardDetail .detail .bottom').data('bottom-h');
		$('#CardDetail .detail .bottom').css('bottom', -h3+'px');
		$('#CardDetail .detail .top .info').css('bottom', '70px');
		$('#CardDetail .detail .top .info .description').fadeIn();
	}
}
