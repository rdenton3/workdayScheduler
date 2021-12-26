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

var Time = moment().hour()
console.log(Time)

// anytime the time block is clicked, have the form become editable
$(".textarea").on("click", function(){
    var text = $(this)
    .text()
    .trim();
    // create editable textarea
    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text)

    $(this).replaceWith(textInput)
    textInput.trigger("focus")
})

$(".saveBtn").on("click", function() {
    var text = $(".textarea")
    .val()
    .trim();
    console.log(text)
});

// function to create a time block

// function that checks if time of the time block is past or present to current time

// function to create form and take text from user 