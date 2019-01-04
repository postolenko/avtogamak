var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

// ------------------------

var parentBlock;
var dropdownBox;

$(window).load(function() {

	getFooterPosition();

	$(".dropdown_box").each(function() {

		$(this).addClass("activated");

		if( !$(this).hasClass("active")) {

			$(this).find(".dropdown").css({
				"display" : "none"
			});

		}

	});

});

$(window).resize(function() {
    
	getFooterPosition();

});

$(document).ready(function() {   

	$(".dropdown_btn").on('click', function(e) {

		e.preventDefault();

		parentBlock = $(this).closest(".dropdown_box");

		dropdownBox = parentBlock.find(".dropdown");

		if( dropdownBox.is(":hidden") ) {

			dropdownBox.slideDown(300);
			parentBlock.addClass("active");

		} else {

			dropdownBox.slideUp(300);
			parentBlock.removeClass("active");

		}

	});

	$(".scroll_top").click(function(e) {

        e.preventDefault();

        $("html, body").animate({
            scrollTop: 0
        }, 700);

    });

});

function getFooterPosition() {

    $(".footer_section").css({
        "margin-top" : -$(".footer_section").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_section").height() + "px"
    });

}