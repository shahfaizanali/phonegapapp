// general vars
var tapEvent = 'click'; // tap event click

  jQuery(document).ready(function($) {

                 alert("sdfsf");
                 $.ajax({
                    type: 'GET',
                    url: "http://test3.uscommunities.org/index.php?id=729&type=1383156157",
                    dataType: 'json',
                    success: function(data)
                    {
                        var items = [];
                        for (i in data)
                        {
                            items.push("<li class='link' id='" + i + "' href='" + data[i].url + "'>" + data[i].title + "</li>");
                            if (data[i].subpages.length != 0)
                            {

                                for (j in data[i].subpages)
                                {
                                    items.push("<li class='link' style='margin-left:3%;' id='" + i + j + "' href='" + data[i].subpages[j].url + "'>- " + data[i].subpages[j].title + "</li>");
                                }

                            }

                        }
                        $(".dropBox").html(items.join(""));
                            $(".link").click(function() {
                            var href = $(this).attr("href") + "?tx_bnadaptiveprofile=Phone"; 
                            $.ajax({
                                type: 'GET',
                                url: href,
                                dataType: 'html',
                                success: function(data)
                                {
                                    $("#main").html(data);
                                }
                                
                            });
                        });
    
                    }
            }
                );
                
            });
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
	
