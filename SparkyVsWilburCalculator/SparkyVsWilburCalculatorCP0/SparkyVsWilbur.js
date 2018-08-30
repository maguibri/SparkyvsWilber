/**
 * SparkyVsWilbur.js
 */
 
"use strict;"

var sparkyAnnualSavings 	= 0;
var sparkyInterestRate 		= 0;
var sparkyCompoundingYears 	= 0;
var sparkyStartYear 		= 0;
var sparkyStopYear 			= 0;

var wilburAnnualSavings 	= 0;
var wilburInterestRate 		= 0;
var wilburCompoundingYears 	= 0;
var wilburStartYear 		= 0;
var wilburStopYear 			= 0;

var sparkyResultsTable;
var yearResultsTable;  
var wilburResultsTable;

function initialize() {
	//alert("In initialize(): Web App Loaded!");
	sparkyResultsTable = document.getElementById('sparkyResultsTableId');
	yearResultsTable = document.getElementById('yearResultsTableId');
	wilburResultsTable = document.getElementById('wilburResultsTableId');

	console.log(sparkyResultsTable);
}

function clearInputs(form) {
	alert("function clearInputs() is running");
	var formElements = form.elements;
	for(var i = 0; i < formElements.length; i++)
	{
		formElements[i].value = "";
	}
}

function loadDefaults(form) {
	//alert("function loadDefaults() is running");
	//console.log(form);

	form.reset();
}

function runComparison(form) {
	console.log(form);

	if(!form.checkValidity())
	{
		alert("See highlighted boxes, there are input errors");
	}
	else
	{
			//alert("function runComparison() is running");
			sparkyAnnualSavings = document.getElementById('sparkyAnnualSavingsId');
			console.log("sparkyAnnualSavings   :", sparkyAnnualSavings);
			console.log("sparkyAnnualSavings   :", getNumValue('sparkyAnnualSavingsId'))
			console.log("sparkyInterestRate    :", getNumValue('sparkyInterestRateId'));


	}
}

function getNumValue (id)
{
	return Number(document.getElementById(id).value);
}

















