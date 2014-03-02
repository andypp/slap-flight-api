Flights.Router.map(function() {
  this.resource('trips', { path: '/' });
});

Flights.TripsRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    // these lines can be removed
    controller.set('departTrip', []);
    controller.set('returnTrip', []);
  }
});
