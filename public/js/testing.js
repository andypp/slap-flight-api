App = Ember.Application.create();

App.Router.map(function() {
  this.resource('companies',{path:'/'});
  //this.resource('company',{path:'/company/:company_id'}, function(){
  //  this.route('contacts'); 
  //});
});

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.CompaniesRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('company');
  }
});  


App.CompanyRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('company', params.company_id).then(function(company){
          console.log("asdf");
          console.log(company);
      return company;
    });
  }

})
//App.CompanyIndexRoute = Ember.Route.extend({
//  model: function(params){
//    return this.modelFor('company')
//  }
//});  

App.CompanyContactsRoute = Em.Route.extend({
  
model: function(params){
    return this.modelFor('company')
    
  }
  
});

 App.Company = DS.Model.extend({
  name: DS.attr('string'),
  contacts: DS.hasMany('Contact', {async: true})
});

App.Company.FIXTURES = [{
  id:1,
  name: 'company 1',
  contacts: ['1'] 
},
{
  id: 2,
  name: 'company 2',
  contacts: ['1','2']
  
}]; 

 App.Contact = DS.Model.extend({
  name: DS.attr('string'),
  company: DS.belongsTo('Company')
  
});
App.Contact.FIXTURES=[{
  id: 1,
  name: 'employee 1',
  company: 1
},{
  id: 2,
  name: 'employee 2',
  company: 2
}];
