// display current date
let currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(currentDay);

function changeColor() {
  var hour = moment().hours();

  $(".time-block").each(function () {
    var current = parseInt($(this).attr("id"));

    if (current === hour) {
      $(this).addClass("present");
    } else if (current > hour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("past");
    }
  });
}

$(".saveBtn").on("click", function () {
  var taskValue = $(this).siblings(".hour").text();
  var taskTime = $(this).siblings(".description").val();
  localStorage.setItem(taskValue, taskTime);
});

function retrieveData() {
  $(".hour").each(function () {
    var current = $(this).text();
    var currentAsset = localStorage.getItem(current);

    if (currentAsset !== null) {
      $(this).siblings(".description").val(currentAsset);
    }
  });
}

changeColor();
retrieveData();