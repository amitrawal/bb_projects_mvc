var app = app || {};

app.ProjectList = Backbone.Collection.extend({
  model: app.Project,

  // Save all of the todo items under the `"projects"` namespace.
  localStorage: new Backbone.LocalStorage('projects-backbone')
});

app.Projects = new app.ProjectList();