
// Problem 1 display Hello World in the Console
function problem1(){
   
   var message = "Hello World"
   console.log(message)
}


//Problem 2 Form letter 
function problem2(form2, text){
    
    var formLetter = text.replace(/RICH_GUY/g, form2)
	console.log(formLetter)
}

//Problem 3 Temperature Conversion
function problem3(fahrenheit){

	var celsius = (fahrenheit - 32) * 5/9
	var n = celsius.toFixed(2) 
	console.log(n)
}

//Problem 4 postage
function problem4(weight){
	if (weight==1 ) {
		console.log("$0.98")
	} 
	else if (weight > 1 && weight <= 2) {
		console.log("$1.19")
	} 
	else if (weight > 2 && weight <= 3) {
		console.log("$1.40")
	} 
	else if (weight > 3 &&weight <= 4) {
		console.log("$1.61")
	}
	else if (weight > 4 &&weight <= 5) {
		console.log("$1.82")
	}  
	else{
		console.log("Invalid Number")
	}
}
//Problem 4 postage
function problem5(apr, term, amount){
	var total = amount
	updatedApr = (apr/100) + 1;

	for (i = 0; i < term; i++){

		total = updatedApr * total
	} 
	var n = total.toFixed(2)
	console.log(n)
	
}


