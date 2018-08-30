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
	console.log(wilburResultsTable);
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
		wilburAnnualSavings = getNumValue('wilburAnnualSavingsId');
		wilburInterestRate = getNumValue('wilburInterestRateId');
		wilburCompoundingYears = getNumValue('wilburCompoundingYearsId');
		wilburStartYear = getNumValue('wilburStartYearId');
		wilburStopYear = getNumValue('wilburStopYear');

		





		console.log("YR  Saving  Interest    Balance");

	




		
		console.log("*** Sparky's input values ***");
		console.log("sparkyAnnualSavings   :", sparkyAnnualSavings);
		console.log("sparkyInterestRate    :", sparkyInterestRate);
		console.log("sparkyCompoundingYears:", sparkyCompoundingYears);
		console.log("sparkyStartYear       :", sparkyStartYear);
		console.log("sparkyStopYear        :", sparkyStopYear);

		console.log("");
		
		console.log("*** Wilbur's input values ***")
		// fill in Wilbur's console.log()
		console.log("wilburAnnualSavings   :", wilburAnnualSavings);
		console.log("wilburInterestRate   :", wilburInterestRate);
		console.log("wilburCompoundingYears:", wilburCompoundingYears);
		console.log("wilburStartYear   :", wilburStartYear);
		console.log("wilburStopYear   :", wilburStopYear);

		var invest1 			= 0;
		var balance1 		= 0;
		var interest1 		= 0;
		var tableRowNumber1 	= 1; // start after the heading, row 0

		clearResultsTable(wilburResultsTable);

		console.log("****** Sparky's Strategy ******")
		console.log("YR  Saving  Interest    Balance");

		for (var i = 1; i <= wilburCompoundingYears; i++) {
			if ( i >= wilburStartYear && i <= wilburStopYear ) {
				invest = wilburAnnualSavings;
			}
			else {
				invest = 0;
			}
			balance1 += invest1;
			interest1 = balance1 * wilburInterestRate;
			balance1 += interest1;

			// write debugging info to the console
			console.log(
				leftPadString(i.toString(), ' ', 2)
				+ leftPadString(formatNumberWithCommas(invest1),  ' ', 8)
				+ leftPadString(formatNumberWithCommas(interest1),' ',10)
				+ leftPadString(formatNumberWithCommas(balance1), ' ',11)
			);

			// modify the DOM and add rows to Sparky's Results table
			var row = wilburResultsTable.insertRow(tableRowNumber1);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);

			cell0.innerHTML = formatNumberWithCommas(invest1);
			cell1.innerHTML = formatNumberWithCommas(interest1);
			cell2.innerHTML = formatNumberWithCommas(balance1);

			tableRowNumber1++;


		/* sparky's calculations */

		var invest 			= 0;
		var balance 		= 0;
		var interest 		= 0;
		var tableRowNumber 	= 1; // start after the heading, row 0

		clearResultsTable(sparkyResultsTable);

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

			// modify the DOM and add rows to Sparky's Results table
			var row = sparkyResultsTable.insertRow(tableRowNumber);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);

			cell0.innerHTML = formatNumberWithCommas(invest);
			cell1.innerHTML = formatNumberWithCommas(interest);
			cell2.innerHTML = formatNumberWithCommas(balance);

			tableRowNumber++;
		} // end of for loop

		/* year table calculation */

		clearResultsTable(yearResultsTable);

		var yearMax = Math.max( sparkyCompoundingYears, 
								wilburCompoundingYears);

		for (var i = 1; i <= yearMax; i++) {
			var row = yearResultsTable.insertRow(i);
			var cell0 = row.insertCell(0);
			cell0.innerHTML = i;
		}

		/* Wilburs calculations */

	} // end of else
} // end of runComparison()


/*  function clearResultsTable(table)
 *  given a table, remove all rows except the heading
 *  table.rows returns a list of the rows.
 *  table.rows.length returns the number of rows
 *  If a table has 9 rows, row(0) is the header, row(8) is last
 *  deleteRow(index) from the last to all but the (0)
 */
function clearResultsTable(table) {

	for (var i = table.rows.length; i > 1; i--) {
		table.deleteRow(i-1);
	}
}