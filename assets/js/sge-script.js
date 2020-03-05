
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

function openTabContent(evt, linkName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(linkName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function(event) {  
  var txtSize = 16;
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
          txtSize = 14;
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
        txtSize = 16; 
             
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
          txtSize = 18;
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
            var h2 = document.getElementById("body-content").querySelectorAll("h2");  
            for (i = 0; i < h2.length; i++) {        
              h2[i].setAttribute( 'style', 'color : #95c83d' );
            }

            //Button Contrast//
            document.getElementById("btn-login").style.backgroundColor = '#ffffff';
            document.getElementById("btn-login").style.color = 'rgb(10,10,10,1)';
            document.getElementById("btn-survey-slide1").style.backgroundColor = '#ffffff';
            document.getElementById("btn-survey-slide1").style.color = 'rgb(10,10,10,1)';
            document.getElementById("btn-survey-slide2").style.backgroundColor = '#ffffff';
            document.getElementById("btn-survey-slide2").style.color = 'rgb(10,10,10,1)';
            document.getElementById("footer").style.backgroundColor = 'rgb(10,10,10,1)';
            document.getElementById("footer-copyright").style.backgroundColor = 'rgb(10,10,10,1)';
            document.getElementById("global-sticky-menu").style.backgroundColor = 'rgb(10,10,10,1)';
            document.getElementById("item_control-slide-2").style.backgroundColor = 'rgb(10,10,10,1)';
            document.getElementById("global-sticky-menu").style.opacity = '100%';

            document.getElementById("btn-learnmore1").className  = 'btn-contrast-on button button-learn-more';      
            document.getElementById("btn-learnmore2").className  = 'btn-contrast-on button button-learn-more';
            document.getElementById("btn-learnmore3").className  = 'btn-contrast-on button button-learn-more';  
            document.getElementById("btn-submit").className  = 'btn-contrast-on button';
            document.getElementById("global-sticky-menu").className  = 'topnav topnav-contrast simple-sticky sticky';
            document.getElementById("green-circle-menu").className  = 'green-circle-menu-contrast green-circle-menu accessibility-sticky sticky';
            document.getElementById("item-svg-slide-1").className  = 'filter-black item-svg';
            document.getElementById("topnav-link").className  = 'topnav-link-contrast topnav-right';
                       
            contrast = true;
        }else{
            document.getElementById("body-content").style.backgroundColor = "#ffffff";   
            document.getElementById("body-content").style.color = "rgb(10,10,10,1)";
            var h2 = document.getElementById("body-content").querySelectorAll("h2");  
            for (i = 0; i < h2.length; i++) {        
              h2[i].setAttribute( 'style', 'color : rgb(10,10,10,1)' );
            }
            //Button Contrast//
            document.getElementById("btn-login").style.backgroundColor = '#033d80';
            document.getElementById("btn-login").style.color = '#ffffff';
            document.getElementById("btn-survey-slide1").style.backgroundColor = '#00a79d';
            document.getElementById("btn-survey-slide1").style.color = 'rgb(10,10,10,1)';
            document.getElementById("btn-survey-slide2").style.backgroundColor = '#ffffff';
            document.getElementById("btn-survey-slide2").style.color = 'rgb(10,10,10,1)';
            document.getElementById("footer").style.backgroundColor = '#0066cc';
            document.getElementById("footer-copyright").style.backgroundColor = '#0066cc';
            document.getElementById("global-sticky-menu").style.backgroundColor = '#e5eef5';
            document.getElementById("global-sticky-menu").style.opacity = '80%';

            document.getElementById("btn-learnmore1").className  = 'btn-contrast-off button button-learn-more';      
            document.getElementById("btn-learnmore2").className  = 'btn-contrast-off button button-learn-more';
            document.getElementById("btn-learnmore3").className  = 'btn-contrast-off button button-learn-more';  
            document.getElementById("btn-submit").className  = 'btn-contrast-off btn-contrast-on button';
            document.getElementById("global-sticky-menu").className  = 'topnav simple-sticky sticky';
            document.getElementById("green-circle-menu").className  = 'green-circle-menu accessibility-sticky sticky';
            document.getElementById("item-svg-slide-1").className  = 'item-svg';
            document.getElementById("topnav-link").className  = 'topnav-right';

            contrast = false;
        }      
  }

});