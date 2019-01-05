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

	$("body").addClass("load");

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
            scrollTop: $("#first_good").offset().top - $(".header-site").height()
        }, 700);

    });

    // ----------------------------------

    $("[data-fancywrapp]").on("click" , function(e) {

    	e.preventDefault();

    	var fancyboxName = $(this).attr('data-fancywrapp');

    	$("[data-fancy-slides = '"+ fancyboxName +"'] a:eq(0)").trigger("click");

    });

    // ----------------------------------

    $("[data-popup-name]").click(function(e) {

        e.preventDefault();

        $(".popup_wrapp").fadeOut(300);

        popupName = $(this).attr("data-popup-name");
        popupBlock = $("[data-popup = '"+ popupName +"']");

        $("body").addClass("popupshow");

        popupBlock.fadeIn(400);

    });

    $(this).keydown(function(eventObject){

        if (eventObject.which == 27) {

            if ( $(".popup_wrapp").is(":visible") ) {

                $(".popup_wrapp").fadeOut(300);

                $("body").removeClass("popupshow");

            }

        }

    });

    $(".close-popup, .popup_bg").click(function(e) {
        
        e.preventDefault();

        popupBlock = $(this).closest(".popup_wrapp");

        popupBlock.fadeOut(300);

        $("body").removeClass("popupshow");

    });

    // ----------------


});

function getFooterPosition() {

    $(".footer_section").css({
        "margin-top" : -$(".footer_section").height() + "px"
    });

    $(".wrapper").css({
        "padding-bottom" : $(".footer_section").height() + "px"
    });

}