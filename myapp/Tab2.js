define([
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'./Tab',
	'dojo/text!./templates/Tab2.html',
	'./customElement!./menu/menu.html',
	'./customElement!./menu-item/menu-item.html'
], function(_TemplatedMixin, _WidgetsInTemplateMixin, Tab, template) {
	return Tab.createSubclass([ _TemplatedMixin, _WidgetsInTemplateMixin ], {
		title: 'Declaratively',

		templateString: template
	});
});
