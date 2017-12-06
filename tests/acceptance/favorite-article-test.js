import {
  test
} from 'qunit';
import moduleForAcceptance from 'worldly/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | favorite article');

test('favoriting article', function(assert) {
  visit('/home');
  click('#unfavoriteTest')

  andThen(function() {
    assert.equal(find(newIsFavoritedValue), true, 'article was favorited');
  });
});
