var delay = 50;
var $services = $(".layout-category-grid .category-item");
var $servicesList = $(".layout-category-grid .columns-container");
$services.each(function () {
    var i = Math.floor(Math.random() * $services.length) + 1;
    $(this).css({
        "transition-delay": delay * i + "ms"
    })
});
$servicesList.dxInview({
    in: function (obj) {
        $servicesList.removeClass("hidden")
    },
    out: function (obj) {
        $servicesList.addClass("hidden")
    }
});
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
$(".layout-four-steps .box:nth-of-type(1), .layout-four-steps .box:nth-of-type(2)").equalHeightColumns();
$(".layout-four-steps .box:nth-of-type(3), .layout-four-steps .box:nth-of-type(4), .layout-four-steps .box-pic").equalHeightColumns();
if (!mobile) {
    $(".layout-four-steps .box:nth-of-type(4) .hex-numeral").dxInview({
        in: function (obj) {
            $(".layout-four-steps").addClass("active")
        }
    })
} else {
    $(".layout-four-steps").addClass("active")
}
var $sliderBg = $(".slide-bg");
var $houseSlider = $(".house-slider");
var $intro = $(".house-slider-wrapper .intro-slide");
var $slides = $houseSlider.children();
var $house = $(".house-slider-wrapper .house-wrapper");
var rotateSetInterval = null;
var slideSetInterval = null;
var hoverSetTimeout = null;
var enableInterval = true;
var slideIndex = 1;

function setupSlider() {
    setTimeout(function () {
        $sliderBg.addClass("active");
        setTimeout(function () {
            $intro.addClass("active");
            setupHover();
            setTimeout(function () {
                $intro.removeClass("active");
                showHouse();
                if (enableInterval) {
                    activateSetup(1);
                    startInterval(2)
                }
            }, 4e3)
        }, 800)
    }, 600)
}
setupSlider();

function setupHover() {
    $(".service-links .services-list li").hover(function () {
        enableInterval = false;
        clearTimeout(hoverSetTimeout);
        clearInterval(slideSetInterval);
        showHouse();
        $intro.removeClass("active");
        $(".info-slider li").removeClass("active");
        var groupSet = $(this).attr("data-slide");
        activateSetup(groupSet)
    }, function () {})
}

function showHouse(index) {
    $house.addClass("active")
}

function hideHouse(index) {
    $house.removeClass("active")
}

function activateSlide(index) {
    if (index == "intro") {
        $intro.addClass("active")
    } else {
        $intro.removeClass("active");
        $slides.removeClass("active");
        var houseSetupIndex = $slides.eq(index).attr("data-set");
        activateSetup(houseSetupIndex);
        $slides.eq(index).addClass("active")
    }
}

function startInterval(index) {
    if (index == undefined) {
        slideIndex = 1
    }
    if (enableInterval == true) {
        slideSetInterval = setInterval(function () {
            slideIndex = slideIndex > 3 ? 1 : slideIndex;
            activateSetup(slideIndex);
            ++slideIndex
        }, 4e3)
    }
}

function activateSetup(index) {
    $house.find(">span").removeClass("active");
    $(".info-slider li").removeClass("active");
    $(".info-slider li").eq(index - 1).addClass("active");
    switch (index.toString()) {
        case "1":
            $house.find(".crawlspace,.insulation,.attic-floor,.roof-cut").addClass("active");
            break;
        case "2":
            $house.find(".ac-unit,.attic-floor").addClass("active");
            break;
        case "3":
            $house.find(".front-wall,.attic-floor").addClass("active");
            break
    }
    $slides.removeClass("show active");
    $houseSlider.find('li[data-set="' + index + '"]').addClass("show");
    $houseSlider.find("li.show .point, li.show > div").hover(function () {
        clearTimeout(hoverSetTimeout);
        clearInterval(slideSetInterval);
        $slides.removeClass("active");
        $(this).parent().addClass("active");
        $(".info-slider li").removeClass("active")
    }, function () {
        clearTimeout(hoverSetTimeout);
        hoverSetTimeout = setTimeout(function () {
            $slides.removeClass("active");
            $(".info-slider li").eq(index - 1).addClass("active")
        }, 600)
    })
}
var itemDelay = 50;
var $items = $(".layout-image-cta-grid .category-item");
var $itemsList = $(".layout-image-cta-grid .columns-container");
$items.each(function () {
    var i = Math.floor(Math.random() * $items.length) + 1;
    $(this).css({
        "transition-delay": itemDelay * i + "ms"
    })
});
$itemsList.dxInview({
    in: function (obj) {
        $itemsList.removeClass("hidden")
    },
    out: function (obj) {
        $itemsList.addClass("hidden")
    }
});

function showNextReview(wrapper) {
    var activeReview = wrapper.find('.testimonial[aria-hidden="false"]');
    activeReview.attr("aria-hidden", "true");
    if ($(activeReview[1]).next().length > 0) {
        $(activeReview[1]).next().attr("aria-hidden", "false");
        $(activeReview[1]).next().next().attr("aria-hidden", "false")
    } else {
        wrapper.find(".testimonial").first().attr("aria-hidden", "false");
        wrapper.find(".testimonial").first().next().attr("aria-hidden", "false")
    }
}
if ($(".layout-testimonial-slider").length > 0) {
    $(".layout-testimonial-slider").each(function () {
        var wrapper = $(this);
        if (wrapper.find(".testimonial").length > 1) {
            setInterval(function () {
                showNextReview(wrapper)
            }, 7e3)
        }
    })
}
$(".layout-testimonials .review").dxInview({
    in: function (obj) {
        obj.addClass("active")
    },
    out: function (obj) {
        obj.removeClass("active")
    }
});
var mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
var $wheelIcons = $(".wheel-icons");
var $wheelContent = $(".wheel-content-wrapper");
var interval;
$(".wheel-content").equalHeightColumns();

function activateWheel() {
    $(".wheel-slices").removeClass("hidden");
    setTimeout(function () {
        if (!$(".wheel-icons").hasClass("active")) {
            $(".wheel-icons li").each(function (i) {
                var obj = $(this);
                setTimeout(function () {
                    obj.addClass("active");
                    var title = obj.html();
                    $(".wheel-logo-holder .title-holder").html(title)
                }, 700 * i)
            })
        }
        $(".wheel-icons").addClass("active")
    }, 2e3)
}

function showContent(index) {
    $('.wheel-slices span[data-index="' + index + '"]').addClass("current");
    $wheelContent.find(".wheel-content").removeClass("active");
    $wheelContent.find('.wheel-content[data-index="' + index + '"]').addClass("active")
}

function startInterval() {
    if (!interval) {
        interval = setInterval(function () {
            var index;
            var $current = $wheelIcons.find("li.current");
            $(".wheel-slices span.current").removeClass("current");
            if ($current.length > 0) {
                index = $current.removeClass("current").next().addClass("current").data("index");
                $('.wheel-slices span[data-index="' + index + '"]').addClass("current")
            }
            if (!index) {}
        }, 4e3)
    }
}
$(".wheel-icons li").hover(function () {
    var index = $(this).data("index");
    var title = $(this).html();
    $(".wheel-logo-holder .title-holder").html(title);
    clearInterval(interval);
    $wheelIcons.find("li.current").removeClass("current");
    $(".wheel-slices span.current").removeClass("current");
    showContent(index)
}, function () {});
if (!mobile) {
    $(".wheel-wrapper").dxInview({
        in: function (obj) {
            activateWheel();
            startInterval()
        }
    })
} else {
    $(".wheel-wrapper").addClass("mobile");
    activateWheel()
}

function navDrawer() {
    $(".js-mobile-link").click(function () {
        $(this).toggleClass("active");
        $(".mobile-navigation-container").toggleClass("active")
    });
    $(".mobile-navigation-container .nav-link-primary").each(function () {
        if ($(this).next().hasClass("nav-list-secondary-container")) {
            $(this).find(".fa").remove();
            $(this).append('<span class="toggle"></span>');
            if ($(this).attr("href") != "") {
                var href = $(this).attr("href");
                var text = $(this).text();
                $(this).next().find(".nav-list-secondary").prepend('<li class="nav-item-secondary"><a class="nav-link-secondary" href="' + href + '">' + text + "</a></li>")
            }
            $(this).click(function (e) {
                e.preventDefault();
                $(this).toggleClass("open");
                $(this).closest("li").find("ul").toggleClass("open")
            })
        }
    })
}
navDrawer();