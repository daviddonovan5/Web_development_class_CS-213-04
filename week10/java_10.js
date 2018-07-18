var listSpot = document.getElementById('list')
var btn =document.getElementById('btn')

function showDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) { 
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function test(file) {
  if(file != ''){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', file, true)
    ourRequest.onreadystatechange = function () {
      if(ourRequest.readyState === XMLHttpRequest.DONE && ourRequest.status === 200) {
        var cities = ourRequest.responseText
        addList(cities)
      }
    }
    ourRequest.send();
  }
}
function addList(cities){
  var cityList =''
  for(i = 0; i < cities.length; i++) {
    if(isNaN(cities[i])== false && cities[i+1] !=',' && isNaN(cities[i+1])==true && cities[i]!=' '){
      cityList += cities[i] + '</br>'
    }
    else{
      cityList += cities[i] 
    }
  }
  document.getElementById("displayCities").innerHTML = cityList 
}




