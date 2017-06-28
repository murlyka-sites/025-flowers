$(document).ready(function() {

	$(".grid-slider-5").slick({
		slidesToShow: 5,
		arrows: false,
		infinite: false,

		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]
	});

	$(".grid-slider-4").slick({
		slidesToShow: 4,
		arrows: false,
		infinite: false,

		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]
	});

	$(".grid-slider-3").slick({
		slidesToShow: 3,
		arrows: false,
		infinite: false,

		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]

	})

	$(".reviews-shop__container").slick({
		slidesToShow: 3,
		rows: 3,
		arrows: false,
		dots: true,

		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				rows: 2
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				rows: 2
			}
		}]
		// variablesWidht: true
	})

	$(".nav__toggle").click(function() {
		$(this).toggleClass("nav__toggle_open");

		$(".nav__list").toggleClass("nav__list_open")
	});

	$(".card-slider__prs").slick({
		slidesToShow: 1,
		arrows: false,
		// fade: true,
		asNavFor: ".card-slider__dots"
	})

	$(".card-slider__dots").slick({
		slidesToShow: 4,
		arrows: false,
		asNavFor: ".card-slider__prs",
		focusOnSelect: true
	})

	$(".twin-cards__slider").slick({
		slidesToShow: 4,

		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		},{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},{
			breakpoint: 500,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$("input[type=radio]:not(.no-custom), input[type=checkbox]:not(.no-custom)").styler();

	$(".card-info .button-group__button").click(function() {
		if($(this).hasClass("button-group__button_active")) {
			return false;
		}

		$(this).closest(".button-group").find(".button-group__button_active").removeClass("button-group__button_active");
		$(this).addClass("button-group__button_active")

		var price = $(this).data("price");

		$(this).closest(".card-info").find(".card-info__price-value").text(price);
		
		// $(this).parent().find(".button-group__button_active").removeClass("button-group__button_active");
	})

	$('.field-with-floating-label__field').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('field-with-floating-label__field_used');
    else
      $this.removeClass('field-with-floating-label__field_used');
  });

  $(".lang-switcher__current").click(function() {
  	$lang = $(this).closest(".lang-switcher");

  	$lang.find(".lang-switcher__content").toggleClass("lang-switcher__content_open");
  });

  $(".field-with-phone .lang-switcher__item").click(function() {
  	var mask = $(this).data("mask"),
  			placeholder = $(this).data("placeholder"),
  			$field = $(this).closest(".field-with-phone").find(".field-with-phone__field"),
  			$currentSwitcher = $(this).closest(".lang-switcher").find(".lang-switcher__current");

  	$field.val("")
  	$field.mask(mask);

  	$currentSwitcher.html($(this).html());

  	$(this).closest(".lang-switcher").find(".lang-switcher__content").removeClass("lang-switcher__content_open")
  });

  $(".field-with-phone__field").each(function() {
  	var $field = $(this);

  	$field.mask($field.data("mask"));
  })


  var $grid = $('.reviews-catalog__masonry').masonry()


	$(".reviews-catalog__more").click(function() {
		$.ajax({
			url: "getItems.html",
			success: function(data){
				$items = $(data);

				$grid.append($items).masonry('appended', $items);

				$grid.imagesLoaded().progress( function() {
					$grid.masonry('layout');
				});
	  }
	});

	  return false;
  });



  $(".rating-field__input").click(function () {
  	$(this).closest(".rating-field").find(".rating-field__star_active").removeClass("rating-field__star_active");

  	$(this).closest(".rating-field__star").addClass("rating-field__star_active")

  });

  $(".nav-tabs__link").click(function () {
  	if($(this).hasClass("nav-tabs__link_active")) {
  		return false;
  	}

  	var $block = $(this).closest(".nav-tabs"),
  			index = $block.find(".nav-tabs__link").index($(this)),
  			$tabContent = $($block.data("tab-content"));

  	$block.find(".nav-tabs__link_active").removeClass("nav-tabs__link_active");
	 	$(this).addClass("nav-tabs__link_active");

	 	$tabContent.find(".tab-content__item_active").removeClass("tab-content__item_active");
	 	$($tabContent.find(".tab-content__item")[index]).addClass("tab-content__item_active");

	 	$grid.masonry('layout');

  	return false;
  });
});
