// general vars
var tapEvent = 'click'; // tap event click

  $(document).ready(function() {
      
                $.ajax({
                    type: 'GET',
                    url: "http://test3.uscommunities.org/index.php?id=729",
                    dataType: 'json',
                    success: function(data)
                    {
                        var items = [];
                        for (i in data)
                        {
                            items.push("<li  id='" + i + "' href='" + data[i].url + "'>" + data[i].title + "</li>");
                            if (data[i].subpages.length != 0)
                            {
                                for (j in data[i].subpages)
                                {
                                    items.push("<li  id='" + i + j + "' href='" + data[i].subpages[j].url + "'>- " + data[i].subpages[j].title + "</li>");
                                }
                            }

                        }
                        $(".dropBox").html(items.join(""));
                            $(".dropBox li").click(function() {
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


function show(){
	$('.sliderBg').css('display','block');
	}

function hide(){
	$('.sliderBg').css('display','none');
	}
	
