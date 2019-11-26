document.addEventListener("DOMContentLoaded", function () {
  $(".container").click(function () {
    $(this).find('img').toggle();
  })
});
