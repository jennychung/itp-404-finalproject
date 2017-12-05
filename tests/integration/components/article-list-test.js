import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('article-list', 'Integration | Component | article list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
 this.set('homesection', 'red');
  this.render(hbs`{{article-list}}`);

  assert.equal(this.$('div').attr('style'), 'color: red', 'starts as red');

  this.set('homesection', 'blue');

    assert.equal(this.$('div').attr('style'), 'color: blue', 'updates to blue');
  // Template block usage:
  this.render(hbs`
    {{#article-list}}
      {{category}}
    {{/article-list}}
  `);

});
