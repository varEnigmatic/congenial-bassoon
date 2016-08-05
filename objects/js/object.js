var person = {
  name : 'Moses',
  country : 'US',
  age: 34,
  techStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS', 'UX', 'UCD']
};

for (prop in person) {
//this code will run
	console.log(prop, ': ', person[prop]);
}