// general vars
var tapEvent = 'click'; // tap event click


$.ui.ready(function(){
	// Navigating pages without services
	$('.log').bind(tapEvent,function(){
		var clickID	= $(this).attr('id');
		var movePages =clickID+'Page';
		$.ui.loadContent(movePages,false,false,'slide');
	});
	
});

function show(){
	$('.sliderBg').css('display','block');
	}

function hide(){
	$('.sliderBg').css('display','none');
	}
	