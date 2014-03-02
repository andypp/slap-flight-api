window.Flights = Ember.Application.create();

Flights.TripAdapter = DS.RESTAdapter.extend({
  namespace: 'api/v1',
});

Flights.Store = DS.Store.extend({
  adapter: Flights.TripAdapter 
});
