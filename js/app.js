var app = app || {};

  Backbone.View.prototype.close = function () {
    if (this.beforeClose) {
      this.beforeClose();
    }
    this.remove();
    this.unbind();
  };

app.Controller = function() {
  var currentView;

  var showView = function(selector, view) {
    console.log(view);
    if (currentView)
      currentView.close();
    $(selector).html(view.render().el);
    currentView = view;
    return view;
  }

  return {
    listProjects: function() {
      app.Projects.fetch();
      showView('#project-view', new app.ProjectListView());
    },
    newProject: function() {
      showView('#project-view', new app.ProjectDetailView({model: new app.Project()}));
    },
    editProject: function(projectId) {
      var project = app.Projects.get(projectId);
      showView('#project-view', new app.ProjectDetailView({model: project}));
    }
  }
};

app.projectController = new app.Controller();
app.router = new AppRouter();
Backbone.history.start();
