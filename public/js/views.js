Flights.ReturnSelector = Ember.View.extend({
  templateName: 'return-selector',

  click: function(evt) {
    if (evt.target.id == 'label-return' && !$('#label-return').hasClass('active'))
      this.get('controller').send('showReturn', true);
    else if (evt.target.id == 'label-one-way' && !$('#label-one-way').hasClass('active'))
      this.get('controller').send('showReturn', false);
  }
});

Flights.ReturnTripListing = Ember.View.extend({
  templateName: 'trip-listing',
});
