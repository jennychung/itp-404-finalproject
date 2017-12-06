import Ember from 'ember';

export function shortFormatDate(params /*, hash*/ ) {
  let datetime = params[0];
  return moment(datetime).format('MMM Do');
}

export default Ember.Helper.helper(shortFormatDate);
