var patientStore;

Ext.define('RaxaEmr.Registration.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			// gives getCreatePatientForm()
			createPatientForm: '#createPatientForm',
			// gives getSearchPatientsForm()
            searchPatientsForm: '#searchPatientsForm',
			confirmPatientForm: '#confirmPatientForm'
		}
	},

	init: function() {
		console.log('Main controller init');
		this.initializePatientStore();
		this.printPatientStore();

		this.control({
			'button[action=createPatient]': {
				tap: 'createPatient'
			},
			'button[action=searchPatients]': {
				tap: 'searchPatients'
			},
			'button[action=confirmPatient]': {
				tap: 'confirmPatient'
			},
			'button[handler=backtoEdit]': {
				tap: 'backtoEdit'
			}
		});
	},

	initializePatientStore: function() {
		console.log('initializePatientStore');
		//our Store automatically picks up the LocalStorageProxy defined on the
		//Patient model
		patientStore = Ext.create('Ext.data.Store', {
			model: "RaxaEmr.Registration.model.Patient"
		});
	},

	addPatientToStore: function() {
		console.log("add patient to patientStore");

		var form = this.getCreatePatientForm();
		var values = form.getValues();

		console.log("form values:");
		console.log(values);
		patientStore.add(values);
		patientStore.sync();

		console.log("patient object:");
		console.log(patientStore.last());
	},

	printPatientStore: function() {
		patientStore.load();
		console.log("# of records in PatientStore = " + patientStore.getCount());
	},

	// TODO: Remove this. Just a test to validate that Jasmine hooks are working
	testFunction: function() {
		return true;
	},

	/*
     * Takes input from Registration Form and creates a patient in LocalStorage
     */
	createPatient: function() {
        console.log("createPatient");
		var viewer = Ext.getCmp('viewer');
		var results = Ext.getCmp('viewer').getComponent(1);
		Ext.ComponentMgr.get('firstname').setValue(Ext.ComponentMgr.get('firstnamec').getValue());
		Ext.ComponentMgr.get('lastname').setValue(Ext.ComponentMgr.get('lastnamec').getValue());
		Ext.ComponentMgr.get('guardianfirstname').setValue(Ext.ComponentMgr.get('guardianfirstnamec').getValue());
		Ext.ComponentMgr.get('guardianlastname').setValue(Ext.ComponentMgr.get('guardianlastnamec').getValue());
		Ext.ComponentMgr.get('gender').setValue(Ext.ComponentMgr.get('genderc').getValue());
		Ext.ComponentMgr.get('education').setValue(Ext.ComponentMgr.get('educationc').getValue());
		Ext.ComponentMgr.get('dob').setValue(Ext.ComponentMgr.get('dobc').getValue());
		Ext.ComponentMgr.get('caste').setValue(Ext.ComponentMgr.get('castec').getValue());
		Ext.ComponentMgr.get('block').setValue(Ext.ComponentMgr.get('blockc').getValue());
		Ext.ComponentMgr.get('street').setValue(Ext.ComponentMgr.get('streetc').getValue());
		Ext.ComponentMgr.get('town').setValue(Ext.ComponentMgr.get('townc').getValue());
		Ext.ComponentMgr.get('postoffice').setValue(Ext.ComponentMgr.get('postofficec').getValue());
		Ext.ComponentMgr.get('tehsil').setValue(Ext.ComponentMgr.get('tehsilc').getValue());
		Ext.ComponentMgr.get('district').setValue(Ext.ComponentMgr.get('districtc').getValue());
		Ext.ComponentMgr.get('contactviaphone').setValue(Ext.ComponentMgr.get('contactviaphonec').getValue());
		Ext.ComponentMgr.get('primaryphone').setValue(Ext.ComponentMgr.get('primaryphonec').getValue());
		Ext.ComponentMgr.get('secondaryphone').setValue(Ext.ComponentMgr.get('secondaryphonec').getValue());
		Ext.ComponentMgr.get('secondaryphone').setValue(Ext.ComponentMgr.get('secondaryphonec').getValue());
		viewer.animateActiveItem(results,{type:'slide',direction:'left'});
	},
	
	confirmPatient: function() {
		console.log('confirmPatient');
		this.addPatientToStore();
		var viewer = Ext.getCmp('viewer');
		var target = viewer.getComponent(0);
		Ext.ComponentMgr.get('firstnamec').setValue('');
		Ext.ComponentMgr.get('lastnamec').setValue('');
		Ext.ComponentMgr.get('guardianfirstnamec').setValue('');
		Ext.ComponentMgr.get('guardianlastnamec').setValue('');
		Ext.ComponentMgr.get('genderc').setValue('');
		Ext.ComponentMgr.get('educationc').setValue('');
		Ext.ComponentMgr.get('dobc').setValue('');
		Ext.ComponentMgr.get('castec').setValue('');
		Ext.ComponentMgr.get('blockc').setValue('');
		Ext.ComponentMgr.get('streetc').setValue('');
		Ext.ComponentMgr.get('townc').setValue('');
		Ext.ComponentMgr.get('postofficec').setValue('');
		Ext.ComponentMgr.get('tehsilc').setValue('');
		Ext.ComponentMgr.get('districtc').setValue('');
		Ext.ComponentMgr.get('contactviaphonec').setValue('');
		Ext.ComponentMgr.get('primaryphonec').setValue('');
		Ext.ComponentMgr.get('secondaryphonec').setValue('');
		Ext.ComponentMgr.get('secondaryphonec').setValue('');
		viewer.animateActiveItem(target,{type:'slide',direction:'left'});
	},
	
	backtoEdit: function() {
		console.log('back pressed');
		var viewer = Ext.getCmp('viewer');
		var target = viewer.getComponent(0);
		viewer.animateActiveItem(target,{type:'slide',direction:'right'});
	},

    /*
     * Takes input from Search Form and returns one exact match
     * TODO: Make search a lot more flexible, to return multiple matches,
     * and imperfect matches
     */
	searchPatients: function() {
		console.log("searchPatients");
		// TODO: patient store must be initialize
		var form = this.getSearchPatientsForm();
		var values = form.getValues();
        console.log(values);
        console.log('First name: ' + values.firstName);
        var query = values.firstName;
        /*var rec = patientStore.findRecord('firstName', query);*/
		var rec = patientStore.findRecord('firstName', query);
        console.log(rec);
        wasPatientFound = (rec === null) ? "No patient found" : "Patient found";
        alert("Searching for patient with first name = '" + query + "'..." +  wasPatientFound);
	}
});

