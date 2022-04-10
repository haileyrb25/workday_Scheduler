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

//jquery syntax and save button
$(document).ready(function() {
$(".saveBtn").on("click", function() {
    var value = $(this).sibling("info").val();
    var time = $(this).parent().attr("id");
localStorage.setItem(time, value)
//this piece of code was givwn in hw startup- it let's us know what we are saving with save button
})


// var infoText = document.querySelector("#info");
// var saveButtons = document.querySelector("#saveBtn");
// var blockHour = document.querySelector("#time-block");

//update colors of each hour block 
function colorBlockChange() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
//conditionals for time blocks
        if (blockTime < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockTime === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        
    })
}
    colorBlockChange();
})
