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
                lis.push('<li class="mainMenu"><a href="#sliderScreen' + i + '">' + data[i].title + '</a><a onclick="$("#sub'+i+'").toggle();" class="arrow"></a></li>')
                if (data[i].subpages.length != 0)
                {   
                    var sublinksul = [];
                    var sublinkli = [];
                    for (j in data[i].subpages)
                    {
                        sublinkli.push('<li class="subMenu" href="' + data[i].subpages[j].url.replace("www.", "test3.") + "?tx_bnadaptiveprofile=Phone" + '" > <a href="javascript:;" > ' + data[i].subpages[j].title + ' </a></li >');
                    }
                    lis.push('<div class="sub' + i + '">' + sublinkli.join("") + '</div>')
                }
            }
            $(".dropBox").html(lis.join(""))
            $('.subMenu').on('click', function() 
            {
                $("#loadImg").show();
                $("#content_iframe").attr('src', $(this).attr("href"));
                $("#content_iframe").attr('height', $(window).height());
                $("#content_iframe").attr('width', $(window).width());
                $("#slide-menu-button").click();
            });
        }
    });
});


