import { test } from 'qunit';
import moduleForAcceptance from 'worldly/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | digest route');

test('visiting /digest route', function(assert) {
  visit('/digest');

  andThen(function() {
    assert.equal(currentURL(), '/digest');
  });
});
