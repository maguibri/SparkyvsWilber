/**
 * SparkyVsWilbur.js
 */
 
"use strict"

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
	alert("In initialize(): Web App Loaded!");
	sparkyResultsTable=document.getElementById('sparkyResultsTableId');
	yearResultsTable  =document.getElementById('yearResultsTableId');
	wilburResultsTable=document.getElementById('wilburResultsTableId');

	console.log(sparkyResultsTable);
}

function clearInputs(form) {
	var formElements = form.elements;
	for (var i=0; i< formElements.length; i++)
		formElements[i].value="";
}

function loadDefaults(form) {
	form.reset();
}

function getNumValue(id) {
	return Number(document.getElementById(id).value);
}

function runComparison(form) {
	if (!form.checkValidity()) {
		alert("See highlighted input boxes, there are input errors");
	} else {
		sparkyAnnualSavings   = getNumValue('sparkyAnnualSavingsId');
		sparkyInterestRate 	  = getNumValue('sparkyInterestRateId');
		sparkyCompoundingYears= getNumValue('sparkyCompoundingYearsId');
		sparkyStartYear 	  = getNumValue('sparkyStartYearId');
		sparkyStopYear 		  = getNumValue('sparkyStopYearId');

		// fill in Wilbur's values
		
		console.log("*** Sparky's input values ***")
		console.log("sparkyAnnualSavings   :", sparkyAnnualSavings);
		console.log("sparkyInterestRate    :", sparkyInterestRate);
		console.log("sparkyCompoundingYears:", sparkyCompoundingYears);
		console.log("sparkyStartYear       :", sparkyStartYear);
		console.log("sparkyStopYear        :", sparkyStopYear);

		console.log("");
		
		console.log("*** Wilbur's input values ***")
		// fill in Wilbur's console.log()

		/* sparky's calculations */

		var invest 			= 0;
		var balance 		= 0;
		var interest 		= 0;

		console.log("****** Sparky's Strategy ******")
		console.log("YR  Saving  Interest    Balance");

		for (var i = 1; i <= sparkyCompoundingYears; i++) {
			if ( i >= sparkyStartYear && i <= sparkyStopYear ) {
				invest = sparkyAnnualSavings;
			}
			else {
				invest = 0;
			}
			balance += invest;
			interest = balance * sparkyInterestRate;
			balance += interest;

			// write debugging info to the console
			console.log(
				leftPadString(i.toString(), ' ', 2)
				+ leftPadString(formatNumberWithCommas(invest),  ' ', 8)
				+ leftPadString(formatNumberWithCommas(interest),' ',10)
				+ leftPadString(formatNumberWithCommas(balance), ' ',11)
			);
		} // end of for loop

	} // end of else
} // end of runComparison()

