define([
	'./Tab',
	'./customElement!./menu/menu.html',
	'./customElement!./menu-item/menu-item.html'
], function (Tab) {

	return Tab.createSubclass({
		title: 'Programmically',

		buildRendering: function () {
			this.inherited(arguments);

			var menu = document.createElement('demo-menu');
			this.domNode.appendChild(menu);

			var menuItem = document.createElement('demo-menu-item');
			menuItem.title = 'Menu Item A';
			menu.appendChild(menuItem);

			menuItem = document.createElement('demo-menu-item');
			menuItem.title = 'Menu Item B';
			menuItem.selected = true;
			menu.appendChild(menuItem);

			menuItem = document.createElement('demo-menu-item');
			menuItem.title = 'Menu Item C';
			menu.appendChild(menuItem);
		}
	});
});
