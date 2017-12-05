import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  articles:[
  {
  //   article_title:
  //   category:
  //   date:
  //   abstract:
}
],

    init(){
  this._super(...arguments);
  this.errors = [];
var url = "https://api.nytimes.com/svc/topstories/v2/home.json";
  url += '?' + $.param({
    'api-key': "277a4620baa94a2d80815b7ad520b6b3"
  });
  $.ajax({
    url: url,
    method: 'GET',
  }).done((result) => {

    Ember.set(this, "articles" , result.results.filter((article)=>
    {
      return (article.section === this.attrs.category  && article.subsection === this.attrs.subcat) ;

    })
  );
    // console.log(this.articles);


  }).fail(function(err) {
    throw err;
  });


}





});
