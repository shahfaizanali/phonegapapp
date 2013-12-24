/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


// general vars
var tapEvent = 'click'; // tap event click


$.ui.ready(function() {
// Navigating pages without services
    $('.popupButton').bind(tapEvent, function() {
        $.ui.loadContent('sliderScreen', false, false, 'slide');
    });
});


$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: "http://test3.uscommunities.org/index.php?id=729",
        dataType: 'json',
        success: function(data)
        {
            var sublinksul = [];
            var sublinkli = [];
            var lis = [];
            for (i in data)
            {
                lis.push('<li><a href="#sliderScreen' + i + '">' + data[i].title + '<span></span></a></li>')
                if (data[i].subpages.length != 0)
                {
                    for (j in data[i].subpages)
                    {
                        sublinkli.push('<li class="sublinks_li" href="' + data[i].subpages[j].url.replace("www.", "test3.") + "?tx_bnadaptiveprofile=Phone" + '" > <a href="javascript:;" > ' + data[i].subpages[j].title + ' </a></li >')
                    }
                    sublinksul.push('<div id="sliderScreen' + i + '" class="panel" scrolling="yes" data-footer="none" data-header="customHeader"><div class="slider"><ul class="dropBox sublinks">' + sublinkli.join("") + '<br class="all"></ul><br class="all"></div><br class="all"></div>')
                }
                if (sublinksul.length != 0) {
                    $("#submenu").append(sublinksul.join(""))
                }
            }
            if (lis.length != 0) {
                $(".links").append(lis.join(""))
            }

            $('.sublinks_li').on('click', function() {
                $("#content_iframe").attr('src', $(this).attr("href"))
                $.ui.loadContent("main",false,false,"slide");
            });
        }
    });
});


