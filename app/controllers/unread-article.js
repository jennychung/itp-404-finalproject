import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
    favorites: Ember.inject.service(),
    isFavorited: Ember.computed('model', 'favorites.data', function(){
      return this.get('favorites.data').includes(this.get('model'));
    }),


     actions: {
        favorite(newIsFavoritedValue, jQueryEvent){

let favoriteArticles = this.get('model');
            if (newIsFavoritedValue){
              this.get('favorites').add(favoriteArticles);
            }
              else{

                this.get('favorites').remove(favoriteArticles);
                // console.log('Delete this favorite')
              }
            }

        }

});
