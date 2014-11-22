import Em from 'ember';

export default Em.Component.extend({
	sortAscending: true,
	sortProperty: null,

	_content: [],
	sortedContent: function() {
		return this.get('_content').sortBy(this.get('sortProperty'));
	}.property('_content'),

	content: null,
	loadContent: function() {
		var that;

		if (this.get('content').then === undefined) {
			// no promise, lets load the data
			this.set('_content', this.get('content'));
			return;
		}

		// if a promise set the content when it resolves
		that = this;
		this.get('content').then( function(c) {
			Em.run(function() {
				that.set('_content', c);
			});
		});
	}.on('init').observes('content'),

	selected: null, // bound to controller

	selectedRecords: function() {
		return this.get('sortedContent').filterBy('selected', true);
	}.property('_content.@each.selected'),

	updateSelections: function() {
		this.set('selected', this.get('selectedRecords'));
	}.observes('_content.@each.selected'),

	actions: {

		addItem: function(record) {
			record.set('selected', !record.get('selected'));
		},

		removeItem: function(record) {
			record.set('selected', !record.get('selected'));
		},

		selectAll: function() {
			var records = this.get('filteredRecords');
			records.forEach(function(r) {
				r.set('selected', true);
			});
		},

		unselectAll: function() {
			var records = this.get('filteredRecords');
			records.forEach(function(r) {
				r.set('selected', false);
			});
		}
	}

});
