Flights.TripsController = Ember.ArrayController.extend({

  isSearching: false,
  isReturn: true,
  timeout: null,

  origAirports: function() {
    return this.get('origModelAirports').map(function(item) {
      return {id: item.get('id'), desc: item.get('description')};
    });
  }.property('origModelAirports.@each'),

  destAirports: function() {
    if (this.get('destModelAirports') != null) {
      return this.get('destModelAirports').map(function(item) {
        return {id: item.get('id'), desc: item.get('description')};
      });
    }
    return null;
  }.property('destModelAirports.@each'),

  originUpdated: function() {
    if (this.get('origin') != null && this.get('origin') != '') {
      this.set('destModelAirports', this.store.find('airport', {'orig': this.get('origin')}));
    } else {
      this.set('destModelAirports', this.store.find('airport', {'orig': 'xxx'}));
    }
  }.observes('origin'),

  actions: {
    search: function() {
      var origin = this.get('origin');
      var destination = this.get('destination');
      var departDate = this.get('departDate');
      var returnDate = this.get('returnDate');

      this.set('isSearching', true);
      this.set('departTrip', []);
      this.set('returnTrip', []);
      $('#tab-trip-listing a:first').tab('show')
      this.set('timeout', setTimeout(this.checkSearching.bind(this), 1000));

      console.log("origin: " + origin + ", destination: " + destination + ", depart: " + departDate + ", return: " + returnDate);
    },

    showReturn: function(doShow) {
      this.set('isReturn', doShow);
      console.log("updating: " + this.isReturn);
    }
  },

  checkSearching: function() {
    this.set('departTrip', this.store.find('trip', {'walk': 'lala'}));
    if (this.get('isReturn'))
      this.set('returnTrip', this.store.find('trip', {'walk': 'lele'}));
    this.set('isSearching', false);
  }

});

Flights.TripController = Ember.ObjectController.extend({
  actions: {
    selectFlight: function() {
      console.log('selected: ' + this.get('model').get('airline'));
    }
  }
});
