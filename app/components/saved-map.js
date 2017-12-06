import Ember from 'ember';

export default Ember.Component.extend({
    isFavorited: true,
    favorites: Ember.inject.service(),

    didRender(){
      var url = "https://api.nytimes.com/svc/semantic/v2/concept/name/nytd_geo/";
url += $.param({
  searchQuery
});
url += '.json?' + $.param({
  'api-key': "277a4620baa94a2d80815b7ad520b6b3",
  'fields': "article_list"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
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

            }
        }

});
