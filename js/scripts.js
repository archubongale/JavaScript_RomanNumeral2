function romanNumerals(number) {
  if((number > 0) && (number < 5000)){
    var r = '',
        decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (var i = 0; i < decimals.length; i++) {
        while (number >= decimals[i]) {
            r += roman[i];
            number -= decimals[i];
        }
    }
    return r;
  } else {
    return "Only numbers between 1 and 4999";
  }
};

$(document).ready(function() {
  $("form#roman-numerals").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = romanNumerals(number);

    $(".output").text(result);

    if(!result) {
      $(".not").text("not");
    }
    else {
      $(".not").text("");
    }

    $("#result").show();
      event.preventDefault();
  });
});
