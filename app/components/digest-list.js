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






});
