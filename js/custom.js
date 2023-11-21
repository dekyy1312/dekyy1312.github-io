// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function GetMap() {
        var map = new Microsoft.Maps.Map('#myMap', {
            credentials: 'AqjzA1ScbGQh0ZzaREiK6W_H6fetyu7XZ-37oUDErwDT0P0AnCLwlgbJ0KByboh0',
            center: new Microsoft.Maps.Location(37.084326, 15.278324)
        });

        var center = map.getCenter();

        //Create custom Pushpin
        var pin = new Microsoft.Maps.Pushpin(center, {
            title: 'Sede',
            text: ''
        });

        //Add the pushpin to the map
        map.entities.push(pin);
    }
