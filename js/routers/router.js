var app = app || {};
var AppRouter = Backbone.Router.extend({
  routes:{
    '': 'listProjects',
    'projects/new': 'newProject',
    'projects/edit/:id': 'editProject'

  },
  initialize: function() {

  },
  newProject: function() {
    app.projectController.newProject();
//    app.router.showView('#project-view', new app.ProjectDetailView());
//    var detailView = new app.ProjectDetailView();
//    detailView.render();
  },

  listProjects: function() {
    console.log('INlist pojects');
    app.projectController.listProjects();
//    app.Projects.fetch();
//    app.router.showView('#project-view', new app.ProjectListView());
    //new app.ProjectListView();
  },//
  editProject: function(id) {
    console.log("SFASFDASFAs");
    console.log(id);
    app.projectController.editProject(id);
  }
//  showView: function(selector, view) {
//    console.log(view);
//    if (this.currentView)
//      this.currentView.close();
//    $(selector).html(view.render().el);
//    this.currentView = view;
//    return view;
//  }

});
