// general vars
var tapEvent = 'click'; // tap event click


$.ui.ready(function(){
	callForScroll();
	//alert(screen.height);
	var mainHeight;
	mainHeight = screen.height;
	$('.main-content').css('height',mainHeight+'px'); 
	$('.side-nav').css('height',mainHeight+'px');
		
	 var slideMenuButton = document.getElementById('slide-menu-button');
   	 slideMenuButton.onclick = function (e) {
        var cl = document.body.classList;
        if (cl.contains('left-nav')) {
            cl.remove('left-nav');
        } else {
            cl.add('left-nav');
        }
    };
	
	$('.arrow').bind(tapEvent,function(){
		//evt = svt.parentNode;
			if($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
			$(this).parent().addClass('close');
			$('.close ul').css('display','block');
		}
			else{
			$(this).parent().removeClass('close');
			$(this).parent().addClass('open');
			$('.open ul').css('display','none');
		}
		
	})
	
});

	function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }catch(e){
        return false;
    }
}

	

function touchScroll(id){
    if(isTouchDevice()){ //if touch events exist...
        var el=document.getElementById(id);
        var scrollStartPos=0;

        document.getElementById(id).addEventListener("touchstart", function(event) {
            scrollStartPos=this.scrollTop+event.touches[0].pageY;
            event.preventDefault();
        },false);

        document.getElementById(id).addEventListener("touchmove", function(event) {
            this.scrollTop=scrollStartPos-event.touches[0].pageY;
            event.preventDefault();
        },false);
}


} 

function callForScroll(){
	touchScroll("wrapper");
	touchScroll("wrapper2");
	}

$(document).ready(function() {
   var useragent = navigator.userAgent;
   navigator.__defineGetter__('userAgent', function(){
    return useragent+";USC_mobile_app_v1"; // customized user agent
});
$("#loadImg div").height($(window).height());
$("#loadImg div").width($(window).width());
$("#content_iframe").attr('src', "http://test3.uscommunities.org/about/how-it-works/?tx_bnadaptiveprofile=Phone");
    
    $.ajax({
        type: 'GET',
        url: "http://test3.uscommunities.org/index.php?id=729",
        dataType: 'json',
        success: function(data)
        {
           
            var lis = [];
            for (i in data)
            {   
                if (data[i].subpages.length != 0)
                {   
                    var sublinkli = [];
                    for (j in data[i].subpages)
                    {
                        sublinkli.push('<li class="subMenu"> <a class="link" data-url="'+data[i].url.replace("www.", "test3.") + '?tx_bnadaptiveprofile=Phone" href="javascript:;">'+data[i].subpages[j].title+'</a></li >');

                    }
                    if(sublinkli.length>0)
                    {
                   lis.push('<li  class="mainMenu open"><a class="link" data-url="'+data[i].url.replace("www.", "test3.") + '?tx_bnadaptiveprofile=Phone" href="javascript:;">'+data[i].title+'</a><a href="#" class="arrow"></a><ul class="smallMenu">' + sublinkli.join("") + '</ul></li>');
                    }
                    else
                    {
                    lis.push('<li  class="mainMenu open"><a class="link" data-url="'+data[i].url.replace("www.", "test3.") + '?tx_bnadaptiveprofile=Phone" href="javascript:;">'+data[i].title+'</a></li>');
                    }
            }
                
            }
            $(".dropBox").html(lis.join(""))
            $('.link').on('click', function() 
            {
                $("#loadImg").show();
                $("#content_iframe").attr('src', $(this).attr("data-url"));
                $("#slide-menu-button").click();
            });
        }
    });
});


