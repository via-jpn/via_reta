// ヘッダーナビゲーション変化
function changeColor() {
  var timing = 40; //　変化するタイミングを微調整する

  var scrollY = window.pageYOffset;
  var targetNav = document.getElementById('nav-bar-wrapper');

  var trigger1 = document.getElementById('mv01');
  var trigger2 = document.getElementById('mv02');

  var trigger1Y = trigger1.getBoundingClientRect().top;
  var trigger2Y = trigger2.getBoundingClientRect().top;

  console.log(scrollY);
  console.log("trigger1Y：　" + trigger1Y);
  console.log("trigger2Y：　" + trigger2Y);
  console.log("----------------");

  // メインビジュアル時は背景色を透明に
  // それ以外では背景色を暗い色に
  if( trigger1Y * -1 > -1 && trigger2Y * -1 < 0 ) {
    // targetNav.classList.add('bg1');
    targetNav.classList.remove('bg-1');
    targetNav.classList.remove('shadow-1');
    targetNav.classList.add('border-bottom');
  }else {
    targetNav.classList.remove('bg-3');
    targetNav.classList.add('bg-1');
    targetNav.classList.add('shadow-1');
    targetNav.classList.remove('border-bottom');
  }
}
window.addEventListener('scroll', changeColor);





// restyle bootstrap start
// ナビゲーションバー 閉じる
var navbarNav = document.getElementById('navbarNav');
var closeNav = function(item) {
  navbarNav.classList.remove('show');
}





// restyle some function start
// スムーススクロール
$(function(){
  $('a[href^="#"]').click(function(){
    //スクロールのスピード
    var speed = 700;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top - 0;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});




// ヘッダーのクラス判定
function bgJudge(target) {
  var headerNav = document.getElementById('nav-bar-wrapper');
  if(headerNav.classList.contains('bg-1')) {
  } else {
    headerNav.classList.toggle('bg-3');
  }
}