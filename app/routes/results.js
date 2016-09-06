import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=799f2befb6934c72bbc13ce7bbec53ce&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
