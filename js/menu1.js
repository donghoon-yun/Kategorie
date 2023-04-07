$(document).ready(function(){
///////////////////gnb
$(".main").hover(function(){
  $(this).find(".sub").stop().slideDown();
},function(){
  $(this).find(".sub").stop().slideUp();
});

////////////mainVisual
let $img = $(".changeimg ul li");
let $btn = $(".btn ul li");
let $lbtn = $(".side_btn .lbtn");
let $rbtn = $(".side_btn .rbtn");

let oldidx=0;
let idx=0;
let img_n = $img.length;

function changeImg(idx){
  if(oldidx != idx){
    
    $btn.eq(oldidx).removeClass("active"); 
    $btn.eq(idx).addClass("active"); 
    $img.eq(oldidx).stop().fadeOut("300"); 
    $img.eq(idx).stop().fadeIn("300")

  };
  oldidx = idx;
};

function changeAuto(){
  idx++;
  if(idx > img_n-1){
    idx=0;
  };
  changeImg(idx)
};
timer = setInterval(changeAuto,4000);

$btn.click(function(){

  clearInterval(timer);
  idx=$(this).index();
  changeImg(idx);
  timer = setInterval(changeAuto,4000);
});


$rbtn.click(function(){

  clearInterval(timer);
  idx++;
  if(idx > img_n-1){
    idx=0;
  }
  changeImg(idx);
  timer = setInterval(changeAuto,4000)
});


$lbtn.click(function(){

  clearInterval(timer);
  idx--;
  if(idx <0){
    idx=img_n-1;
  }
  changeImg(idx);
  timer = setInterval(changeAuto,4000)
});





///////////////////////치료전 후
 ///box1)아래에서 위로....

$(".box1Text p:nth-child(2)").hover(function(){
  $(".box1 li:first-child").stop().animate({marginTop:"-250px"},300);
},function(){
  $(".box1 li:first-child").stop().animate({marginTop:"+70px"},300);
});
$(".box2Text p:nth-child(2)").hover(function(){
  $(".box2 li:first-child").stop().animate({marginTop:"-250px"},300);
},function(){
  $(".box2 li:first-child").stop().animate({marginTop:"+70px"},300);
});
$(".box3Text p:nth-child(2)").hover(function(){
  $(".box3 li:first-child").stop().animate({marginTop:"-250px"},300);
},function(){
  $(".box3 li:first-child").stop().animate({marginTop:"+70px"},300);
});




///////////////////////////////////////////////시계,버튼
$(".reservar h2").click(function(){
  $("table").slideToggle("show")
});
$(".reservar h2").click(function(){
  $("button").slideToggle("show")
});
$(".button").click(function(){
  $(".button").css("background-color","red")
});
  

/* //////////////////////오시는길 */
  

$(".title").click(function(){

  $(this).siblings(".title").removeClass("active");
  $(this).toggleClass("active");
  $(this).siblings(".txt").stop().slideUp();
  $(this).next().stop().slideToggle();


});



});
