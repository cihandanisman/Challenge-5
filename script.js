var saveButtonEl = $('.saveBtn');
var timeBlck = $('.time-block');




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.




$(function () {

  saveButtonEl.on('click', function () {
    var timeBlock = $(this).closest('.time-block');
    var timeBlockId = $(this).attr('id');
    var userInput = timeBlock.find('.description').val();

    localStorage.setItem(timeBlockId, userInput);
  })
  var Time = dayjs().format('MMM D, YYYY, hh:mm A');
  $('#currentDay').text(Time);

  timeBlck.each(function () {
    var timeBlockId = $(this).attr('id');
    var savedUserInput = localStorage.getItem(timeBlockId);

    $(this).find('.description').val(savedUserInput);
  });

  timeBlck.each(function () {
    var timeBlockId = $(this).attr('id');

    var currentHour = dayjs().format('h A');

    var hour = parseInt(timeBlockId.split("-")[1]);

    if (hour < currentHour && currentHour.includes('PM')) {
      $(this).removeClass('present future').addClass('past');
    } else if (hour == currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }


  })

// TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
