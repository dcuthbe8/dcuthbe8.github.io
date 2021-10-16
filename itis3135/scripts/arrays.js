let person = ["Samantha","Donjrey","Jack","Tommy"];
let salaries = [30000, 26000,45000,100000];

var $ = function(id) { return document.getElementById(id); };

function addSalary() {
	let persons = $("name").value;
	
	let salaries = $("salaries").value;
	
	persons.push(person);
	salaries.push(salary);
}
function displayResults() {
	average = 0.0;
	highest = 0;
	
	for(let i = 0;i < salaries.length;i++) {
		average += parseFloat(salaries[i]);
		if(salaries[highest]<scores[i])
			highest = i;
	}
	average = average/salaries.length;
	$("results").innerHTML = "Average Salary =" + average;
	<br>
	$("results").innerHTML = "Highest Salary =" + persons[highest] + "with a salary of" + salaries[highest];

}

function displaySalary() {
	
}
function displayEmployees() {
	  var str = "<table>";

str += "<tr align='left'><th>Name</th><th>Salaries</th></tr>";

for (var i = 0; i < salaries.length; i++) {

str += "<tr><td>" + persons[i] + "</td><td>" + salaries[i] + "</td></tr>";

}

str += "</table>";

$("scores_table").innerHTML = str;

}

window.onload = function() {

$("add").onclick = addSalary();

$("display_results").onclick = displayResults;

$("display_salaries").onclick = displaySalary;
}
function ValidateData () {
	
 

}
