
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
  bg[0].setAttribute('style', 'background-color : #95c83d');
  nohoverTxt[0].setAttribute('style', 'color : #007bff !important');
}

//Index Tab//
openTabContent(event, 'Aboutus'); //Display default tab

function openTabContent(evt, linkName) {

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(linkName).style.display = "block";
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if(evt != undefined)
    evt.currentTarget.className += " active";
}

function clearCheckbox(){
  var x = document.getElementsByClassName("chk");
  for (i = 0; i < x.length; i++) {
    x[i].checked = false;
  }
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
            document.getElementById("global-sticky-menu").style.opacity = '100%';

            document.getElementById("btn-learnmore1").className  = 'btn-contrast-on button button-learn-more';      
            document.getElementById("btn-learnmore2").className  = 'btn-contrast-on button button-learn-more';
            document.getElementById("btn-learnmore3").className  = 'btn-contrast-on button button-learn-more';  
            document.getElementById("btn-submit").className  = 'btn-contrast-on button';
            document.getElementById("global-sticky-menu").className  = 'topnav topnav-contrast simple-sticky sticky';
            document.getElementById("green-circle-menu").className  = 'green-circle-menu-contrast green-circle-menu accessibility-sticky sticky';
            document.getElementById("item-svg-slide-1").className  = 'filter-black item-svg';
            document.getElementById("topnav-link").className  = 'topnav-link-contrast topnav-right';
            document.getElementById("item_control-slide-2").className  = 'item_control-slide-2-contrast carousel_item_control-slide-2';
            var y = document.getElementById("Information").className;
            document.getElementById("Information").className  = 'contrast '+y;
            var q = document.getElementById("Aboutus").className;
            document.getElementById("Aboutus").className  = 'aboutus-contrast '+q;
            
                       
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
            document.getElementById("btn-survey-slide2").style.backgroundColor = '#00a79d';
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
            document.getElementById("item_control-slide-2").className  = 'carousel_item_control-slide-2';
            var y = document.getElementById("Information").className;
            document.getElementById("Information").className  = y.replace('contrast','');
            var q = document.getElementById("Aboutus").className;
            document.getElementById("Aboutus").className  = q.replace('aboutus-contrast','');

            contrast = false;
        }      
  }

});

function validateForm() {
  var x = document.forms["regForm"]["password"].value;
  var y = document.forms["regForm"]["repeatpw"].value;
  if (x != y) {
    alert("Password not Match");
    return false;
  }
}
var mobButton = 0;

function showMobileMenu(x){
  x.classList.toggle("fa-thumbs-times");
  if(mobButton == 0){
    var carousel = document.getElementById("carouselExampleCaptions12");
    carousel.setAttribute( 'style', 'display:none');
    document.getElementById("nav-mobile").className  = 'nav-mobile-show';
    document.getElementById("nav-mobile-show-bg").className  = 'nav-mobile-show-bg-click';
    var survey = document.getElementById('nav-left-mobile');
    survey.setAttribute('style','display:none !important');
    var btnlogin = document.getElementById('btn-login');
    btnlogin.setAttribute('style','display:block !important');
    var mobilesurvey = document.getElementById('mobile-survey');
    mobilesurvey.setAttribute('style','display:block !important');
    mobButton = 1;
  }else{
    var carousel = document.getElementById("carouselExampleCaptions12");
    carousel.setAttribute( 'style', 'display:block');
    document.getElementById("nav-mobile").className  ='nav-mobile-show-bg';
    document.getElementById("nav-mobile-show-bg").className  = 'nav-mobile-show-bg';
    var survey = document.getElementById('nav-left-mobile');
    survey.setAttribute('style','display:block !important');
    var btnlogin = document.getElementById('btn-login');
    btnlogin.setAttribute('style','display:none !important');
    var mobilesurvey = document.getElementById('mobile-survey');
    mobilesurvey.setAttribute('style','display:none !important');
    mobButton = 0;
  }
}
