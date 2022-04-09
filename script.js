//moment.js for current date and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
//sets clock to change every second on page
let renderClock = function(){
    document.querySelector("#currentDay").innerHTML =
    `${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
};
renderClock();
setInterval(renderClock, 1000);
console.log()

var infoText = document.querySelector("#info");
var saveButtons = document.querySelector("#saveBtn");
var blockHour = document.querySelector("#time-block");


function eachTimeBlock(){
    $timeBlocks.each(function(){
      var currentBlock = $($this);
      var blockHr = parseInt(currentBlock.attr("data-hour"));
        var currentHour = moment().hour();

        if (blockHr < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockHr === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
});
trackHour();
}
