import {
  moduleForComponent,
  test
} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('unread-article', 'Integration | Component | unread article', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs `{{unread-article}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs `
    {{#unread-article}}
      template block text
    {{/unread-article}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
