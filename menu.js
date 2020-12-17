
$(".js-toggle-trigger").attr("aria-expanded", false).attr("aria-label", "Toggle site menu");


$(".js-toggle-trigger").click(function () {
  
  let expanded = $(this).attr("aria-expanded") === "true" || false;
  
  $(this).attr("aria-expanded", !expanded);
});
