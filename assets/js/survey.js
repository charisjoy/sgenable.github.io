//Survey Tab//
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n){
    //Check if argument is not pass
    if(n === undefined){
      n = currentTab + 1;
      currentTab++;
    }else{
      currentTab = n;
    }
      
    // This function will display the specified tab of the form...
    var y = document.getElementsByClassName("tab");
    for (i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }

    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";

    //... and fix the Previous/Next buttons:
    /*
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    */
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}
function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  var y = document.getElementsByClassName("nav-cat");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
    y[i].className = y[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
  y[n].className += " active";
}