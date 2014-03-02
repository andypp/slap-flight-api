Flights.Trip = DS.Model.extend({
  airline: DS.attr('string'),
  origin: DS.attr('string'),
  destination: DS.attr('string'),
  stops: function() {
    return this.get('flights').get('length') - 1;
  }.property('flights.length'),
  hasStops: function() {
    return this.get('stops') > 0;
  }.property('stops'),
  departDate: function() {
    var dt = "";
    this.get('flights').forEach(function(item) {
      if (dt == "")
        dt = item.get('departDate');
    });
    return dt;
  }.property('flights.@each.departDate'),
  arriveDate: function() {
    var dt = "";
    this.get('flights').forEach(function(item) {
      dt = item.get('arriveDate');
    });
    return dt;
  }.property('flights.@each.arriveDate'),
  price: DS.attr('number', {defaultValue: 0.0}),
  isPromo: DS.attr('boolean', {defaultValue: false}),
  flights: DS.hasMany('flight', {async: true})
});

Flights.Flight = DS.Model.extend({
  trip: DS.belongsTo('trip'),
  code: DS.attr('string'),
  origin: DS.attr('string'),
  destination: DS.attr('string'),
  departDate: DS.attr('date'),
  arriveDate: DS.attr('date'),
});

/*
Flights.Trip.FIXTURES = [
 {
   id: 1,
   airline: 'airasia',
   origin: 'SIN',
   destination: 'DPS',
   isPromo: true,
   flights: [1, 2],
   price: 160.5
 },
 {
   id: 2,
   airline: 'jetstar',
   origin: 'SIN',
   destination: 'DPS',
   price: 150.0
 }
];

Flights.Flight.FIXTURES = [
 {
   id: 1,
   trip: 1,
   code: 'AK169',
   origin: 'SIN',
   destination: 'DPS',
   departDate: '2014-01-01T16:00:00',
   arriveDate: '2014-01-01T19:00:00',
 },
 {
   id: 2,
   trip: 1,
   code: 'AK172',
   origin: 'DPS',
   destination: 'SYD',
   departDate: '2014-01-01T20:00:00',
   arriveDate: '2014-01-01T22:00:00',
 }
];
*/
