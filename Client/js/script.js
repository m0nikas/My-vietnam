function getAlerted(){
	var person1 = {name:'Eldor', age: 28, location: 'San Francisco'};
	var person2 = {name: 'Medina', age: 21, location: 'Las Vegas'};
	var person3 = {name: 'Alex', age: 25, location: 'Los Angeles'};

	var people = [person1,person2,person3];
	for(var i = 0; i < people.length; i++){
		document.getElementById('demo').innerHTML += people[i].name + '<br>';
	}
}