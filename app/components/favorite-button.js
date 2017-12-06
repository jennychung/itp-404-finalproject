import Ember from 'ember';


export default Ember.Component.extend({
  click() {
    let favoritedToggled = !this.get('favorited');
    this.get('onclick')(favoritedToggled);

    if (favoritedToggled == true) {
      toastr.success('Favorited!');
    } else {
      toastr.error('Unfavorited.')
    }
  }
});
