$('#click-me').on('click', function () {
  alert('Hello, World!');
});

$('ul').on('click', 'li', function (e) {
  $(this).toggleClass('is-clicked');
});

var $link = $('.stego-link');

$link.on('click', function (e) {
  e.preventDefault();
  alert($(this).attr('href'));
});

var $input = $('#grocery-input');
var $list = $(".list");

$('form').on('submit', function (e) {
  var $li = $('<li>');
  e.preventDefault();
  $li.html($input.val());
  $list.append($li);
});
