Flights.TripsController = Ember.ArrayController.extend({

  isSearching: false,
  isReturn: true,
  timeout: null,

  actions: {
    search: function() {
      var origin = this.get('origin');
      var destination = this.get('destination');
      var departDate = this.get('departDate');
      var returnDate = this.get('returnDate');

      this.set('isSearching', true);
      this.set('departTrip', []);
      this.set('returnTrip', []);
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
