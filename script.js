// pulling the css style variables in here so I don't have to keep toggling back and forth to see what the css and html call them
// body, textarea, jumbotron, description, time-block, row, hour, past, 
// present, saveBtn, saveBtn hover
moment().format("MMM Do YY")

var currentDay = (moment().format("MMM Do YYYY"));
var currentTime = (moment().format("h:mm a"));
var currentTimeDay = moment();
console.log(currentTimeDay)
//console.log(moment().format("MMM Do YYYY") )
//console.log(currentDay)


// States time and day at tope of page 

$("#currentDay").text(moment().format("MMM Do YYYY"));
$("#currentTime").text(moment().format("h:mm a"));


// time blocks start here, going from 7am to 7pm due to average workday for most is 9am to 5pm, that's 13 different "blocks"

var timeBlock1 = moment().startOf('day').add(7, "hours").format("LLL");
// testing to see if this does infact return 7am
// console.log(timeBlock1)

var timeBlock2 = moment().startOf('day').add(8, "hours").format("LLL");
var timeBlock3 = moment().startOf('day').add(9, "hours").format("LLL");
var timeBlock4 = moment().startOf('day').add(10, "hours").format("LLL");
var timeBlock5 = moment().startOf('day').add(11, "hours").format("LLL");
var timeBlock6 = moment().startOf('day').add(12, "hours").format("LLL");
var timeBlock7 = moment().startOf('day').add(13, "hours").format("LLL");

//testing to see if it will return 1300 or 100; should return 1300 (it does infact return 1300)
//console.log(timeBlock7)

var timeBlock8 = moment().startOf('day').add(14, "hours").format("LLL");
var timeBlock9 = moment().startOf('day').add(15, "hours").format("LLL");
var timeBlock10 = moment().startOf('day').add(16, "hours").format("LLL");
var timeBlock11 = moment().startOf('day').add(17, "hours").format("LLL");
var timeBlock12 = moment().startOf('day').add(18, "hours").format("LLL");
var timeBlock13 = moment().startOf('day').add(19, "hours").format("LLL");

//Need to take the time from timeblocks and have them appear on html page so user knows which block is which
// .val retrieves items left in local storage and appends them to the page
$(".timeBlock1").attr("placeholder", timeBlock1)
$(".timeBlock1").val(localStorage.getItem("timeBlock1"))
console.log(localStorage.getItem("timeBlock1"))

$("#timeBlock1").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock1").val())
    let submittedText = $(".timeBlock1").val()
    localStorage.setItem("timeBlock1", submittedText)
})

$(".timeBlock2").attr("placeholder", timeBlock2)
$(".timeBlock2").val(localStorage.getItem("timeBlock2"))

$("#timeBlock2").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock2").val())
    let submittedText = $(".timeBlock2").val()
    localStorage.setItem("timeBlock2", submittedText)
})


$(".timeBlock3").attr("placeholder", timeBlock3)
$(".timeBlock3").val(localStorage.getItem("timeBlock3"))

$("#timeBlock3").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock3").val())
    let submittedText = $(".timeBlock3").val()
    localStorage.setItem("timeBlock3", submittedText)
})


$(".timeBlock4").attr("placeholder", timeBlock4)
$(".timeBlock4").val(localStorage.getItem("timeBlock4"))

$("#timeBlock4").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock4").val())
    let submittedText = $(".timeBlock4").val()
    localStorage.setItem("timeBlock4", submittedText)
})

$(".timeBlock5").attr("placeholder", timeBlock5)
$(".timeBlock5").val(localStorage.getItem("timeBlock5"))

$("#timeBlock5").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock5").val())
    let submittedText = $(".timeBlock5").val()
    localStorage.setItem("timeBlock5", submittedText)
})

$(".timeBlock6").attr("placeholder", timeBlock6)
$(".timeBlock6").val(localStorage.getItem("timeBlock6"))

$("#timeBlock6").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock6").val())
    let submittedText = $(".timeBlock6").val()
    localStorage.setItem("timeBlock6", submittedText)
})

$(".timeBlock7").attr("placeholder", timeBlock7)
$(".timeBlock7").val(localStorage.getItem("timeBlock7"))


$("#timeBlock7").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock7").val())
    let submittedText = $(".timeBlock7").val()
    localStorage.setItem("timeBlock7", submittedText)
})

$(".timeBlock8").attr("placeholder", timeBlock8)
$(".timeBlock8").val(localStorage.getItem("timeBlock8"))

$("#timeBlock8").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock8").val())
    let submittedText = $(".timeBlock8").val()
    localStorage.setItem("timeBlock8", submittedText)
})

$(".timeBlock9").attr("placeholder", timeBlock9)
$(".timeBlock9").val(localStorage.getItem("timeBlock9"))

$("#timeBlock9").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock9").val())
    let submittedText = $(".timeBlock9").val()
    localStorage.setItem("timeBlock9", submittedText)
})

$(".timeBlock10").attr("placeholder", timeBlock10)
$(".timeBlock10").val(localStorage.getItem("timeBlock10"))

$("#timeBlock10").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock10").val())
    let submittedText = $(".timeBlock10").val()
    localStorage.setItem("timeBlock10", submittedText)
})

$(".timeBlock11").attr("placeholder", timeBlock11)
$(".timeBlock11").val(localStorage.getItem("timeBlock11"))

$("#timeBlock11").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock11").val())
    let submittedText = $(".timeBlock11").val()
    localStorage.setItem("timeBlock11", submittedText)
})

$(".timeBlock12").attr("placeholder", timeBlock12)
$(".timeBlock12").val(localStorage.getItem("timeBlock12"))

$("#timeBlock12").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock12").val())
    let submittedText = $(".timeBlock12").val()
    localStorage.setItem("timeBlock12", submittedText)
})

$(".timeBlock13").attr("placeholder", timeBlock13)
$(".timeBlock13").val(localStorage.getItem("timeBlock13"))

$("#timeBlock13").submit(function (event) {
    event.preventDefault()
    console.log($(".timeBlock13").val())
    let submittedText = $(".timeBlock13").val()
    localStorage.setItem("timeBlock13", submittedText)
})

//Saving to local storage

// need to append 


// Testing currentTimeDay vs timeBlocks, if currentTimeDay is before/after/present timeBlock, color changes

function timeBlockColor() { }
var currentTimeDay = moment();
// Timeblockcolor for timeBlock1
if (currentTimeDay.isAfter(timeBlock1)) {
    $("#timeBlock1").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock1)) {
    $("#timeBlock1").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock1)) {
    $("#timeBlock1").addClass("future")
};

// Timeblockcolor for timeBlock2

if (currentTimeDay.isAfter(timeBlock2)) {
    $("#timeBlock2").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock2)) {
    $("#timeBlock2").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock2)) {
    $("#timeBlock2").addClass("future")
};

// Timeblockcolor for timeBlock3

if (currentTimeDay.isAfter(timeBlock3)) {
    $("#timeBlock3").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock3)) {
    $("#timeBlock3").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock3)) {
    $("#timeBlock3").addClass("future")    
};

// Timeblockcolor for timeBlock4

if (currentTimeDay.isAfter(timeBlock4)) {
    $("#timeBlock4").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock4)) {
    $("#timeBlock4").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock4)) {
    $("#timeBlock4").addClass("future")

// Timeblockcolor for timeBlock5

}; if (currentTimeDay.isAfter(timeBlock5)) {
    $("#timeBlock5").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock5)) {
    $("#timeBlock5").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock5)) {
    $("#timeBlock5").addClass("future")

// Timeblockcolor for timeBlock6

}; if (currentTimeDay.isAfter(timeBlock6)) {
    $("#timeBlock6").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock6)) {
    $("#timeBlock6").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock6)) {
    $("#timeBlock6").addClass("future")

// Timeblockcolor for timeBlock7

}; if (currentTimeDay.isAfter(timeBlock7)) {
    $("#timeBlock7").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock7)) {
    $("#timeBlock7").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock7)) {
    $("#timeBlock7").addClass("future")
}

// Timeblockcolor for timeBlock8

if (currentTimeDay.isAfter(timeBlock8)) {
    $("#timeBlock8").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock8)) {
    $("#timeBlock8").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock8)) {
    $("#timeBlock8").addClass("future")
};

// Timeblockcolor for timeBlock9

 if (currentTimeDay.isAfter(timeBlock9)) {
    $("#timeBlock9").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock9)) {
    $("#timeBlock9").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock9)) {
    $("#timeBlock9").addClass("future")
}

// Timeblockcolor for timeBlock 10

if (currentTimeDay.isAfter(timeBlock10)) {
    $("#timeBlock10").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock10)) {
    $("#timeBlock10").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock10)) {
    $("#timeBlock10").addClass("future")
}

// Timeblockcolor for timeBlock 10

if (currentTimeDay.isAfter(timeBlock10)) {
    $("#timeBlock10").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock10)) {
    $("#timeBlock10").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock10)) {
    $("#timeBlock10").addClass("future")
};

// Timeblockcolor for timeBlock 11

if (currentTimeDay.isAfter(timeBlock11)) {
    $("#timeBlock11").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock11)) {
    $("#timeBlock11").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock11)) {
    $("#timeBlock11").addClass("future")
};

// Timeblockcolor for timeBlock 12

if (currentTimeDay.isAfter(timeBlock12)) {
    $("#timeBlock12").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock12)) {
    $("#timeBlock12").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock12)) {
    $("#timeBlock12").addClass("future")
};

// Timeblockcolor for timeBlock 13

if (currentTimeDay.isAfter(timeBlock13)) {
    $("#timeBlock13").addClass("past")
}
else if (currentTimeDay.isSame(timeBlock13)) {
    $("#timeBlock13").addClass("present")
}
else if (currentTimeDay.isBefore(timeBlock13)) {
    $("#timeBlock13").addClass("future")
};

$(".saveBtn").on("click", function() {
    let submittedText = $(".timeBlock1").val()
    localStorage.setItem("timeBlock1", submittedText)
  });