Demo.Router = Ember.Router.extend();

Demo.Router.map(function() {
  this.route('root', { path: '/' });
  this.route('button');
  this.route('buttonGroup');
  this.route('navbar');
  this.route('progress');
  this.route('panel');
});
