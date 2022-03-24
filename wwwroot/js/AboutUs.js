function Tabs(options) {
    var tabs = document.querySelector(options.el);
    var initCalled = false;
    var tabNavigation = tabs.querySelector(".c-tabs-nav");
    var tabNavigationLinks = tabs.querySelectorAll(".c-tabs-nav__link");
    var tabContentContainers = tabs.querySelectorAll(".c-tab");

    var marker = options.marker ? createNavMarker() : false;

    var activeIndex = 0;

    function init() {
        if (!initCalled) {
            initCalled = true;

            for (var i = 0; i < tabNavigationLinks.length; i++) {
                var link = tabNavigationLinks[i];
                clickHandlerSetup(link, i)
            }

            if (marker) {
                setMarker(tabNavigationLinks[activeIndex]);
            }
        }
    }

    function clickHandlerSetup(link, index) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            goToTab(index);
        })
    }

    function goToTab(index) {
        if (index >= 0 && index != activeIndex && index <= tabNavigationLinks.length) {
            tabNavigationLinks[activeIndex].classList.remove('is-active');
            tabNavigationLinks[index].classList.add('is-active');

            tabContentContainers[activeIndex].classList.remove('is-active');
            tabContentContainers[index].classList.add('is-active');

            if (marker) {
                setMarker(tabNavigationLinks[index]);
            }

            activeIndex = index;
        }
    }

    function createNavMarker() {
        var marker = document.createElement("div");
        marker.classList.add("c-tab-nav-marker");
        tabNavigation.appendChild(marker);
        return marker;
    }

    function setMarker(element) {
        marker.style.left = element.offsetLeft + "px";
        marker.style.width = element.offsetWidth + "px";
    }

    return {
        init: init,
        goToTab: goToTab
    }
}

var m = new Tabs({
    el: "#tabs",
    marker: true
});

m.init();

$('#myForm').submit(function (e) {
    e.preventDefault();
    var data = $("#myForm").serialize();

    var isValid = true;
    $('.form-control').each(function () {
        var element = $(this);
        if (element.val() == "") {
            isValid = false;
        }
    });
    $.ajax({
        type: "POST",
        url: "/AboutUs/ContactUs",
        data: data,
        success: function (response) {
            if (!response.success === true && isValid) {
                toastr.success('Sign Up Successful');
                $('#myForm')[0].reset();
            }
        }
    })
});

function empty() {
    var x, y, z;
    x = document.getElementById("name").value;
    y = document.getElementById("email").value;
    z = document.getElementById("message").value;
    if ((x == "" || x == null) || (y == "" || y == null) || (z == "" || z == null)) {
        if ((x == "" || x == null) && (y == "" || y == null) && (z == "" || z == null)) {
            toastr.error("All three field must be filled ");
            return false;
        }
        else if ((y == "" || y == null) && (z == "" || z == null)) {
            toastr.error("Email and Message must be filled");
            return false;
        }
        else if ((x == "" || x == null) && (y == "" || y == null)) {
            toastr.error("Name and Email must be filled");
            return false;
        }
        else if ((x == "" || x == null) && (z == "" || z == null)) {
            toastr.error("Name and Message must be filled");
            return false;
        }
        else if ((x == "" || x == null)) {
            toastr.error("Name field must be filled ");
            return false;
        }
        else if ((y == "" || y == null)) {
            toastr.error("Email field must be filled ");
            return false;
        }
        else if ((z == "" || z == null)) {
            toastr.error("Message field must be filled ");
            return false;
        }
    }
    else {
        return true;
    };
}