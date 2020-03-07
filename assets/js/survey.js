
function gcmControl(){
    var x = document.getElementById("green-circle-menu");
    if (x.style.right == "-16rem") {
      x.style.right = "-9rem";
      document.querySelector('.right').style.transform  = "rotate(-45deg)";
    } else {
      x.style.right = "-16rem";
      document.querySelector('.right').style.transform  = "rotate(135deg)";
    }
    
  }

 
function hoverIn(){
  var bg = document.getElementsByClassName("link-background");
  var nohoverTxt = document.getElementsByClassName("no-hover");
  bg[0].setAttribute('style', 'background-color : #033d80 !important');
  nohoverTxt[0].setAttribute('style', 'color : #ffffff !important');
}
function hoverOut(){
  var bg = document.getElementsByClassName("link-background");
  var nohoverTxt = document.getElementsByClassName("no-hover");
  bg[0].setAttribute('style', 'background-color : #95c83d !important');
  nohoverTxt[0].setAttribute('style', 'color : #007bff !important');
}
 
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

document.addEventListener("DOMContentLoaded", function(event) {  
    var txtSize = 20;
    var contrast = false;
    document.querySelector('.accessibility-small').addEventListener("click",smallText);
        // addEventListener(event, function, useCapture)
        function smallText(){
            if(txtSize == 8)
                return;
            var x = document.getElementById("bc").querySelectorAll("p"); 
            var i;
            if(x[0].style.fontSize == ""){
            for (i = 0; i < x.length; i++) {        
                x[i].setAttribute( 'style', 'font-size: 14px !important' );
            } 
            txtSize = 18;
            }else{  
            txtSize = txtSize - 2;          
            for (i = 0; i < x.length; i++) {        
                x[i].setAttribute( 'style', 'font-size : '+ txtSize +'px !important' );
            } 
            }
                
    }
    document.querySelector('.accessibility-normal').addEventListener("click",normalText);
        // addEventListener(event, function, useCapture)
        function normalText(){
            var x = document.getElementById("bc").querySelectorAll("p"); 
            var i;
            for (i = 0; i < x.length; i++) {        
            x[i].setAttribute( 'style', 'font-size: 16px !important' );
            }
            txtSize = 20; 
                
    }
    document.querySelector('.accessibility-large').addEventListener("click",largeText);
        // addEventListener(event, function, useCapture)
        function largeText(){
            if(txtSize == 32)
                return;
            var x = document.getElementById("bc").querySelectorAll("p"); 
            var i;
            if(x[0].style.fontSize == ""){
            for (i = 0; i < x.length; i++) {        
                x[i].setAttribute( 'style', 'font-size: 18px !important' );
            } 
            txtSize = 22;
            }else{  
            txtSize = txtSize + 2;          
            for (i = 0; i < x.length; i++) {        
                x[i].setAttribute( 'style', 'font-size : '+ txtSize +'px !important' );
            } 
            }
                
    }
    document.querySelector('.accessibility-contrast').addEventListener("click",toogleContrast);
        
        // addEventListener(event, function, useCapture)
        function toogleContrast(){
            if(!contrast){

                document.getElementById("body-content").style.backgroundColor = "rgb(10,10,10,1)";   
                document.getElementById("body-content").style.color = "#ffffff";

                var h2 = document.getElementById("body-content").querySelectorAll("h1,h2,h3,h4,h5,h6");  
                for (i = 0; i < h2.length; i++) {        
                h2[i].setAttribute( 'style', 'color : #95c83d' );
                }

                //Button Contrast//
                document.getElementById("btn-login").style.backgroundColor = '#ffffff';
                document.getElementById("btn-login").style.color = 'rgb(10,10,10,1)';
                document.getElementById("footer").style.backgroundColor = 'rgb(10,10,10,1)';
                document.getElementById("footer-copyright").style.backgroundColor = 'rgb(10,10,10,1)';
                document.getElementById("global-sticky-menu").style.backgroundColor = 'rgb(10,10,10,1)';          
                document.getElementById("global-sticky-menu").style.opacity = '100%';
  
                document.getElementById("btn-submit").className  = 'btn-contrast-on button';
                document.getElementById("global-sticky-menu").className  = 'topnav topnav-contrast simple-sticky sticky';
                document.getElementById("green-circle-menu").className  = 'green-circle-menu-contrast green-circle-menu accessibility-sticky sticky';               
                document.getElementById("topnav-link").className  = 'topnav-link-contrast topnav-right';                 
                                   
                contrast = true;
            }else{
                document.getElementById("body-content").style.backgroundColor = "#ffffff";   
                document.getElementById("body-content").style.color = "rgb(10,10,10,1)";

                var h2 = document.getElementById("body-content").querySelectorAll("h1,h2,h3,h4,h5,h6");  
                for (i = 0; i < h2.length; i++) {        
                h2[i].setAttribute( 'style', 'color : rgb(10,10,10,1)' );
                }

                //Button Contrast//
                document.getElementById("btn-login").style.backgroundColor = '#033d80';
                document.getElementById("btn-login").style.color = '#ffffff';     
                document.getElementById("footer").style.backgroundColor = '#0066cc';
                document.getElementById("footer-copyright").style.backgroundColor = '#0066cc';
                document.getElementById("global-sticky-menu").style.backgroundColor = '#e5eef5';
                document.getElementById("global-sticky-menu").style.opacity = '80%';
           
                document.getElementById("btn-submit").className  = 'btn-contrast-off btn-contrast-on button';
                document.getElementById("global-sticky-menu").className  = 'topnav simple-sticky sticky';
                document.getElementById("green-circle-menu").className  = 'green-circle-menu accessibility-sticky sticky';
                document.getElementById("topnav-link").className  = 'topnav-right';             

                contrast = false;
            }      
    }

});    