// Grab todays date and time
var rightNow = moment().format("dddd, MMMM Do, YYYY");
// display time and date at top of page
$("#currentDay").text(rightNow)

// loop through timeblocks and assign as class past, present, or future
var colorCode = function() {
    // get current hour
    var currentHr = moment().hour();
    // compare currentHr to time in timeblock
    $(".time-block").each(function() {
        // get the time id in the current block and ocnvert it to a number
        var getHr = parseInt($(this).attr("id"))
        console.log(getHr)

        // check time and apply appropriate class
        if (getHr < currentHr) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }

        else if (getHr === currentHr) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }

        else {
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        }
    })
}

colorCode();
// periodically run color code function to check time
setInterval(colorCode, 60000);

// anytime the time block is clicked, have the form become editable and in focus
// $(".textarea").on("click", function(){
//     var text = $(this)
//     .text()
//     .trim();
//     // create editable textarea
//     var textInput = $("<textarea>")
//     .addClass("form-control")
//     .val(text)

//     $(this).replaceWith(textInput)
//     textInput.trigger("focus")
// })

// when save button is clicked, save to local storage
$(".saveBtn").on("click", function(event) {
    var text = $(this).siblings(".description").val();
    var timeID = $(this).parent().attr("id")

    localStorage.setItem(timeID, text);
});

// load content from local storage
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
$("#18 .description").val(localStorage.getItem("18"))
$("#19 .description").val(localStorage.getItem("19"))
$("#20 .description").val(localStorage.getItem("20"))
$("#21 .description").val(localStorage.getItem("21"))

