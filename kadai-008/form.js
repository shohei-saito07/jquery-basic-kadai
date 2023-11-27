$(function() {
  // class属性がbtnの要素をクリックされたら
  $('.btn').on('click', function (){
    $('.text-box').val("クリックされました！");
  });
});