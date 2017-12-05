define([
	'dijit/layout/TabContainer',
	'./Tab1',
	'./Tab2',
	'dojo/domReady!'
], function(TabContainer, Tab1, Tab2) {
	return {
		start: function(rootNode) {
			this.createTabContainer(rootNode);
		},

		createTabContainer: function (parentNode) {
			var tabContainer = new TabContainer({
				'classname': 'MyApp'
			});
			tabContainer.placeAt(parentNode);
			tabContainer.startup();

			tabContainer.addChild(new Tab1());
			tabContainer.addChild(new Tab2());
		}
	}
});
