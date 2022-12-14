jQuery(document).ready(function($) {
	jQuery(".share_btn_logo").click(function() {
		jQuery(this).toggleClass('active');  
		jQuery('.share_toggler ul').slideToggle('slow'); 
	});

	jQuery(".menu_bar").click(function() {
        jQuery('.header_nav_area').toggleClass('active-open');
		jQuery('.header').toggleClass('header_stiky');
		jQuery(this).toggleClass('menu_bar_active');
        jQuery('body').toggleClass('overflow_add');
	});

	// new WOW().init();


	jQuery('.scroll_down').click(function () {
		var Lochref = jQuery(this).attr('href');
		jQuery("html, body").stop().animate({
		scrollTop: jQuery(Lochref).offset().top -0
		}, 1500);
		return false;
	});

    if(matchMedia('only screen and (max-width: 991px)').matches) {
        var height = jQuery('.nhg_blog_photo.only_mobile_view').outerHeight()+45;
        jQuery(".nth_full_slider").find('.owl-nav').css("top", `${height}px`)
    }
        
});


 
    jQuery('.nth_full_slider').owlCarousel({
        loop:true,
        nav:true,
        margin: 0,
        stagePadding: 0,
        autoHeight: true,
        dots:false,
        responsiveClass:true,
        navText: [
            '<span aria-label="' + 'Previous' + '"><i class="fa ion-chevron-left" aria-hidden="true"></i></span>',
            '<span aria-label="' + 'Next' + '"><i class="fa ion-chevron-right" aria-hidden="true"></i></span>'
        ],
        responsive:{
            0:{
                items:1,
                dots:false,
                autoHeight: true,

            },
            992:{
                items:1,
                 nav:true,
                autoHeight: true,
            }
        }
    });

 
 if( jQuery('.megha_menu_top').length > 0 ) {
    jQuery('.megha_menu_top').owlCarousel({
        loop:true,
        nav:true,
        margin: 0,
        stagePadding: 0,
        dots:false,
        responsiveClass:true,
        navText: [
            '<span aria-label="' + 'Previous' + '"><i class="fa ion-chevron-left" aria-hidden="true"></i></span>',
            '<span aria-label="' + 'Next' + '"><i class="fa ion-chevron-right" aria-hidden="true"></i></span>'
        ],
        responsive:{
            0:{
                items:2,
                dots:false,
                autoHeight: true,
            },
            992:{
                items:4,
                 nav:true,
            }
        }
    });
}
    jQuery('.photo_gallery_carousel').owlCarousel({
        loop:true,
        nav:true,
        margin: 0,
        stagePadding: 0,
        dots:false,
        responsiveClass:true,
        navText: [
            '<span aria-label="' + 'Previous' + '"><i class="fa ion-chevron-left" aria-hidden="true"></i></span>',
            '<span aria-label="' + 'Next' + '"><i class="fa ion-chevron-right" aria-hidden="true"></i></span>'
        ],
        responsive:{
            0:{
                items:1,
                dots:false,
            },
            992:{
                items:1,
                 nav:true,
            }
        }
    });



// var height = megaBlogHeight.outerHeight() + 40; 