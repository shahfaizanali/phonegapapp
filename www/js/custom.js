// general vars
var tapEvent = 'click'; // tap event click

jQuery(document).ready(function($) {
    $('.popupButton').click(function() {
        $('#sliderScreen').toggle();
    });
    $.ajax({
        type: 'GET',
        url: "http://test3.uscommunities.org/index.php?id=729",
        dataType: 'json',
        success: function(data)
        {$("#main").load(data[1].url);
            var items = [];

            for (i in data)
            {
                var subitems = [];
                if (data[i].subpages.length != 0)
                {
                    items.push("<li  id='" + i + "' href='" + data[i].url + "'>" + "<a href='##'>" + data[i].title + "</a><a href='#sliderScreen" + i + "' class='arrow'></a></li>");
                    for (j in data[i].subpages)
                    {
                        subitems.push("<li  id='" + i + j + "' href='" + data[i].subpages[j].url + "'>" + "<a href='##'>" + data[i].subpages[j].title + "</a></li>");
                    }
                    $("<div/>", {scrolling: "yes", "data-footer": "none", "data-header": "customHeader",
                        "class": "panel", id: "sliderScreen" + i,
                        html: "<div class='slider'><br class='all'></div>"}).appendTo("#content");
                    $("<ul/>", {class: "dropBox", html: subitems.join("")}).appendTo("#sliderScreen" + i + " .slider");

                

                }
                else
                {items.push("<li  id='" + i + "' href='" + data[i].url + "'>" + "<a href='##'>" + data[i].title + "</a></li>");}


            }
            items.push(" <br clear='all'>");
            $("#sliderScreen .dropBox").html(items.join(""));
            $(".dropBox li").click(function() {
                var href = $(this).attr("href") + "?tx_bnadaptiveprofile=Phone";
//			    $("#content").load(href,function(){$('popupButton').click();});
                $("#main").html("<img src='img/loader.gif' style='width:50%;height:50%;'></img>");
                $('.popupButton').click();
                $("#main").load(href, function() {
                });
            });
            $(".slider .dropBox li").click(function() {
                var href = $(this).attr("href") + "?tx_bnadaptiveprofile=Phone";
//			    $("#content").load(href,function(){$('popupButton').click();});
                $("#main").html("<img src='img/loader.gif' style='width:50%;height:50%;'></img>");
                $('#backButton').click();
                $('.popupButton').click();
                $("#main").load(href, function() {
                });





            });
        }
    }
    );

});


function show() {
    $('.sliderBg').css('display', 'block');
}

function hide() {
    $('.sliderBg').css('display', 'none');
}

