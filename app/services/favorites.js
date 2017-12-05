import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
  data: [],
    add(favoriteArticles){
      this.set('data', this.data.concat([favoriteArticles]));
             // console.log(this.data);
    },
//        favorite(eventfulEvent, jQueryEvent){
        //     $.ajax({
        //         type: 'POST',
        //         url: 'http://localhost:3000/api/favorites',
        //         data:{
        //         event_id: eventfulEvent.id,
        //         title: eventfulEvent.title
        //     }
        //     });

       remove(favoriteArticles){
         let newListOfEvents = this.data.filter((event) => {
           return event !== favoriteArticles;

         });
        //  this.set('data', newListOfEvents);
         // console.log(this.data);
       }
});
