import { test } from 'qunit';
import moduleForAcceptance from 'worldly/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | delete favorite');

test('unfavoriting', function(assert) {
  visit('/home');
  click('#unfavoriteTest')

  andThen(function() {
    assert.equal(find(newIsFavoritedValue),false , 'article was unfavorited');
  });
});
