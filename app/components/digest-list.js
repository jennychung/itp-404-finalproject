import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({


  didInsertElement() {

    $.ajax({
      context: this,
      url: "http://localhost:3000/api/articles",
      method: 'GET',
    }).done((article) => {
      Ember.set(this, "article", article);

    }).fail(function(err) {
      throw err;
    });
  }






});
