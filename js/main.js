// LOAD GOOGLE MAP
// window.onload = function () {
//   "use strict";
//
// };

// LOAD FULLPAGE.JS
$(document).ready(function() {
    $('#fullpage').fullpage({
      anchors: ['home', 'about', 'news', 'contact'],
      menu: '#menu',
      afterRender: function () {

        // LOAD GOOGLE MAP
        var styles = [
        {
          featureType: 'water', // set the water color
          elementType: 'geometry.fill', // apply the color only to the fill
          stylers: [
            { color: '#FFFFFF' }
          ]
        },{
          featureType: 'landscape.manmade', // set the natural landscape
          elementType: 'all',
          stylers: [
            { hue: '#27354D' }
          ]
        },{
          featureType: 'poi', // set the point of interest
          elementType: 'all',
          stylers: [
            { hue: '#0F1E39' }
          ]
        },{
          featureType: 'road', // set the road
          elementType: 'geometry',
          stylers: [
            { hue: '#0F1E39' }
          ]
        },{
          featureType: 'road.local', // set the local road
          elementType: 'all',
          stylers: [
            { hue: '#0F1E39' }
          ]
        }
      ];

      var myLatlng = new google.maps.LatLng(10.794519, 106.702320);

      var options = {
        mapTypeControlOptions: {
          mapTypeIds: ['Nexx']
        },
        center: myLatlng,
        zoom: 17,
        disableDefaultUI: false,
        scrollwheel: false,
        mapTypeId: 'Nexx'

      };

      var div = document.getElementById('location');
      var map = new google.maps.Map(div, options);
      var styledMapType = new google.maps.StyledMapType(styles, { name: 'Nexx' });
      map.mapTypes.set('Nexx', styledMapType);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'NEX'
        });
        
      }

    });
});

// LOAD WOW.JS
$(document).ready(function() {
  new WOW().init();
})

// LOAD OWL CAROUSEL
$(document).ready(function(){
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      items:5,
      center: true,
      nav: true,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true
      });
});


// TYPEWRITER EFFECT
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #333}";
        document.body.appendChild(css);
    };
