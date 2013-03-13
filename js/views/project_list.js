var app = app || {};

app.ProjectListView = Backbone.View.extend({
//  el: "#project-view",
  template: _.template($('#project-list-template').html()),

//  events: {
//    'click a.new': 'new'
//  },
  initialize: function() {
    this.listenTo(app.Projects, 'remove', this.render);
    this.listenTo(app.Projects, 'reset', this.render);
//    app.Projects.fetch();
  },
  render: function() {
    var that = this;

//    if(app.Projects.length) {
      this.$el.html(this.template());
      console.log(this.$el);
      this.$listContainer = this.$('#list-container');
      _.each(app.Projects.models, function(project) {
        that.$listContainer.append(new app.ProjectView({model: project}).render().el);
//        that.renderProject(project);
      });
//    }
    return this;
  },
  renderProject: function(project) {
    var view = new app.ProjectView({ model: project });
    this.$listContainer.append(view.render().el);
  },

  new: function(e) {
    app.router.navigate('projects/new', true);
//    var detailView = new app.ProjectDetailView();
//    detailView.render();
  }
});