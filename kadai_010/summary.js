$(function() {
  //「文字色変化」ボタンがクリックされた場合
  $('#change-color').on('click', () => {
    // 文字を青色に変える
    $('#target').css('color', 'blue');
  });

  // 「文字内容変化」ボタンがクリックされた場合
  $('#change-text').on('click', () => {
    //文字を「Hello!」に更新する
    $('#target').text('Hello!');
  });

  // 「フェードアウト」ボタンがクリックされた場合
  $('#fade-out').on('click', () => {
    // 文字をフェードアウトする
    $('#target').fadeOut();
  });

  // 「フェードイン」ボタンがクリックされた場合
  $('#fade-in').on('click', () => {
    // 文字をフフェードインする
    $('#target').fadeIn();
  });

});