$(function() {
  $('.works-item').hover(
    function() {
      $(this).find('.top-item__title').children().addClass("rotate-up");
      $(this).find('.works-item__right').addClass("shrink");
    },
    function() {
      $(this).find('.top-item__title').children().removeClass("rotate-up");
      $(this).find('.works-item__right').removeClass("shrink");
    }
  );

  let count = $('.works-items').children().length;
  for (let index = 0; index < count; index++) {
    $('.works-item').find('span')[index].append(index + 1 + "/" + count);
  }
});