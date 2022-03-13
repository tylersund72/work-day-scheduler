// display current date
let currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(currentDay);

$(".saveBtn").on("click", function () {
  var taskValue = $(this).siblings(".description").val();
  var taskTime = $(this).parent().attr("id");
  localStorage.setItem(taskValue, taskTime);
});

function changeColor() {
  var momentTime = moment().hour();

  $(".description").each(function () {
    var columnTime = parseInt($(this).attr("id"));

    if (momentTime < columnTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else if (momentTime > columnTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else {
      $(this).removeClass("future");
      $(this).removeClass("past");
      $(this).addClass("present");
    }
  });
}
