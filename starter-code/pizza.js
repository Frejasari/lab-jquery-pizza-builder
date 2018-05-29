// Write your Pizza Builder JavaScript in this file.
var price = 13;
$(document).ready(function() {
  var buttons = $(".controls ul li button");
  var pricePanel = $(".price strong");
  setDefault();
  // buttons.foreach(togglePizzaToppingVisibility(getToppingName($(this)), isSelected($(this))));
  buttons.on("click", function() {
    $(this).toggleClass("active");
    togglePizzaToppingVisibility(getToppingName($(this)), isSelected($(this)));
  });

  function togglePizzaToppingVisibility(toppingName, isSelected) {
    switch (toppingName) {
      case "pep":
        shouldShow(isSelected, $("#pizza section.pep"));
        togglePrice(Number(1), isSelected, 1);
        break;
      case "gre":
        shouldShow(isSelected, $("#pizza section.green-pepper"));
        togglePrice(2, isSelected, 1);
        break;
      case "mus":
        shouldShow(isSelected, $("#pizza section.mushroom"));
        togglePrice(3, isSelected, 1);
        break;
      case "sau":
        shouldAddClass(isSelected, $("#pizza .crust .sauce"), "sauce-white");
        togglePrice(4, isSelected, 3);
        break;
      case "cru":
        shouldAddClass(isSelected, $("#pizza .crust"), "crust-gluten-free");
        togglePrice(5, isSelected, 5);
        break;
    }
  }

  function getToppingName(jQueryElement) {
    return jQueryElement
      .prop("class")
      .split(" ")[1]
      .split("-")[1]
      .substring(0, 3);
  }

  function setDefault() {
    $(".price ul li:nth-child(4)").hide();
    $(".price ul li:nth-child(5)").hide();
    pricePanel.text("$" + price);
  }

  function togglePrice(liToppingIndex, shouldShow, addPrice) {
    if (shouldShow) {
      $(".price ul li:nth-child(" + liToppingIndex + ")").show();
      price += addPrice;
    } else {
      $(".price ul li:nth-child(" + liToppingIndex + ")").hide();
      price -= addPrice;
    }
    pricePanel.text("$" + price);
  }

  function isSelected(jQueryElement) {
    return jQueryElement.prop("class").includes("active");
  }

  function shouldAddClass(boolean, jQueryElement, className) {
    if (boolean) {
      jQueryElement.addClass(className);
    } else {
      jQueryElement.removeClass(className);
    }
  }

  function shouldShow(boolean, jQueryElement) {
    if (boolean) {
      jQueryElement.show();
    } else {
      jQueryElement.hide();
    }
  }
});
// function setVisibilities(toppingName) {
//  if( $(".controls ul li button.btn-pepperonni").prop('class').includes("active")){
//   $("#pizza section.pep").show();

//  }
// }
