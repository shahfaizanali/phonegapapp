
var tapEvent = 'click'; // tap event click


$.ui.ready(function(){
	callForScroll();
	
	var mainHeight;
	mainHeight = screen.height;
	
	//Dynamic heights for slider menu
	$('.main-content').css('height',mainHeight+'px'); 
	$('.side-nav').css('height',mainHeight+'px'); 
	
	var otherHeight;
	otherHeight = mainHeight - 50;
	// Dynamic Heights for side menu and main container
	$('.dropBox').css('height',otherHeight+'px'); 
	$('.iframeContainer').css('height',otherHeight+'px');
		
	 var slideMenuButton = document.getElementById('slide-menu-button');
   	 slideMenuButton.onclick = function (e) {
        var cl = document.body.classList;
        if (cl.contains('left-nav')) {
            cl.remove('left-nav');
        } else {
            cl.add('left-nav');
        }
    };
	
	
	
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
   alert("hello "+window.device.model);
    var url;
     function doOnOrientationChange()
  {
   switch(window.orientation) 
    {  
      case -90:
      case 90:
        url="?tx_bnadaptiveprofile=PhoneHorizontal";
        load_data();
        break; 
      default:
        url="?tx_bnadaptiveprofile=Phone";
        load_data();
        break; 
    }
  }

  window.addEventListener('orientationchange', doOnOrientationChange);
    load_data();
    
    
  


function load_data()
{
      $("#loadImg div").height($(window).height());
    $("#loadImg div").width($(window).width());
    $("#content_iframe").attr('src', "http://test3.uscommunities.org/about/how-it-works/?tx_bnadaptiveprofile=Phone");

    $.ajax({
        type: 'GET',
        url: "http://www.uscommunities.org/index.php?id=729",
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
                        sublinkli.push('<li class="subMenu"> <a class="link" data-url="'+data[i].subpages[j].url.replace("www.", "test3.") + '?tx_bnadaptiveprofile=Phone" href="javascript:;">'+data[i].subpages[j].title+'</a></li >');

                    }
                   
                   lis.push('<li  class="mainMenu open"><a class="link" data-url="'+data[i].url.replace("www.", "test3.") + '?tx_bnadaptiveprofile=Phone" href="javascript:;">'+data[i].title+'</a><a href="#" class="arrow"></a><ul class="smallMenu">' + sublinkli.join("") + '</ul></li>');
                }
                else
                {
                        lis.push('<li  class="mainMenu open"><a class="link" data-url="'+data[i].url.replace("www.", "test3.") + '?tx_bnadaptiveprofile=Phone" href="javascript:;">'+data[i].title+'</a></li>');
                }
                
            }
            $(".dropBox").html(lis.join(""));
              $('.arrow').on('click', function() 
            {
               $(this).parent().find(".smallMenu").toggle();
            });
            $('.link').on('click', function() 
            {
                $('a.active').removeClass('active');
                $(this).addClass('active');
                $("#loadImg").show();
                $("#content_iframe").attr('src', $(this).attr("data-url"));
                $("#slide-menu-button").click();
            });
        
        }
    });
    
    
}
});

