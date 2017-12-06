import Ember from 'ember';
import $ from 'jquery';
import config from 'worldly/config/environment';

export default Ember.Component.extend({


  didInsertElement() {

    $.ajax({
      context: this,
    url: config.apiHost,
      method: 'GET',
    }).done((article) => {
      Ember.set(this, "article", article);

    }).fail(function(err) {
      throw err;
    });
  }

  //TRIED TO RENDER ARTICLE LOCATIONS (THIS ENDPOINT HAS LANG & LAT, BUT KEPT GETTING ERROR
  // No ‘Access-Control-Allow-Origin’ header is present on the requested resource?

  // ,
  //
  //   didRender(){
  //     var semanticurl = "https://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/";
  //     semanticurl += "kansas";
  //     semanticurl += '.json?' + $.param({
  //       'api-key': "277a4620baa94a2d80815b7ad520b6b3",
  //       'fields': "article_list"
  //     });
  //     $.ajax({
  //       url: semanticurl,
  //       method: 'GET',
  //       dateType: 'jsonp',
  //     }).done(function(result) {
  //       console.log(result);
  //       // Ember.set(this, "articleLocation" , result.results);
  //       // console.log(result.results);
  //     }).fail(function(err) {
  //       throw err;
  //     });
  //   }

  // .article_list.results.body




});
