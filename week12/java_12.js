function validateFirstName(name, error){
	
	if(name.length == 0){
		producePrompt("You must enter a first name", error, "red")
	}
	else{
		producePrompt("Valid First Name", error, "black")

	}
}

function validateLastName(name, error){

	if(name.length == 0){
		producePrompt("You must enter a last name", error, "red")
	}
	
	else{
		producePrompt("Valid Last Name ", error, "black")
	}
}

function validateAddress(address, error){
	
	if(address.length == 0){
		producePrompt("You must enter a street address", error, "red")
	}
	
	else{
		producePrompt("Valid Address ", error, "black")
	}
}

function validateCity(city, error){
	
	if(city.length == 0){
		producePrompt("You must enter a city", error, "red")
	}
	
	else{
		producePrompt("Valid City", error, "black")
	}
}

function validateState(state, error){
	if(state.length == 0){
		producePrompt("Enter State Abbreviation", error, "red")
	}
	else if(state.match(/^\s*[A-Z][A-Z]\s*$/)){
		producePrompt("Valid State", error, "black")
	}
	else{
		producePrompt("You must enter a two letter abbreviation", error, "red")
	}
}

function validateZip(zip, error){
	if(zip.length == 0){
		producePrompt("Enter the zip number", error, "red")
	}
	else if(zip.match(/^\s*\d{5}\s*$/)){
		producePrompt("Valid Zip ", error, "black")
	}
	else{
		producePrompt("Please enter a 5 digit zip", error, "red")
	}
}

function validatePhone(phone, error){
	if(phone.length == 0){
		producePrompt("Enter a phone number xxx-xxx-xxxx", error, "red")
	}
	else if(phone.match(/^\s*\d\d\d-\d\d\d-\d\d\d\d\s*$/)){
		producePrompt("Valid Phone ", error, "black")
	}
	else{
		producePrompt("The proper phone number format is xxx-xxx-xxxx", error, "red")
	}
}

function validateCardName(name, error){

	if(name.length == 0){
		producePrompt("You must enter name from the card", error, "red")
	}
	
	else{
		producePrompt("Valid name", error, "black")
	}
}

function validateCardNum(num, error){
	if(num.length == 0){
		producePrompt("You must enter a Credit Card number", error, "red")
	}
	else if(num.match(/^\s*(\d{16}|(\d{4}\s){3}\d{4})\s*$/)){
		producePrompt("Valid Credit Card Number", error, "black")
	}
	else{
		producePrompt("Invalid credit card number you must enter 16 digits with or without spaces", error, "red")
	}
}
function validateCardExp(date, error){

	if(date.length == 0){
		producePrompt("Enter expiration date", error , "red")
	}
	else if(date.match(/^\s*(10|11|12|(0?[1-9|]))\/\d{4}\s*$/)){
		producePrompt("Valid Date", error, "green")
	}
	else{
		producePrompt("Invalid date please input mo/yyyy", error, "red")
	}
}

function calculateTotal(){

	var numWidget1 = document.getElementById('Quantity1');
	var numWidget2 = document.getElementById('Quantity2');
	var numWidget3 = document.getElementById('Quantity3');
	var numWidget4 = document.getElementById('Quantity4');

	var subTotal = (Quantity1.value * 12)+(Quantity2.value * 48)+(Quantity3.value * 25)+(Quantity4.value * 95);

	var subt = subTotal.toFixed(2);
	producePrompt(subt, 'subtotal', "black")

	var tax = subt * .075;
	var taxF = tax.toFixed(2);
	
	producePrompt(taxF, 'tax', "black");

	var sum = tax + subTotal;
	var sumF = sum.toFixed(2);
	
		producePrompt(sumF, 'total', "black");

}

function producePrompt(message, promptLocation, color){
	document.getElementById(promptLocation).innerHTML = message;
	document.getElementById(promptLocation).style.color = color;
}

function clearForm(){
	document.buyWidget.reset();
}

function submitOrder(){
	alert("Your order has been submitted");


}