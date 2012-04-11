Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'RaxaEmr.Registration',
	controllers: ['Main'],
	views: ['Home', 'Register', 'Search', 'Bmi', 'Viewport', 'PatientConfirm'],
    models: ['Patient'], 

	launch: function() {
		Ext.create('RaxaEmr.Registration.view.Viewport');
	}
});

