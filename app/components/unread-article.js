import Ember from 'ember';
import $ from 'jquery';
import config from 'worldly/config/environment';

export default Ember.Component.extend({


  isFavorited: false,
  isFiled: false,
  didRender() {

    $.ajax({
      context: this,
        url: config.apiHost,
      method: 'GET',
      success(res) {

        var arty = res.filter((art) => art.article.url == this.attrs.article.url)[0];
        if (arty) {
          this.set('isFavorited', arty.favoritedToggled);

        }
      }
    });


  },
  actions: {

    favorite(newIsFavoritedValue) {
      this.set('isFavorited', newIsFavoritedValue);
      if (newIsFavoritedValue == true) {
        $.ajax({
            url: config.apiHost,
          method: 'POST',
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          data: JSON.stringify({
            article: this.article,
            favoritedToggled: newIsFavoritedValue
          })
        });
      } else {

        $.ajax({
          url: config.apiHost,
          method: 'GET',
          success(res) {
            var id = res.filter((art) => art.url == Ember.get('article', 'url'))[0].id;
            $.ajax({
                url: config.apiHost +  id,
              method: 'DELETE'
            });


          }
        });


      }
    }
  }

});
