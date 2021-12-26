var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(rightNow);

var currentTime = moment().format("hh:mm A")
console.log(currentTime)

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