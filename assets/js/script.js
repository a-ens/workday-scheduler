//for (i = 0; i < arrayLength; i++) {
//  $('<div class="results" />').text(nineToFive[i]).appendTo('body');
//}

// $.each(nineToFive, function(index, value) {
//     $('<div />', {
//       'text': value
//     }).appendTo('body');
//   });


const nineToFive = ["9, 10, 11, 12, 13, 14, 15, 16, 17"];



function getDate() {
  var currentDate = moment().format('dddd, MMMM Do');
  $("#currentDay").text(currentDate);
}

function getHour() {
  var currentHour = moment().format("HH")

};

window.onload = function() {
  var element = document.getElementsByClassName('#description');
  var hourOf = parseInt(element.getAttribute('data-index'), 10);
  console.log(number);
}

getHour();
getDate();

if (hourOf < currentHour ){
  $("#description").attr("class", "past");

} else if (hourOf === currentHour ){
  $("#description").attr("class", "present");

} else if (hourOf > currentHour ){
  $("#description").attr("class", "future");
};

  // creates save button
  var saveButton = $("<i class='far fa-save fa-lg'></i>")
  var savePlan = $("<button>")
      .attr({
          "class": "col-md-1 saveBtn"
  });
  saveEvent.append(saveButton);
  hourRow.append(hourField, hourPlan, savePlan);

  console.log(currentHour)