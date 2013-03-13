var app = app || {};

app.ProjectDetailView = Backbone.View.extend({
  formTemplate: _.template($('#project-detail-template').html()),

  events: {
    'submit': 'save',
    'click a.cancel': 'cancel'
  },

  render: function() {
    this.$el.html(this.formTemplate(this.model.toJSON()));
    this.$form = this.$('form');
    return this;
  },

  save: function(e) {
    e.preventDefault();
    var arr = this.$form.serializeArray();
    console.log(arr);
    var data = _(arr).reduce(function(acc, field) {
      acc[field.name] = field.value;
      return acc;
    }, {});
    console.log(data);
    this.model.set(data);

    if(this.model.isNew()) {
      app.Projects.create(this.model);
    } else {
      this.model.save();
    }
    app.router.navigate('', true);
  },

  cancel: function(){
    app.router.navigate('', false);
  }
});