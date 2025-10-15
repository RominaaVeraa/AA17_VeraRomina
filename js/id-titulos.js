$(function () {
  $('#titulo1').on('click', function () {
    const $t = $('#titulo1');
    $t.css('color', '#ff0000');
    $t.css('background-color', '#ffff00');
    $t.css('font-family', 'Courier');
  });

  $('#titulo2').on('click', function () {
    const $t = $('#titulo2');
    $t.css('color', '#ffff00');
    $t.css('background-color', '#ff0000');
    $t.css('font-family', 'Arial');
  });
});
