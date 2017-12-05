import Ember from 'ember';

export default Ember.Component.extend({
  click() {
      let fileToggled = !this.get('filed');
      this.get('onclick')(fileToggled);

  }
});
