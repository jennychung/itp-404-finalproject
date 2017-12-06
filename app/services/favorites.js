import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  data: [],
  add(favoriteArticles) {
    this.set('data', this.data.concat([favoriteArticles]));

  },

  remove(favoriteArticles) {
    let newListOfEvents = this.data.filter((event) => {
      return event !== favoriteArticles;

    });

  }
});
