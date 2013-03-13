var app = app || {};

app.ProjectView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template($('#project-template').html()),

  events: {
    'click a.remove': 'remove'
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  remove: function(e) {
    e.preventDefault();
    this.model.destroy();
    app.router.navigate('', false);
  }
});