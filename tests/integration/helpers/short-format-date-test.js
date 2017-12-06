
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('short-format-date', 'helper:short-format-date', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{short-format-date inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});

