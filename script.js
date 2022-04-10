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
//this piece of code was given in hw startup- it let's us know what we are saving with save button


//load any saved data from LocalStorage for each hour
$("#nine .info").val(localStorage.getItem("nine"));
$("#ten .info").val(localStorage.getItem("ten"));
$("#eleven .info").val(localStorage.getItem("eleven"));
$("#twelve .info").val(localStorage.getItem("twelve"));
$("#thirteen .info").val(localStorage.getItem("thirteen"));
$("#fourteen .info").val(localStorage.getItem("fourteen"));
$("#fifteen .info").val(localStorage.getItem("fifteen"));
$("#sixteen .info").val(localStorage.getItem("sixteen"));
$("#seventeen .info").val(localStorage.getItem("seventeen"));
})
console.log()

//update colors of each hour block 
function colorBlockChange() {
    var currentHourBlock = moment().hour();

    $(".time-block").each(function() {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
//conditionals for time blocks- in order to set them to past present or future (from css)
        if (blockTime > currentHourBlock) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (blockTime === currentHourBlock) {
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
//returns function back
    colorBlockChange();
})
