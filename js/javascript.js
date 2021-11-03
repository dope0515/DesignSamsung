/*새로고침시 항상 페이지에서 시작*/
window.onbeforeunload = function() {window.scrollTo(0,0);}

/*언어선택 토글 메뉴*/
var arrowState = 0;
function langContainerToggle() {
    if(arrowState == 0) {
    document.getElementsByClassName("s_header")[0].style = "height:130px;";
    document.getElementsByClassName("arrow_icon")[0].style = "transform:rotate(180deg)";
    document.getElementsByClassName("selcet_lang_container")[0].style = "top:54%";
    arrowState = 1;
    }

    else if(arrowState == 1) {
    document.getElementsByClassName("s_header")[0].style = "height:60px;"
    document.getElementsByClassName("arrow_icon")[0].style = "transform:rotate(0deg)";
    document.getElementsByClassName("selcet_lang_container")[0].style = "top:20%";
    arrowState = 0;
    }
}

/*모바일 토글 메뉴*/
var menuState = 0;
function mobileMenuOpen(){
    document.getElementById("mobile_menu").style = "top:0";
    document.getElementById("body").style = "height:100vh;overflow:hidden;";
    document.getElementsByClassName("search_lang")[0].style = "top:-100%";
    document.getElementById("x_btn").style = " padding:2.3vw;"
    }
        
function mobileMenuClose(){
    document.getElementById("mobile_menu").style = "top:-140vh;";
    document.getElementById("body").style = "height:auto;overflow:auto;";
    document.getElementsByClassName("search_lang")[0].style = "top:40%; transition-delay: 0.2s;";
    document.getElementById("x_btn").style = " padding:0vw;"
    }
    
function scrollFadeIn() {
    var bodyScrollTop = document.body.scrollTop;
    var firstGridOffsetTop = document.getElementById("grid_container").offsetTop;    
    if(bodyScrollTop >= firstGridOffsetTop) {
        for(i=0;i<3;i++) 
        {document.getElementsByClassName("img_size")[i].style = "width:100%";}
    }
    }
    

   var userAgentStr = navigator.userAgent.toLowerCase();

   if(userAgentStr.indexOf('iphone') > -1 || userAgentStr.indexOf('ipad') > -1 || userAgentStr.indexOf('ipod') > -1) {
    alert('ios!');
    alert(userAgentStr);
   }
