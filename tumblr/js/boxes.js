var color_classes = ["star1", "star2", "star3", "star4", "star5"];
$(document).ready(function() {
    $("ul").each(function() {
        if (!$(this).hasClass("no_change")) {
            index = 0;
            $(this).find("li").each(function() {
                $(this).addClass(color_classes[index]);
                index++;
                if (index == color_classes.length) {
                    index = 0;
                }
            });
        }
    });

    $("#side").stick_in_parent({
        inner_scrolling: "false",
        bottoming: "false",
        offset_top: 25
    });

    $(window).resize(function() {
        $(document.body).trigger("sticky_kit:recalc");
    });

    $('p').has('h1, h2, h3, h4, h5').remove(this);
    $('ul.tags li a:contains("@")').text(function() {
        return $(this).text().replace("#", "");
    });
   
    $('h5').each(function() {
    	$this = $(this);
    	var regExp = /(\([^)]+\))/; 
    	var keyword = $this.html().match(regExp);
    	if (keyword === null){return;}
    	$this.html($this.html().replace(regExp, '<span>' + keyword[0] + '</span>'));
    });
});


$(function() {
    $("object").each(function() {
        if ($(this).find(
                "param[value^='http://www.youtube.com']").length >
            0) {
            var parent = $(this).parent();
            var youtubeCode = parent.html();
            var params = "";
            if (youtubeCode.toLowerCase().indexOf("<param") ==
                -1) {
                $("param", this).each(function() {
                    params += $(this).get(0).outerHTML;
                });
            }
            var oldOpts = /rel=0/g;
            var newOpts =
                "rel=0&amp;color1=0xFFFFFF&amp;color2=0xFFFFFF";
            youtubeCode = youtubeCode.replace(oldOpts, newOpts);
            if (params != "") {
                params = params.replace(oldOpts, newOpts);
                youtubeCode = youtubeCode.replace(/<embed/i,
                    params + "<embed");
            }
            parent.html(youtubeCode);
        }
    });
});
