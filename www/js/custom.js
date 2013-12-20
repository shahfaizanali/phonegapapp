// general vars
var tapEvent = 'click'; // tap event click

  jQuery(document).ready(function($) {
      
                $.ajax({
                    type: 'GET',
                    url: "http://test3.uscommunities.org/index.php?id=729",
                    dataType: 'json',
                    success: function(data)
                    {
                        var items = [];
                        for (i in data)
                        {
                            items.push("<li  id='" + i + "' href='" + data[i].url + "'>" +"<a href='##'>"+ data[i].title +"<span></span></a>" + "</li>");
                            if (data[i].subpages.length != 0)
                            {
                                for (j in data[i].subpages)
                                {
                                    items.push("<li  id='" + i + j + "' href='" + data[i].subpages[j].url + "'>- " + "<a href='##'>"+ data[i].subpages[j].title +"<span></span></a>" + "</li>");
                                }
                            }

                        }
                        $(".dropBox").html(items.join(""));
                            $(".dropBox li a").click(function() {
                            var href = $(this).parent().attr("href") + "?tx_bnadaptiveprofile=Phone";
//			    $("#content").load(href,function(){$('popupButton').click();});
			    $("#main").html('<object width="100" height="100" data="'+href+'">');
                           
                            $('popupButton').click();
                        });
                    }
            }
                );
                
            });


function show(){
	$('.sliderBg').css('display','block');
	}

function hide(){
	$('.sliderBg').css('display','none');
	}
	
