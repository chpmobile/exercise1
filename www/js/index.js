
//when the page is created
$(document).on("pagecreate","#pageone", function () {
 
 	//bind the view and model together
	var personView1 = new PersonView({model: person1});
	
	//how will you display additional people?
	
 
});

//setup data model
Person = Backbone.Model.extend({
	name: null,
	gender: null,
	dob: null
});



//create a view
var PersonView = Backbone.View.extend({
	
	el: '#people',  //the DOM element to which this view will be bound
	
	initialize: function() {		//code is run when view is created
		this.render();
	},

	render: function() {		//defines how to display the model
	
		//this is a very crude way to display a persons details. Can you improve it?
		this.$el.append("<li>" + this.model.get("name") + "");
		this.$el.append("<li>" + this.model.get("gender") + "</li>");
		this.$el.append("<li>" + this.model.get("dob") + "</li>");
	
	}

});



//create some people using the model
var person1 = new Person({name: 'John Smith', gender: 'm', dob: '12/05/1981'});
var person2 //... create some more
var person3


