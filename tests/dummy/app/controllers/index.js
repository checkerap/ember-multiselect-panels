import Em from 'ember';

export default Em.Controller.extend({
  myList: function() {
    return [
      Em.Object.create({'name': 'The Boondock Saints'}),
      Em.Object.create({'name': 'Shaun of the Dead'}),
      Em.Object.create({'name': 'Seven'}),
      Em.Object.create({'name': 'Boyz in the Hood'}),
      Em.Object.create({'name': 'Saw'}),
      Em.Object.create({'name': 'Hot Fuzz'}),
      Em.Object.create({'name': 'The Matrix'}),
      Em.Object.create({'name': 'Resident Evil'})
    ];
  }.property(),
  myPromiseList: function() {
    var data = [
      Em.Object.create({'name': 'Tyrion Lannister'}),
      Em.Object.create({'name': 'Ned Stark'}),
      Em.Object.create({'name': 'Cersei Lannister'}),
      Em.Object.create({'name': 'Brandon Stark'}),
      Em.Object.create({'name': 'Daenerys Targaryen'}),
      Em.Object.create({'name': 'Kal Drogo'}),
      Em.Object.create({'name': 'Jon Snow'})
    ];
    return new Em.RSVP.Promise(function(resolve) {
      Em.run.later(function() {
        resolve(data);
      }, 2000);
    });
  }.property(),
  favouriteMovies: [],
  favouriteCharacters: []
});
