import Ember from 'ember';
export default Ember.Route.extend({
  title: 'Worldly: Map',
  gMap: Ember.inject.service(),


  standardGeocode(address) {
    this.get('gMap')
      .geocode({
        address
      })
      .then((geocodes) => {
        for (var i = 0; i < 5; i++) {
          console.log(geocodes[i].geometry.location.lat());
        }
      })
      .catch((err) => console.error(err));
  },

  setupController: function(controller) {
    controller.setProperties({
      lat: 37.775,
      lng: -122.434,
      zoom: 8,
      heatmapOpacity: 0.5,
      heatmapDissipating: true,
      //THIS IS TECHNICALLY SUPPOSED TO MAP OUT THE ARTICLE'S GEO_FACET LOCATIONS,
      // BUT I COULDN'T FIGURE OUT HOW TO GEOCODE THE LOCATIONS TO INPUT THEM.....
      heatmapMarkers: Ember.A([
        [37.782551, -122.445368],
        [37.782745, -122.444586],
        [37.782842, -122.443688],
        [37.782919, -122.442815],
        [37.782992, -122.442112],
        [37.783100, -122.441461],
        [37.783206, -122.440829],
        [37.783273, -122.440324],
        [37.783316, -122.440023],
        [37.783357, -122.439794],
        [37.783371, -122.439687],
        [37.783368, -122.439666],
        [37.783383, -122.439594],
        [37.783508, -122.439525],
        [37.783842, -122.439591],
        [37.784147, -122.439668],
        [37.784206, -122.439686],
        [37.784386, -122.439790],
        [37.784701, -122.439902],
        [37.784965, -122.439938],
        [37.785010, -122.439947],
        [37.785360, -122.439952],
        [37.785715, -122.440030],
        [37.786117, -122.440119],
        [37.786564, -122.440209],
        [37.786905, -122.440270],
        [37.786956, -122.440279],
        [37.800224, -122.433520],
        [37.800155, -122.434101],
        [37.800160, -122.434430],
        [37.800378, -122.434527],
        [37.800738, -122.434598],
        [37.800938, -122.434650]

      ]),
      //
      // let heatmapMarkers = [];
      //    for(var i = 0; i < 5; i++){
      //      markers.push({
      //
      //        lat: model[i].venue.location.lat,
      //        lng: model[i].venue.location.lng
      //
      //      })
      //    }


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
      styles: Ember.A([{
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
              "color": "#dedede"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
            "visibility": "off"
          }]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [{
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
          "stylers": [{
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
          "stylers": [{
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

      markers: Ember.A([{
        lat: 32.75494243654723, // Required
        lng: -86.8359375, // Required
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
      }])
    })


  }
});
