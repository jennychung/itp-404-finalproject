import Ember from 'ember';
import $ from 'jquery';
import config from 'worldly/config/environment'

export default Ember.Component.extend({


  isFavorited: false,
  isFiled: false,
  didRender(){

    $.ajax({
      context: this,
      url: "http://localhost:3000/api/articles",
      method: 'GET',
      success(res){

        var arty = res.filter((art) => art.article.url == this.attrs.article.url)[0];

         // console.log("Embarticle",  this.attrs.article.url);
        if (arty)
          {
             // console.log("arty! ", arty);
            this.set('isFavorited', arty.favoritedToggled);

          }
      }
    });


  },
  actions: {

      favorite(newIsFavoritedValue) {
          this.set('isFavorited', newIsFavoritedValue);
          if (newIsFavoritedValue == true){
          $.ajax({
            url: "http://localhost:3000/api/articles",
            method: 'POST',
            contentType: "application/json; charset=utf-8",
              dataType   : "json",
            data: JSON.stringify({
              article : this.article,
              favoritedToggled : newIsFavoritedValue
            })
          });
        } else {

          $.ajax({
            url: "http://localhost:3000/api/articles",
            method: 'GET',
            success(res){
              var id = res.filter((art)=> art.url == Ember.get('article', 'url'))[0].id;
              $.ajax({
                url: "http://localhost:3000/api/articles/" + id,
                method: 'DELETE'
              });


            }
          });


        }
          // console.log(newIsFavoritedValue);
      }
}

});
