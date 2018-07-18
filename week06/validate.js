
function validateAge(age, ageId){
	

	if(age.length == 0){
		producePrompt("Enter age ", ageId, "red")
	}
	else if(age >= 0 && age<=118){
		producePrompt("Valid Age", ageId, "green")
	}
	else{
		producePrompt("Invalid Age", ageId, "red")
	}
}

function validateSsn(ssn, ssnId){
	if(ssn.length == 0){
		producePrompt("Enter SSN", ssnId, "red")
	}
	else if(ssn.match(/^\s*\d{3}-\d{2}-\d{4}\s*$/)){
		producePrompt("Valid SSN", ssnId, "green")
	}
	else{
		producePrompt("Invalid SSN", ssnId, "red")
	}
}

function validateCredit(ccn, ccnId){
	if(ccn.length == 0){
		producePrompt(" Enter Credit Card", ccnId, "red")
	}
	else if(ccn.match(/^\s*(\d{16}|(\d{4}\s){3}\d{4})\s*$/)){
		producePrompt("Valid Credit Card Number", ccnId, "green")
	}
	else{
		producePrompt("Invalid Credit Card Number", ccnId, "red")
	}
}

function validateDate(date, dateId){
	if(date.length == 0){
		producePrompt("Enter Date", dateId, "red")
	}
	else if(date.match(/^\s*(10|11|12|(0?[1-9|]))\/([1-2]\d|[3][0-1]|(0?[1-9]))\/\d{4}\s*$/)){
		producePrompt("Valid date", dateId, "green")
	}
	else{
		producePrompt("Invalid date", dateId, "red")
	}
}

function validateState(state, stateId){
	if(state.length == 0){
		producePrompt("Enter State abbreviation", stateId, "red")
	}
	else if(state.match(/^\s*[A-Z][A-Z]\s*$/)){
		producePrompt("Valid state abbreviation", stateId, "green")
	}
	else{
		producePrompt("Invalid state abbreviation", stateId, "red")
	}
}

function validateMoney(money, moneyId){
	if(money.match(/^\s*\$?(\d*|\d{1,3}(\,\d{3})*)(\.?\d{2})?\s*$/)){
		producePrompt("Valid money amount", moneyId, "green")
		if (money.length==0||money=='$'){
			producePrompt("Enter a money amount", moneyId, "red")
		}
	}
	else{
		producePrompt("Invalid money amount", moneyId, "red")
	}
}


function producePrompt(message, promptLocation, color){
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}