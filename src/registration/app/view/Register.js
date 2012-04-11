Ext.define('RaxaEmr.Registration.view.Register', {
	extend: 'Ext.form.Panel',
	xtype: 'registerpage',
	id: 'createPatientForm',
	

	config: {
		title: 'Registration',
		iconCls: 'star',
		scroll: 'vertical',
		pinHeaders: true,
		layout:{
			type: 'vbox',
			align:'middle',
		},
		

		items: [{
			xtype: 'fieldset',
			title: 'Patient Registration',
			align: 'center',
			items: [{
				xtype: 'textfield',
				label: 'First Name',
				name: 'firstName',
				id: 'firstnamec',
				required: true
			},
			{
				xtype: 'textfield',
				label: 'Last Name',
				name: 'lastName',
				id: 'lastnamec',
				required: true
			},
			{
				xtype: 'textfield',
				label: 'Father/Husband First Name',
				name: 'guardianFirstName',
				id: 'guardianfirstnamec',
				required: true
			},
			{
				xtype: 'textfield',
				label: 'Father/Husband Last Name:',
				name: 'guardianLastName',
				id: 'guardianlastnamec',
				required: true,
				clearIcon: true
			},
			{
				xtype: 'selectfield',
				label: 'Sex',
				name: 'gender',
				id: 'genderc',
				options: [{
					text: 'Male',
					value: 'male'
				},
				{
					text: 'Female',
					value: 'female'
				},
				{
					text: 'Other',
					value: 'other'
				}]
			},
			{
				xtype: 'selectfield',
				label: 'Education',
				name: 'education',
				id: 'educationc',
				options: [{
					text: 'Not educated',
					value: 'notEducated'
				},
				{
					text: '5th Pass or less',
					value: 'lessThanOrEqualTo5'
				},
				{
					text: '6th - 9th Standard',
					value: '6To9'
				},
				{
					text: '10th Standard and above',
					value: '10AndAbove'
				},
				{
					text: 'Graduate and above',
					value: 'graduate'
				}]
			},
			{
				xtype: 'datepickerfield',
				label: 'Date of Birth:',
				name: 'dateOfBirth',
				id: 'dobc',
				value: new Date(),
				picker: {
					yearFrom: 1930
				},
				clearIcon: true
			},
			{
				xtype: 'selectfield',
				name: 'caste',
				label: 'Caste',
				placeHolder: 'Select Caste',
				id: 'castec',
				displayField: 'desc',
				options: [{
					desc: 'First',
					value: 'first'
				},
				{
					desc: 'Second',
					value: 'second'
				},
				{
					desc: 'Third',
					value: 'third'
				},
				{
					desc: 'Fourth',
					value: 'fourth'
				},
				{
					desc: 'Fifth',
					value: 'fifth'
				}]
			},
			{
				xtype: 'textfield',
				label: 'Block/House/Door #',
				name: 'block#',
				id: 'blockc',
				required: true
			},
			{
				xtype: 'textfield',
				label: 'Street/Area/Locality/Mohalla/Road',
				name: 'street',
				id: 'streetc',
				required: true
			},
			{
				xtype: 'textfield',
				label: 'Town/Village/City',
				name: 'town',
				id: 'townc',
				required: true
			},
			{
				xtype: 'textfield',
				label: 'Post Office',
				name: 'postOffice',
				id: 'postofficec',
				required: false
			},
			{
				xtype: 'textfield',
				label: 'Tehsil/Taluka/Mandal/Thana',
				name: 'tehsil',
				id: 'tehsilc',
				required: false
			},
			{
				xtype: 'textfield',
				label: 'District',
				name: 'district',
				id: 'districtc',
				required: false
			},
			{
				xtype: 'selectfield',
				label: 'Contact me via phone',
				name: 'contactViaPhone',
				id: 'contactviaphonec',
				options: [{
					text: 'Yes',
					value: 'yes'
				},
				{
					text: 'No',
					value: 'no'
				}]
			},
			{
				xtype: 'textfield',
				label: 'Primary Phone',
				name: 'primaryPhone',
				id: 'primaryphonec'
			},
			{
				xtype: 'textfield',
				label: 'Secondary Phone',
				name: 'secondaryPhone',
				id: 'secondaryphonec'
			},
			{
				xtype: 'button',
				text: 'Create Patient',
				action: 'createPatient'
				
			}]
		}]
	}
});

