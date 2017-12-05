import Ember from 'ember';
export default Ember.Route.extend({
  title: 'Worldly: Map',

  setupController: function(controller) {
    controller.setProperties({
      // Must be an Ember Array
      lat: 32.75494243654723,
      lng: -86.8359375,
      zoom: 8,
      heatmapOpacity: 0.5,
      heatmapDissipating: true,
      heatmapMarkers: Ember.A([
         [33.524796085610056, -86.81121826171875],

       [33.524796085610056, -86.81121826171875]
     ]),
 //      heatmapMarkers: Ember.A([
 //    { location: [33.524796085610056, -86.81121826171875], weight: 5
 //    }
 //  ]),
 //  standardGeocode(address) {
 //   this.get('gMap')
 //     .geocode({address})
 //     .then((geocodes) => {
 //       // Get first geocode latitude
 //       console.log(geocodes[0].geometry.location.lat());
 //     })
 //     .catch((err) => console.error(err));
 // },
      styles: Ember.A([
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]),

      markers: Ember.A([
        {
          lat: 32.75494243654723, // Required
          lng: -86.8359375,   // Required
          click: function(event, marker) {},
          rightclick: function(event, marker) {},
          dblclick: function(event, marker) {},
          mouseover: function(event, marker) {},
          mouseout: function(event, marker) {},
          mouseup: function(event, marker) {},
          mousedown: function(event, marker) {},
          drag: function(event, marker) {},
          dragstart: function(event, marker) {},
          dragend: function(event, marker) {},
          anchorPoint: new google.maps.Point(),
          animation: google.maps.Animation.DROP,
          // attribution: new google.maps.Attribution(),
          clickable: true,
          crossOnDrag: true,
          cursor: 'pointer',
          draggable: true,
          icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          label: 'A',
          opacity: 0.3,
          optimized: true,
          // place: new google.maps.MarkerPlace(),
          position: new google.maps.LatLng(),
          // shape: new google.maps.MarkerShape(),
          title: 'string',
          visible: true,
          zIndex: 999
        }
      ])
    })


  }
});
