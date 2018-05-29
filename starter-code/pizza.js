// Write your Pizza Builder JavaScript in this file.

$(document).ready(function() {
  $(".controls ul li button").on("click", function() {
    $(this).toggleClass("active");
    var toppingName = $(this)
      .prop("class")
      .split(" ")[1]
      .split("-")[1]
      .substring(0, 3);
    togglePizzaToppingVisibility(toppingName);
  });
});

function togglePizzaToppingVisibility(toppingName) {
  switch (toppingName) {
    case "pep":
      $("#pizza section.pep").toggle();
      break;
    case "gre":
      $("#pizza section.green-pepper").toggle();
      break;
    case "mus":
      $("#pizza section.mushroom").toggle();
      break;
    case "sau":
      $("#pizza .crust .sauce").toggleClass("sauce-white");
      break;
    case "cru":
      $("#pizza .crust").toggleClass("crust-gluten-free");
      break;
  }
}
